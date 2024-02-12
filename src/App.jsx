import React, { useState } from 'react';
import styles from './App.module.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

const filters = ['all', 'active', 'done'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className={styles.bg}>
      <Header filters={filters} filter={filter} onChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}
