import React from 'react';
import { TiDelete } from 'react-icons/ti';

export default function Todo({ todo, onDelete }) {
  const handleClick = () => onDelete(todo);

  return (
    <li>
      <input type='checkbox' value={todo.status} />
      {todo.text}
      <button onClick={handleClick}>
        <TiDelete />
      </button>
    </li>
  );
}
