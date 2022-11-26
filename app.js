const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const authRouter= require('./routers/authRouter');
const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);


mongoose.connect('mongodb://localhost:27017/my-student-2')
.then(()=>{
    console.log('mongodb connected successfully');
})
.catch(err=> console.log('connection failed'))

const port = 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});