import React, { Component } from "react";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired
  };
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    const { night } = this.props;
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <label className={night ? styles.night : null}>
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              placeholder="Введите имя контакта"
            />
          </label>
          <br />
          <br />
          <label className={night ? styles.night : null}>
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
              placeholder="Введите номер контакта"
            />
          </label>
          <br />
          <br />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default withTheme(ContactForm);