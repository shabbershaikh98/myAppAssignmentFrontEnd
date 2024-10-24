import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Display a success message and reset form fields
    setShowSuccess(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {showSuccess && <p style={{ color: 'green' }}>Thank you for your message!</p>}
    </div>
  );
}

export default App;
