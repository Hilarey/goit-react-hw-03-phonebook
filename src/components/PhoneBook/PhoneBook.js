import React, { Component } from "react";
import shortid from "shortid";
import withTheme from "../../HOC/withTheme";
import ToggleTheme from "../ToggleTheme/ToggleTheme.js";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "../PhoneBook/PhoneBook.module.css";

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (name, number) => {
    if (this.contactAvailable(name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  };

  handleRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId)
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  handleVisibleTasks = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  contactAvailable = contact => {
    const { contacts } = this.state;
    return contacts.find(
      ({ name }) => name.toLowerCase() === contact.toLowerCase()
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const { night } = this.props;
    const getVisibleTasks = this.handleVisibleTasks();
    return (
      <>
        <h1 className={night ? styles.night : null}>Phonebook</h1>
        <ToggleTheme />
        <ContactForm onAddContact={this.handleAddContact} />
        <h2 className={night ? styles.night : null}>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter value={filter} onFilterChange={this.handleFilterChange} />
        )}
        <ContactList
          contacts={getVisibleTasks}
          onRemoveContact={this.handleRemoveContact}
        />
      </>
    );
  }
}

export default withTheme(PhoneBook);