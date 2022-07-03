import React, { useState } from "react";
import {Fab, Paper} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);
  function clickCheck() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  const rowItem = {
    display: "flex",
    justifyContent: "space-between"
  };
  return (
    <div style={rowItem} className="my-6 ">
      
      <Paper elevation={4}  className="cursor-pointer p-2 max-w-[80%]  inline-block"
        onClick={clickCheck}
        style={{ textDecoration: isClicked && "line-through" }}
      >
        {props.addItem}
      </Paper>{" "}

      <Fab size="small" color="warning" aria-label="delete" 
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
          <DeleteIcon />
      </Fab>
      
    </div>
  );
}

export default ToDoItem;
