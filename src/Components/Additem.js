import React from "react";
import { FaPlus } from "react-icons/fa";
const Additem = ({ newItem, setNewItem, handleSubmit, inputRef }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Enter To-Do</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add List"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button
        type="submit"
        aria-label="Add Item"
        className=" rounded"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default Additem;
