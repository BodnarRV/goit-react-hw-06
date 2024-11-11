import { useState, useEffect } from "react";
import "./App.css";

// components
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    try {
      return savedContacts ? JSON.parse(savedContacts) : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
    } catch (error) {
      console.error("Error parsing contacts from localStorage:", error);
    }
  });

  //Save contacts to localStorage when contacts arr is changing
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  })

  const [filter, setFilter] = useState('');

  const handleSearch = (event) => {setFilter(event.target.value)}
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


  //Add contact
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  //Delete contact
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} handleSearch={handleSearch}/>
      <ContactList contacts={filteredContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
