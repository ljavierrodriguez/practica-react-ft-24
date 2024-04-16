import React from "react";

const Header = ({ name, lastname }) => {
  return (
    <h1>
      {name} {lastname}
    </h1>
  );
};

export default Header;
