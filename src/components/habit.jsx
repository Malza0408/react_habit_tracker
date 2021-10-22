import React, { Component } from 'react';

class Habit extends Component {

  handleAdd = () => {
    this.props.handleAdd(this.props.habit);
  }
  
  handleMinus = () => {
    this.props.handleMinus(this.props.habit);
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.habit);
  }

  render() {
    const { name, count } = this.props.habit;
    return (
        <li>
          <span className="habit__title">{name}</span>
          <span className="habit__count">{count}</span>
          <button className="habit__plusBtn" onClick={this.handleAdd}><i className="fas fa-plus-square"></i></button>
          <button className="habit__minusBtn" onClick={this.handleMinus}><i className="fas fa-minus-square"></i></button>
          <button className="habit__trashBtn" onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
        </li>
    );
  }
}

export default Habit;