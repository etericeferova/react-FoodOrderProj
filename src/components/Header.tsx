import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingLeft: "400px",
        }}
      >
        <li>
          <Link to="/breakfast">Breakfast</Link>
        </li>
        <li>
          <Link to="/lunch">Lunch</Link>
        </li>
        <li>
          <Link to="/dinner">Dinner</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
