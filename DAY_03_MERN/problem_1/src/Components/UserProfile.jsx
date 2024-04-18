import React, { useState } from 'react';
// import './App.css';

export function UserProfile({ name, email, bio }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export function EditProfile({ name, email, bio }) {
  const [formData, setFormData] = useState({ name, email, bio });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <label>Bio:</label>
      <textarea name="bio" value={formData.bio} onChange={handleChange} />
    </div>
  );
}

