import { React, createRef, memo } from 'react';

const Addinputform = memo((props) => {
  const inputRef = createRef();
  const formRef = createRef();

  const handleSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name&& props.addHabit(name);
    inputRef.current.focus();
    formRef.current.reset();
  }

  return (
    <form className="addForm" onSubmit={handleSubmit} ref={formRef}>
      <input className="addForm__input" type="text" placeholder="Habit" maxLength="20" ref={inputRef} required/>
      <button className="addForm__btn" type="submit">Add</button>
    </form>
  );
})

export default Addinputform;