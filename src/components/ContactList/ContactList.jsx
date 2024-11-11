import React from "react";
import './ContactList.css'
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="contacts-container">
      {contacts.map((contact) => (
        <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete} />
      ))}
    </div>
  );
}
