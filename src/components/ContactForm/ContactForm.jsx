import React from "react";
import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from 'nanoid'

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  contactName: "",
  phoneNumber: "",
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(),
      name: values.contactName,
      number: values.phoneNumber,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className="form-container">
        <label className="form-label" htmlFor={nameFieldId}>Name</label>
        <Field className="form-field" type="text" name="contactName" id={nameFieldId} />
        <ErrorMessage className="form-error" name="contactName" component="span" />

        <label className="form-label" htmlFor={phoneFieldId}>Number</label>
        <Field className="form-field" type="phone" name="phoneNumber" id={phoneFieldId} />
        <ErrorMessage className="form-error" name="phoneNumber" component="span" />

        <button className="form-btn" type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
