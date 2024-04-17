import React, { useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'WangHo', email: 'wang@example.com' },
    { id: 2, name: 'Kajito', email: 'kajito@example.com' },
    { id: 3, name: 'Tarzan', email: 'tarzan@example.com' },
  ]);
 console.log(contacts);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');

  const handleNameChange = (e) => {
    setNewContactName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewContactEmail(e.target.value);
  };

  const handleAddContact = (e) => {
    e.preventDefault()    
    const newContact = {
      id: contacts.length + 1,
      name: newContactName,
      email: newContactEmail,
    };
    setContacts([...contacts, newContact]);
    setNewContactName('');
    setNewContactEmail('');
  };

  return (
    <div>
      <h2>Contact List</h2>
      <form onSubmit={(e)=>handleAddContact(e)}>
        <input
          type="text"
          placeholder="Name"
          value={newContactName}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={newContactEmail}
          onChange={handleEmailChange}
        />
        <button type="submit">Add Contact</button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
