import { React, createRef, memo } from 'react';

const Addinputform = memo(props => {
  const formRef = createRef();
  const inputRef = createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="addForm" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="addForm__input"
        placeholder="Habit"
      />
      <button className="addForm__btn">Add</button>
    </form>
  );
});

export default Addinputform;