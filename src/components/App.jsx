import React, { useState } from 'react';
import s from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactsData from '../contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleAddContact = () => {
    const newContact = {
      id: `${Date.now()}`,
      name: newContactName,
      number: newContactNumber
    };
    setContacts(prev => [...prev, newContact]);
    setNewContactName('');
    setNewContactNumber('');
  };

  return (
    <div className='container'>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm
        newContactName={newContactName}
        newContactNumber={newContactNumber}
        setNewContactName={setNewContactName}
        setNewContactNumber={setNewContactNumber}
        handleAddContact={handleAddContact}
      />
      <SearchBox />
      <ContactList contacts={contacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
