import React, { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const loadContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : initialContacts; 
};

const App = () => {
  const [contacts, setContacts] = useState(loadContacts); 
  const [searchQuery, setSearchQuery] = useState('');

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts)); 
      return updatedContacts;
    });
  };


  const deleteContact = (contactId) => {
    setContacts(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.id !== contactId);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts)); 
      return updatedContacts;
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;