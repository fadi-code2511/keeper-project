import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
import CreateArea from './components/CreateArea';


 

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={0}
      title={"NoteItem.title"} 
      content={"NoteItem.content"} />
      <Footer />
    </div>
  );
}

export default App;
