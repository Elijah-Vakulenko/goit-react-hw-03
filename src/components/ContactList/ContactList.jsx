import React, { useState } from 'react';
import s from './ContactList.module.css'
import Contact from "../Contact/Contact"
import contacts from '../../contacts.json';
 


const ContactList = () => {
  const [cont, setCont] = useState(contacts);

  const handleDeleteContact = id => {
  console.log(id);
}

  return (
     <ul className={s.list}>
      {cont.map(item => (
        <Contact handleDeleteContact={handleDeleteContact} key={item.id} {...item} />
        ))}
     </ul>
  )
}

export default ContactList