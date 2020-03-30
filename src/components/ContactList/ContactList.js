import React from "react";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact, night }) => (
  <div>
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={night ? styles.night : null}>
            {name}: {number}
          <button className={styles.button} onClick={() => onRemoveContact(id)}>
            Delete Contact
          </button>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired
};

export default withTheme(ContactList);
