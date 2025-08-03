import React from 'react';

const GuestPage = ({ onLogin }) => {
  return (
    <div className="guest-page">
      <h2>Welcome, Guest!</h2>
      <p>Browse available flights below:</p>
      <ul>
        <li>Chennai ➜ Delhi - 8:00 AM</li>
        <li>Hyderabad ➜ Mumbai - 10:30 AM</li>
        <li>Bangalore ➜ Kolkata - 4:15 PM</li>
      </ul>
      <button onClick={onLogin}>Login to Book Tickets</button>
    </div>
  );
};

export default GuestPage;
