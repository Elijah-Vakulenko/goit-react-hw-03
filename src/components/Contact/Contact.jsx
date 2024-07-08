import React from 'react';
 import s from './Contact.module.css'

const Contact = () => {
  return (
      <div className={s.contact}>
          <div>
            <ul className={s.list}>
              <li>Name</li>
              <li>PhoneNumber</li>
            </ul>
      </div>
      <button className={s.btn} type="button">Delete</button>
    </div>
  )
}

export default Contact;