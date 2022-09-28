import React from 'react';
import cl from './CustomSelect.module.css';

const CustomSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className={cl.SelectWrap}>
      <select
        className={cl.Select}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option disabled value="">{defaultValue}</option>
        {options.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )}
      </select>
    </div>
  );
};

export default CustomSelect;
