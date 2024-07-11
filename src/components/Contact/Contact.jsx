import React from 'react';
 import s from './Contact.module.css'

const Contact = ({name, number, handleDeleteContact}) => {
  return (
      <div className={s.contact}>
          <div>
            <ul className={s.list}>
          <li> {name}</li>
          <li> {number}</li>
            </ul>
      </div>
      <button onClick={handleDeleteContact} className={s.btn} type="button">Delete</button>
    </div>
  )
}

export default Contact;