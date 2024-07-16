import React from 'react';
import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ handleAddContact }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    handleAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <label className='label' htmlFor="name">Name</label>
          <Field name="name" className={s.input} id="name" />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label className='label' htmlFor="number">Number</label>
          <Field name="number" className={s.input} id="number" />
          <ErrorMessage name="number" component="div" className={s.error} />

          <button className={s.btn} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
