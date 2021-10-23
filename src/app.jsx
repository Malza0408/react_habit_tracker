import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Addinputform from './components/addinputform';

class App extends Component {
  state = {
    habits: [
      { id: 0, name: "Reading", count: 0 },
      { id: 1, name: "Running", count: 0 },
      { id: 2, name: "Coding", count: 0 }
    ]
  };

  handleAdd = habit => {
    const habits = this.state.habits.map(value => {
      if (value.id === habit.id) {
        return { ...value, count: habit.count + 1 };
      }
      return value;
    })
    this.setState({
      habits
    })
  }

  handleMinus = habit => {
    const habits = this.state.habits.map(value => {
      if (value.id === habit.id) {
        const count = habit.count - 1;
        return { ...value, count: count < 0 ? 0 : count };
      }
      return value;
    })

    this.setState({
      habits,
    })
  }

  handleDelete = habit => {
    const habits = this.state.habits.filter(value => {
      return value.id !== habit.id;
    })

    this.setState({
      habits
    })
  }

  addHabit = name => {
    const habits = [...this.state.habits, {
      id: new Date(),
      name,
      count: 0,
    }]
    this.setState({
      habits
    })
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Addinputform addHabit={this.addHabit}/>
        <Habits
          habits={this.state.habits}
          handleAdd={this.handleAdd}
          handleMinus={this.handleMinus}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
