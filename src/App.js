import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import CreateArea from './components/CreateArea';
import { useState } from "react";



 

function App() {
  const [items, setItem] = useState([]);
  function addItem(noteText) {
    
    setItem((prevValue) => {
      console.log(items);
      // event.preventDefault();
      return [...prevValue, noteText];
    });
    // event.preventDefault();
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((itemText, index) => {
        return <Note key={index} title={itemText.title} content={itemText.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;