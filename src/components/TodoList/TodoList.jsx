import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(getTodos);

  useEffect(() => {
    localStorage.setItem('TodoList', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDelete = (todo) =>
    setTodos(todos.filter((item) => item.id !== todo.id));
  const handleChange = (todo) => {
    setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
  };
  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {filtered.length > 0 &&
          filtered.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onDelete={handleDelete}
              onChange={handleChange}
            />
          ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getTodos() {
  const todos = localStorage.getItem('TodoList');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((item) => item.status === filter);
}
