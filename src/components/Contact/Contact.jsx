import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <p className="contact-info-name">
          <FontAwesomeIcon className="icon" icon={faUser} color="black" />
          {name}
        </p>
        <p className="contact-info-number">
          <FontAwesomeIcon className="icon" icon={faPhone} color="black" />
          {number}
        </p>
      </div>
      <button className="contact-delete" type="submit" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
