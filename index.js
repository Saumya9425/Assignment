const express = require('express');
const userRouter = require('./routes/userRoute')
const sequelize = require('./database/connect')
require('dotenv').config();


const app = express();

app.use(express.json())

// user routes
app.use(userRouter);

const PORT = process.env.PORT||3000

const startServer = async () => {
    try{
        await sequelize.sync();
        console.log('Models synchronized')
        app.listen(PORT , () => {
            console.log(`Server is running at port ${PORT}`)
        })
    }catch(error){
        console.error(error)
    }
}

startServer();