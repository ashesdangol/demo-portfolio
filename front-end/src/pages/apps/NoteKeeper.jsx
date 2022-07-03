import React,{useState} from "react";
import CreateArea from "../../components/note-keeper/CreateArea";
import Note from "../../components/note-keeper/Note";


function NoteKeeper(){
    const [fullNote, setFullNote] = useState([]);

  function addNote(note) {
    setFullNote((prevNote) => {
      return [note, ...prevNote];
    });
  }
  function deleteItem(id) {
    setFullNote((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <section className="note-keeper flex flex-col justify-center content-center">
      <div className="heading my-6 text-center">
          <h1>Note Keeper</h1>
      </div>
      
      <CreateArea onAdd={addNote} />
      <div className="py-10 card-container">
      {fullNote.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        );
      })}
      </div>
      
    </section>
  );
}

export default NoteKeeper;