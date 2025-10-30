import express from "express";
<<<<<<< HEAD


const app = express();

const port = 3000;


app.use(express.json());

try{
    app.listen(port, () =>{
    console.log('listening to port 3000...');
});

}catch(e){
    console.log(e);
}

app.get('/hazel',async (request, response) =>{
    response.status(200).json({message: "Hi,I am Hazel"});
});
=======
import "dotenv/config.js";
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/book", bookRoutes);
app.use("/tbl_student", studentRoutes);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}...`);
});
>>>>>>> master
