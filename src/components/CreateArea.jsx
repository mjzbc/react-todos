import React, { useState } from "react";

function CreateArea(props) {
  // Keep track of note state
  const [noteInfo, setNoteInfo] = useState({
    noteTitle: "",
    noteContent: ""
  });

  function handleChange(evt) {
    const { value, name } = evt.target;

    setNoteInfo(prevNote => {
      if (name === "title") {
        return {
          noteTitle: value,
          noteContent: prevNote.noteContent
        };
      } else if (name === "content") {
        return {
          noteTitle: prevNote.noteTitle,
          noteContent: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          autoComplete="off"
          value={noteInfo.noteTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          autoComplete="off"
          onChange={handleChange}
          value={noteInfo.noteContent}
        />
        <button
          onClick={evt => {
            evt.preventDefault();
            props.onAdd(noteInfo);
            setNoteInfo(() => {
              return {
                noteTitle: "",
                noteContent: ""
              };
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
