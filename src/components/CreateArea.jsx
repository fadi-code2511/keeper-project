import { useState } from "react";
function CreateArea(props) {
  const [noteText, setNote] = useState("");
  function handleClick(e) {
    const noteValue = e.target.value;
    console.log(noteValue);
    setNote(noteValue);
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea
          onChange={handleClick}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteText}
        />
        <button
          onClick={() => {
            event.preventDefault();
            props.onAdd(noteText);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;