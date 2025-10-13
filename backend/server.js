const express = require('express');
const dotenv = require('dotenv');
const connnectDB = require('./config/config');
const postRoutes = require('./routes/postRoutes');

const app = express();
dotenv.config();


// Middlewares - The things I will be going to use 
app.use(express.json());

dotenv.config();
connnectDB();
app.use('/api/posts')
// port Define
const PORT = process.env.PORT || 5000;

app.use('/api/posts', postRoutes);

// Make of a basic test route
app.get('/', (req, res) => {
    res.send('The Backend is working ! ');
});



// Listening of the port 
app.listen(PORT, () => {
    console.log("The Backend is working at http://localhost:"+PORT);
})
