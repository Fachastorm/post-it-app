import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '80px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
}


const Navbar = () => {
  return(
  <div className="navbar">
    <NavLink
      to="/posts/new"
      exact
      style={link}
      activeStyle={{
        background: "white"
      }}
      >Add a new playlist</NavLink>
    <NavLink
      to="/posts"
      exact
      style={link}
      activeStyle={{
        background: "white"
      }}
      >visit the list of posts</NavLink>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: "white"
      }}
      >Home page</NavLink>
    </div>
    )
}
export default Navbar;
