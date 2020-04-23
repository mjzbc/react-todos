import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // set STATE for all note items
  const [noteItems, setNoteItems] = useState([]);

  // Add note
  function addNote(noteInfo) {
    setNoteItems(prevNoteItems => {
      return [...prevNoteItems, noteInfo];
    });
  }

  // Delete note
  function deleteNote(noteId) {
    console.log("Clicked delete note id: " + noteId);
    setNoteItems(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteItems.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.noteTitle}
          content={note.noteContent}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
