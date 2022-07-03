import React from "react";
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function AddItem(props) {
  return (
    <Fab size="medium" color="secondary" aria-label="add" onClick={() => {
        props.handleAdd();
      }
    } className={props.itemClassName}>
        <AddIcon />
    </Fab>
         
  );
}

export default AddItem;
