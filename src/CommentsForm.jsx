import React, { useState } from 'react';

export default function CommentsForm() {
  const [formData, setFormData] = useState({
    username: '',
    remarks: '',
    rating: 5,
  });

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: '',
      remarks: '',
      rating: 5,
    });
  };

  return (
    <div>
      <h1>comments form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input type="text" placeholder="Username" value={formData.username} onChange={handleInputChange} id="username" name="username" />
        <br /><br />
        <label htmlFor="remark">Remarks</label>
        <textarea name="remarks" id="remark" cols="30" rows="10" value={formData.remarks} placeholder="Add few remarks" onChange={handleInputChange}></textarea>
        <br /><br />
        <label htmlFor="rating">Rating</label>
        <input type="number" placeholder="Rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating" />
        <br /><br />
        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}
