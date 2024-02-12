import React, { useState } from 'react';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '공부하기', status: 'active' },
    { id: '2', text: '청소하기', status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDelete = (todo) =>
    setTodos(todos.filter((item) => item !== todo));

  return (
    <section className={styles.bg}>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} todo={item} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
