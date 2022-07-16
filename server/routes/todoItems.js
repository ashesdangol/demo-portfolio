const router = require('express').Router();

// import todo model

const todoItemsModel = require("../models/todoItems")

// Lets create our first route -- we will add todo item to our database

router.post('/api/item', async (req, res)=>{
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        // save this item in database
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
        // res.status(200).json("Item Added Successfully")


    }catch(err){
        res.json(err)
    }
})

// Lets create our second route -- Get data from database
router.get('/api/items', async (req, res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems);

    }catch(err){
        res.json(err)
    }
})

// Lets update item

router.put('/api/item/:id', async (req, res)=>{
    try{
        // Find the item by its ID and Update it

        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json('Item Updated')

    }catch(err){
        res.json(err)
    }
})


// Lets Delete item


router.delete('/api/item/:id', async (req, res)=>{
    try{
        // Find the item by its ID and Update it

        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted')

    }catch(err){
        res.json(err)
    }
})



// export router

module.exports = router;