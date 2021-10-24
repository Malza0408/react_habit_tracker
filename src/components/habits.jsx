import React, { PureComponent } from 'react';
import Addinputform from './addinputform';
import Habit from './habit';

class Habits extends PureComponent {
  render() {
    return (
      <>
        {console.log('habits')}
        <Addinputform addHabit={this.props.addHabit}/>
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
        <button className="reset" onClick={this.props.resetCount}>Reset Count</button>
      </>
    );
  }
}

export default Habits;