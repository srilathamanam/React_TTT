import React from 'react';
import './PostCS.css'
const Post = (props) => {
  const { title, content } = props;
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Post;
