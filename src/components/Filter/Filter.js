import React from "react";
import PropTypes from 'prop-types';

export default function Filter({ value, onFilterChange }) {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        value={value}
        onChange={e => onFilterChange(e.target.value)}
        placeholder="Поиск контакта"
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
