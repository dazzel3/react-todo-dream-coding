import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((item, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                item === filter && styles.selected
              }`}
              onClick={() => onChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
