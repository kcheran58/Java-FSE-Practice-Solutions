import React from 'react';

const IndianPlayers = () => {
  const team = ['Virat', 'Rohit', 'Dhoni', 'Hardik', 'Kohli', 'Rahul', 'Pant', 'Ashwin', 'Bumrah', 'Jadeja', 'Surya'];

  // Destructuring odd and even players
  const oddPlayers = team.filter((_, index) => index % 2 !== 0);
  const evenPlayers = team.filter((_, index) => index % 2 === 0);

  // Merge T20 and Ranji players using spread operator
  const T20players = ['Virat', 'Rohit', 'Pant'];
  const RanjiTrophyPlayers = ['Rahane', 'Pujara', 'Shaw'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      {oddPlayers.map((player, index) => <p key={index}>{player}</p>)}

      <h2>Even Team Players</h2>
      {evenPlayers.map((player, index) => <p key={index}>{player}</p>)}

      <h2>Merged T20 & Ranji Players</h2>
      {mergedPlayers.map((player, index) => <p key={index}>{player}</p>)}
    </div>
  );
};

export default IndianPlayers;
