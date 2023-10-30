import React from "react";

const Header = ({ tittle, length }) => {
  return (
    <header>
      <h1>{tittle}</h1>
      <div>
        <p>
          {length > 1 ? "Lists" : "List"}-{length}
        </p>
      </div>
    </header>
  );
};

Header.defaultProps = {
  tittle: "vinish",
};
export default Header;
