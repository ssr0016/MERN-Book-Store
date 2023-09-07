import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
import booksRoute  from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middle for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
//option 2: allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

//routes
app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

// Middleware for router routes in booksRoutes.js
app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, ()=> {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });






