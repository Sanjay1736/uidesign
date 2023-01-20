import React, { useState } from "react";

const BookingForm = ({ showName }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to store the user details in local/session storage
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    // Code to submit the form and book the ticket
    alert(`Ticket booked for ${showName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Ticket</h2>
      <label>
        Show Name:
        <input type="text" value={showName} disabled />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Book Ticket" />
    </form>
  );
};

export default BookingForm;
