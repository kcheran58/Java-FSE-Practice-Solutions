import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import TrainerList from './Components/TrainerList';
import TrainerDetail from './Components/TrainerDetail';
import trainersMock from './trainersMock';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/trainers">Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainerList trainers={trainersMock} />} />
        <Route path="/trainers/:id" element={<TrainerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
