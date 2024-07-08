import React from 'react';
import s from './ContactList.module.css'
 import Contact from "../Contact/Contact"

const ContactList = () => {
  return (
      <div className={s.list}> <Contact />
          <Contact />
          <Contact />
      </div>
  )
}

export default ContactList