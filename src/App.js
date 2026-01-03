import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import CreateArea from './components/CreateArea';
import { useState } from "react";



 

function App() {
  const [items, setItem] = useState([]);
  function addItem(note) {
    setItem((prevValue) => {
      console.log(items);
      return [...prevValue, note];
    });
  }
  function deleteMethod(id) {
    setItem((prevValue) => {
      return prevValue.filter((deletedItem, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((itemText, index) => {
        return (
          <Note
            onDelete={deleteMethod}
            key={index}
            id={index}
            title={itemText.title}
            content={itemText.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;