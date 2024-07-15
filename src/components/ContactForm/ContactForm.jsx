import React from 'react';
import s from './ContactForm.module.css';

const ContactForm = ({ newContactName, newContactNumber, setNewContactName, setNewContactNumber, handleAddContact }) => {
  return (
    <div className={s.wrapper}>
      <label className='label' htmlFor="name">Name</label>
      <input
        value={newContactName}
        onChange={e => setNewContactName(e.target.value)}
        className={s.input}
        id="name"
        type="text"
      />
      <label className='label' htmlFor="number">Number</label>
      <input
        value={newContactNumber}
        onChange={e => setNewContactNumber(e.target.value)}
        className={s.input}
        id="number"
        type="text"
      />
      <button onClick={handleAddContact} className={s.btn} type="button">Add Contact</button>
    </div>
  );
};

export default ContactForm;
