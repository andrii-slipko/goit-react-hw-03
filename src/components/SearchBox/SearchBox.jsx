import React from 'react';
import styles from './SearchBox.module.css'

const SearchBox = ({ searchQuery, onSearchChange }) => {
  return (
    <div className={styles.searchbox}>
      <label className={styles.label}>
        Find contact by name:
        <input className={styles.input}
          type="text"
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)} 
        />
      </label>
    </div>
  );
};

export default SearchBox;