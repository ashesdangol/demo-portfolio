import React from "react";
import {Fab, Paper} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <Paper className="note basic-card">
      <div className="card">
      <h3 className="card-title">{props.title}</h3>
        <p className="card-content">{props.content}</p>
        <Fab size="small" color="warning" aria-label="delete" className="card-delete"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
          <DeleteIcon />
      </Fab>
      </div>
    </Paper>
  );
}

export default Note;
