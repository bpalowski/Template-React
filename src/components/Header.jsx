import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return (
    <div>
      <h1>Sound Bits</h1>
      <Link to="/">Home</Link> | <Link to="/newsound">Add Sound</Link>
    </div>
  );
}

export default Header;
