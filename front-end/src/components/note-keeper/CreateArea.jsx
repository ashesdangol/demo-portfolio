import React, { useState } from "react";
import { Fab, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevItem) => {
      return {
        ...prevItem,
        [name]: value
      };
    });
  }

  return (
    <div className="create-area flex flex-col justify-center content-center">
      <form
      className="text-form form-style-1 mx-auto"
        onSubmit={(event) => {
          props.onAdd(note);
          event.preventDefault();
          setNote({
            title: "",
            content: ""
          });
        }}
      >
      <TextField className="block w-[95%]" onChange={handleChange} label="Title" name="title" value={note.title} />
      <TextField
          className="block w-[95%] text-area" 
          onChange={handleChange}
          name="content"
          label="Take a note"
          multiline
          rows={4}
          value={note.content}
        />
       <Fab size="medium" color="secondary" aria-label="add" className="addButton" type="submit">
          <AddIcon />
        </Fab>
       
      </form>
    </div>
  );
}

export default CreateArea;
