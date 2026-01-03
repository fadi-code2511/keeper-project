
function Note(prop) {
  return (
    <div className="note">
      <h1>{prop.title}</h1>
      <p>{prop.content}</p>
      <button>delete</button>
    </div>
  );
}

export default Note;
