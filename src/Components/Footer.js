import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <footer>
      <p>
        Copyrights &copy; {year.getFullYear()}
        {"  "} All Rights Reserved By vinish
      </p>
    </footer>
  );
};

export default Footer;
