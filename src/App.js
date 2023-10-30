import Additem from "./Components/Additem";
import "./index";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useRef } from "react";
import { useState } from "react";
import Search from "./Components/Search";

function App() {
  const inputRef = useRef("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to-do list")) || []
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("to-do list", JSON.stringify(listItems));
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("to-do list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("to-do list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App shadow rounded ">
      <Header tittle="To-Do List " length={items.length} />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
