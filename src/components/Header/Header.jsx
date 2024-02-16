import React, { useContext } from 'react';
import styles from './Header.module.css';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { DarkModeContext } from '../../context/DarkModeContext';

export default function Header({ filters, filter, onChange }) {
  const { darkMode, toggleMode } = useContext(DarkModeContext);

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={toggleMode}>
        {darkMode ? (
          <MdOutlineDarkMode color='#464b50' size={28} />
        ) : (
          <MdDarkMode color='#464b50' size={28} />
        )}
      </button>
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
