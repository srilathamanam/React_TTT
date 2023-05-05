import React from 'react'
import './HeaderCS.css'
function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header
