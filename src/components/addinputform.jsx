import React, { PureComponent, createRef } from 'react';

class Addinputform extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHabit(this.inputRef.current.value);
  }

  render() {
    return (
      <form className="addForm" onSubmit={this.handleSubmit}>
        <input className="addForm__input" type="text" placeholder="Habit" maxLength="15" ref={this.inputRef}/>
        <button className="addForm__btn" type="submit">Add</button>
      </form>
    );
  }
}

export default Addinputform;