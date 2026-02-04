const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes'); 
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.get("/ping", (req, res) => {
  res.send("Backend is alive");
});


app.use((req,res)=>{
    res.status(404).json({message: 'Route not found'});
});

module.exports = app;