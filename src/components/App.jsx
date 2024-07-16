import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';  
import ContactList from './ContactList/ContactList';
import contactsData from '../contacts.json';  //завантажуємо наш початковий набір контактів

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('contacts')); //викликаємо з локал стореджу наші контакти
    return savedContacts ? savedContacts : contactsData;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    setContacts(prev => [...prev, newContact]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='container'>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
