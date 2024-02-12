import React from 'react';
import { TiDelete } from 'react-icons/ti';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onChange }) {
  const { text, status } = todo;
  const handleClick = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'done' : 'active';
    onChange({ ...todo, status });
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'done'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor='checkbox'>
        {text}
      </label>
      <button className={styles.button} onClick={handleClick}>
        <TiDelete
          size={25}
          color='#99a5b0'
          onMouseOver={({ target }) => (target.style.color = '#647788')}
          onMouseOut={({ target }) => (target.style.color = '#99a5b0')}
        />
      </button>
    </li>
  );
}
