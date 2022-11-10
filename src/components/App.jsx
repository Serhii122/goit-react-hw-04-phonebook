import { useState, useEffect } from 'react';
import { FormBox } from './App.styled';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <FormBox>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactsList
        contacts={getFilteredContacts()}
        onDelete={onDeleteContact}
      />
    </FormBox>
  );
}


