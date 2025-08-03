import React from 'react';

const players = [
  { name: 'Virat', score: 85 },
  { name: 'Rohit', score: 45 },
  { name: 'Dhoni', score: 90 },
  { name: 'Hardik', score: 60 },
  { name: 'Kohli', score: 30 },
  { name: 'Rahul', score: 72 },
  { name: 'Pant', score: 68 },
  { name: 'Ashwin', score: 25 },
  { name: 'Bumrah', score: 78 },
  { name: 'Jadeja', score: 55 },
  { name: 'Surya', score: 95 }
];

const ListOfPlayers = () => {
  const filteredPlayers = players.filter(player => player.score < 70); // Arrow function

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h2>Players with Score Below 70</h2>
      {filteredPlayers.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListOfPlayers;
