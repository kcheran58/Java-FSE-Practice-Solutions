import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: 1, title: "How to Learn React", body: "Start with the official docs and build small projects." },
        { id: 2, title: "Understanding State and Props", body: "Props are for passing data, state is for local changes." },
        { id: 3, title: "React Lifecycle Methods", body: "Use componentDidMount for data fetching after render." },
        { id: 4, title: "Error Handling in React", body: "Use componentDidCatch for catching errors in components." }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
