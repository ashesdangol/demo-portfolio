import React from "react";
import {Fab} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteItem(props) {
  return (
        <Fab className={props.itemClassName} size="small" color="warning" aria-label="delete" 
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
          <DeleteIcon />
      </Fab>
        
  );
}

export default DeleteItem;
