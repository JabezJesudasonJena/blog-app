const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();


// Middlewares - The things I will be going to use 
app.use(express.json());

// port Define
const PORT = process.env.PORT || 5000;



// Make of a basic test route
app.get('/', (req, res) => {
    res.send('The Backend is working ! ');
});



// Listening of the port 
app.listen(PORT, () => {
    console.log("The Backend is working at http://localhost:"+PORT);
})
