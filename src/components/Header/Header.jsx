import React from 'react';

export default function Header({ filters, filter, onChange }) {
  return (
    <header>
      <ul>
        {filters.map((item, index) => (
          <li key={index}>
            <button onClick={() => onChange(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
