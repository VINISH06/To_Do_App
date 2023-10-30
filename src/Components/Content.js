import React from "react";
import Itemlist from "../Components/Itemlist";
import "bootstrap/dist/css/bootstrap.css";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <Itemlist
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty </p>
      )}
    </main>
  );
};

export default Content;
