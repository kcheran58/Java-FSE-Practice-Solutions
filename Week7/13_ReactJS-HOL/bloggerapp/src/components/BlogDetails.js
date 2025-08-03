import React from 'react';

const blogs = [
  { id: 1, title: 'Why React is Popular', author: 'Dev Blog' },
  { id: 2, title: 'React vs Angular', author: 'Tech Writer' },
];

const BlogDetails = () => {
  return (
    <div>
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
