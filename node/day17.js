const express = require('express');
const app = express();
const mongoose=require("mongoose");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const JWT_SECRET="secret";
const { type } = require('os');


// Middleware to parse JSON
app.use(express.json());

const MONGO_URL="mongodb+srv://devtownanshul:devtown@cluster0.aov9k8b.mongodb.net/todo";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",userSchema);

const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Todo=mongoose.model('Todo',todoSchema);

function authenticationToken(req,res,next){
    const authHeader=req.Header['authorization'];
    const token=authHeader && authHeader.split(' ')[1];

    if(!token) return res.status(401).json({message:"Token not found"});

    jwt.verify(token,JWT_SECRET,(err,user=>{
        if(err) return res.status(403).json({message:"Invalud token"});
        req.user=user;
        next();
    }))
}


//register api
app.post("/api/register",async(req,res)=>{
    const {username,password}=req.body;

    try{
       const userExist=await User.findOne({username});

       if(userExist) return res.status(400).json({message:"This user already exist"});

       const hashPassword=await bcrypt.hash(password,10);

       const newUser=new User({
        username,
        password:hashPassword
       });
       await newUser.save();
       res.status(201).json({message:"User has been registered"});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
})

//login api
app.post("/api/login",async(req,res)=>{
    const {username,password}=req.body;

    try{
        const user=await User.findOne({username});

        if(!user) return res.status(404).json({message:"The user you are trying to find is not found"});
        
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"Password did not match"});

        const token=jwt.sign({id:user._id},JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({message:"Login successfull"});
    }catch(err){
        if(err) return res.status(500).json({message:"User login failed"});
    }
})

// GET all todos
app.get("/api/todos", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single todo
app.get("/api/todos/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new todo
app.post("/api/todos", async (req, res) => {
    const { title } = req.body;
    
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }
    
    try {
        const newTodo = new Todo({
            title,
            completed: false
        });
        
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT update todo
app.put("/api/todos/:id", async (req, res) => {
    try {
        const { title, completed } = req.body;
        const updateData = {};
        
        if (title !== undefined) updateData.title = title;
        if (completed !== undefined) updateData.completed = completed;
        
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE todo
app.delete("/api/todos/:id", async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB connected");
    app.listen(3000, () => {
        console.log("Server running at port 3000");
    });
})
.catch(err => console.log("MongoDB connection error", err));

// mongodb+srv://devtownanshul:devtown@cluster0.aov9k8b.mongodb.net/
// devtown