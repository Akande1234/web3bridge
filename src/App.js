import React, { useState } from "react";
import "./App.css";
import Navbar from "./NavBar/Navbar";
import Form from "./Form/Form";
import Contact from "./Contact/Contact";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Navbar />
      <Form onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Contact
            key={index}
            id={index}
            name={noteItem.name}
            email={noteItem.email}
            number={noteItem.number}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
