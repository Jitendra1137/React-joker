import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const newValue = event.target.value;

    setFormData((currData) => {
      return {
        ...currData,
        [fieldName]: newValue
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      username: '',
      password: ''
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />
        <br /><br />
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter your Username" value={formData.username} onChange={handleInputChange} id="username" name="username" />
        <br /><br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} id="password" name="password" />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
