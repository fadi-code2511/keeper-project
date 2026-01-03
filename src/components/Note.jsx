
function Note(props) {
  function deleteCard() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteCard}>DELETE</button>
    </div>
  );
}

export default Note;
