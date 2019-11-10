import React from 'react';
import {
    Link
  } from "react-router-dom";
  
class Menu extends React.Component {
  render() {
      return <nav>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/page1" class="nav-link">Page 1</Link>
        </li>
        <li class="nav-item">
          <Link to="/page2" class="nav-link">Page 2</Link>
        </li>
      </ul>
    </nav>;
  }
}

export default Menu;
