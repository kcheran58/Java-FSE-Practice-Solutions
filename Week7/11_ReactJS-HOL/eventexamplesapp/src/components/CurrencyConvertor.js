import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);
  const conversionRate = 0.011; // Example: 1 INR = 0.011 Euro

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      setEuro((value * conversionRate).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Currency Convertor (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && (
        <p>Equivalent in Euro: €{euro}</p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
