import { useState } from "react";

function CreateArea(props) {
  const [noteText, setNote] = useState({
    title: "",
    content: "",
  });
  function handleClick(e) {
    const { name, value } = e.target;

    // console.log(noteValue);
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function submit(event) {
    event.preventDefault();
    props.onAdd(noteText);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleClick}
          placeholder="Title"
          value={noteText.title}
        />
        <textarea
          onChange={handleClick}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteText.content}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
