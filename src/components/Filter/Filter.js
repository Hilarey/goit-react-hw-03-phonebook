import React from "react";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import styles from "./Filter.module.css";

const Filter = ({ value, onFilterChange, night }) => {
  return (
    <div>
      <h4 className={night ? styles.night : null}>Find contacts by name</h4>
      <input
        type="text"
        value={value}
        onChange={e => onFilterChange(e.target.value)}
        placeholder="Поиск контакта"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default withTheme(Filter);