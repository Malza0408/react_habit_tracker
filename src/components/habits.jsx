import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
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

  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => {
            return <Habit key={habit.id} habit={habit} handleAdd={this.handleAdd} handleMinus={this.handleMinus} handleDelete={this.handleDelete}/>
          })
        }
      </ul>
    );
  }
}

export default Habits;