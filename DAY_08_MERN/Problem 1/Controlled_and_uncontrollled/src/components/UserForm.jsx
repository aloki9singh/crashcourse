import React, { useState, useRef } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const emailRef = useRef(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name (controlled):', name);
    console.log('Email (uncontrolled):', emailRef.current.value);
  };

  const handleBlur = () => {
    if (name.length < 3) {
      setError('Name must be at least 3 characters long');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleChange} onBlur={handleBlur} />
          {error && <p>{error}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
