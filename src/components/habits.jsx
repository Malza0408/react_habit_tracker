import React, { PureComponent } from 'react';
import Habit from './habit';

class Habits extends PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.habits.map(habit => {
            return <
              Habit key={habit.id}
              habit={habit}
              handleAdd={this.props.handleAdd}
              handleMinus={this.props.handleMinus}
              handleDelete={this.props.handleDelete}
            />
          })
        }
      </ul>
    );
  }
}

export default Habits;