import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

const App = () => {
  const flag = true; // Toggle this to see different output

  return (
    <div className="App">
      <h1>🏏 Cricket App</h1>
      {flag ? (
        <>
          <ListOfPlayers />
        </>
      ) : (
        <IndianPlayers />
      )}
    </div>
  );
};

export default App;
