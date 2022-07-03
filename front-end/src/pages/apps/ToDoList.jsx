import React,{useState} from 'react';
import ToDoItem from '../../components/to-do-list/ToDoItem';
import { Paper, TextField} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import AddItem from '../../components/global-components/AddItem';




function ToDoList(){
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
  
    function handleChange(event) {
      const newValue = event.target.value;
      setInputText(newValue);
    }
  
    function addItem() {
      if(inputText!==''){
        setItems((prevItems) => {
          return [...prevItems, inputText];
        });
      }
      
      setInputText("");
    }
    function removeItem(id) {
      setItems((prevValue) => {
        return prevValue.filter((i, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <section className='flex justify-center py-10'>
          <Paper elevation={24} className="to-do-list p-4 w-full smTablet:w-[600px]" >
              <div className="heading my-6 text-center">
                  <h1>To-Do List</h1>
              </div>
              <div className="form form-style-1">
                  <TextField className="block w-[95%]" onChange={handleChange} id="outlined-basic" label="Enter your list"  value={inputText} />
                  <AddItem itemClassName="addButton" handleAdd={addItem}/>
                  {/* <Fab size="medium" color="secondary" aria-label="add" onClick={addItem} className="addButton">
                   <AddIcon />
                  </Fab> */}
                  
              </div>
              <div>
                  <ul>
                  {items.map((todoItem, index) => (
                      <ToDoItem
                      key={index}
                      id={index}
                      addItem={todoItem}
                      deleteItem={removeItem}
                      />
                  ))}
                  </ul>
              </div>
          </Paper>
      </section>
      
    );

}
export default ToDoList;