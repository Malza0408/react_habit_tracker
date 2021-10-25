import React from 'react';
import Addinputform from './addinputform';
import Habit from './habit';

const Habits = ({ habits, onIncrement, onDecrement, onDelete, onAdd, onReset }) => {
  return (
    <div className="habits">
      <Addinputform onAdd={onAdd} />
      <ul>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits__reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;