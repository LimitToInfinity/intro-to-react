import React from 'react';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light row-fluid">
        <a className="navbar-brand" href="#">Trivia Extravaganza!!!!!</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span
            className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  