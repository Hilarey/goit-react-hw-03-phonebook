import React from "react";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import styles from "./ToggleTheme.module.css";

const ToggleTheme = ({ night, onToggleTheme }) => (
  <>
    <button type="button" onClick={onToggleTheme} className={styles.button}>
      {night ? "Night Mode" : "Day Mode"}
    </button>
  </>
);

ToggleTheme.propTypes = {
  night: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired
};

export default withTheme(ToggleTheme);
