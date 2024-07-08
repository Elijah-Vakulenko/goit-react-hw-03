import React from 'react';
 import s from './ContactForm.module.css'

const ContactForm = () => {

const handleChange = () => {}

  return (
    <div className={s.form}>
      <label className='label' htmlFor="name">Name </label>
      <input className={s.input} 
        id="name" 
        type="text" 
        onChange={handleChange} 
      />
      <label className='label' htmlFor="number">Number</label>
      <input className={s.input} 
        id="number" 
        type="text" 
        onChange={handleChange} 
      />
      <button className={s.btn} type="button">Add Contact</button>
    </div>
  )
}

export default ContactForm