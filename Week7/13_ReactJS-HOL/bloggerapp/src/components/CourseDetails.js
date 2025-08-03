import React from 'react';

const courses = [
  { id: 1, name: 'React Essentials', duration: '4 weeks' },
  { id: 2, name: 'Full Stack Development', duration: '12 weeks' },
];

const CourseDetails = () => {
  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
