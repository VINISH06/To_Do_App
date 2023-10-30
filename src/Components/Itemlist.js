import React from "react";
import { ImCross } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.css";

const Itemlist = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          {" "}
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <ImCross
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Itemlist;
