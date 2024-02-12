import React from 'react';
import { TiDelete } from 'react-icons/ti';

export default function Todo({ todo, onDelete, onChange }) {
  const { text, status } = todo;
  const handleClick = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'done' : 'active';
    onChange({ ...todo, status });
  };

  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        checked={status === 'done'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleClick}>
        <TiDelete />
      </button>
    </li>
  );
}
