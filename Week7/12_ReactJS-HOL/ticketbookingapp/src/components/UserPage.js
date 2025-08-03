import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div className="user-page">
      <h2>Welcome, User!</h2>
      <p>Select your flight and proceed with booking:</p>
      <ul>
        <li>Chennai ➜ Delhi - <button>Book</button></li>
        <li>Hyderabad ➜ Mumbai - <button>Book</button></li>
        <li>Bangalore ➜ Kolkata - <button>Book</button></li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
