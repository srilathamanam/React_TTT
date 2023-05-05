import React from 'react';
import Post from './Post';
import './blogCS.css'
const Blog = (props) => {
  const { posts } = props;
  return (
    <div className="blog">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
