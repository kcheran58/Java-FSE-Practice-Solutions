import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState('book');

  // Conditional rendering - Switch
  const renderComponent = () => {
    switch (showComponent) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>Select an option</p>;
    }
  };

  return (
    <div className="app-container">
      <h1>📚 Blogger App</h1>

      <div className="btn-group">
        <button onClick={() => setShowComponent('book')}>Book Details</button>
        <button onClick={() => setShowComponent('blog')}>Blog Details</button>
        <button onClick={() => setShowComponent('course')}>Course Details</button>
      </div>

      {/* Conditional rendering using switch */}
      {renderComponent()}

      {/* Conditional rendering using ternary operator */}
      <div style={{ marginTop: '20px' }}>
        {showComponent === 'book' ? (
          <p>Currently viewing: Book Section</p>
        ) : showComponent === 'blog' ? (
          <p>Currently viewing: Blog Section</p>
        ) : showComponent === 'course' ? (
          <p>Currently viewing: Course Section</p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
