import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch()
  
  const handleDelete = () => dispatch(deleteContact(id))

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
      <button className="contact-delete" type="submit" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
