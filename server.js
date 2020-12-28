const express = require("express"); 
const connectDB = require("./config/db"); 



const app = express(); 

// connect Database 
connectDB(); 


app.get("/", (req, res) =>{
    res.send("api is running");
})

const authRouter = require("./routes/api/auth"); 
const postRouter = require("./routes/api/post"); 
const profileRouter = require("./routes/api/profile"); 
const userRouter = require("./routes/api/users"); 

app.use("/api/auth", authRouter); 
app.use("/api/users", userRouter); 
app.use("/api/post", postRouter); 
app.use("/api/profile",profileRouter); 

const PORT = process.env.PORT || 5000; 


app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`)
})