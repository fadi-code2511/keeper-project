import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";


 

function App() {
  return (
    <div>
      <Header />
      {notes.map((NoteItem)=>{
        return  <div>
                  <Note key={NoteItem.key}
                  title={NoteItem.title} 
                  content={NoteItem.content} />
                </div>
    })}
      <Footer />
    </div>
  );
}

export default App;
