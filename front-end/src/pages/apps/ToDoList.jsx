import React,{useState, useEffect} from 'react';
import ToDoItem from '../../components/to-do-list/ToDoItem';
import { Paper, TextField} from '@mui/material';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import AddItem from '../../components/global-components/AddItem';
import axios from 'axios';





function ToDoList(){
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
      const newValue = event.target.value;
      setInputText(newValue);
    }

    // Add ITEM
    const addItem = async (e) =>{
      e.preventDefault();
      try {
        const res = await axios.post("/api/item", {item: inputText});
        setItems(prev => [...prev, res.data])
        setInputText("");
        // console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    // function removeItem(id) {
    //   setItems((prevValue) => {
    //     return prevValue.filter((i, index) => {
    //       return index !== id;
    //     });
    //   });
    // }

    const removeItem = async (id) =>{
      try {
        const res = await axios.delete(`/api/item/${id}`, {item: inputText});
        const newListItems = items.filter(item => item._id !== id);
        setItems(newListItems);
        // console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    }
  
    //  Create Function to FETCH ALL todo items from database-- we will use useEffect Hook

    useEffect(()=>{
      const getItemsList = async () => {
        try {
          const res = await axios.get("/api/items");
          setItems(res.data);
          // console.log(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getItemsList();
    },[])
    return (
      <section className='flex justify-center py-10'>
          <Paper elevation={24} className="to-do-list p-4 w-full smTablet:w-[600px]" >
              <div className="heading my-6 text-center">
                  <h2>To-Do List</h2>
                  <h4>Live From AWS MongoDB</h4>
                  <h6>Click on the List to Cross</h6>
              </div>
              <form className="form form-style-1" onSubmit={e => addItem(e)} >
                  <TextField className="block w-[95%]" onChange={handleChange} id="outlined-basic" label="Enter your list"  value={inputText} />
                  {/* <AddItem type="submit" itemClassName="addButton" handleAdd={e => addItem(e)}/> */}
                  <Fab size="medium" color="secondary" aria-label="add" className="addButton" type="submit">
                   <AddIcon />
                  </Fab>
                  
              </form>
              <div>
                  <ul>
                  {items.map((todoItem, index) => (
                      <ToDoItem
                      key={todoItem._id}
                      id={todoItem._id}
                      addItem={todoItem.item}
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