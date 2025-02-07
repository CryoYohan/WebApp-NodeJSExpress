 const express = require('express');
 const app = express();
 const port = 3000;

// Serve static file from the "public" folder
app.use(express.static('public'));

 // Define a router 
 app.get('/',(req,res)=>{
   res.send('Hello world!');
});

// Start SERVER
app.listen(port,()=>{
console.log(`Server running at http://localhost:${port}`);
});

 // GET REQUEST
app.get('/about',(req,res)=>{
   res.send('About us');
});

// Middleware to parse JSON bodies
app.use(express.json());

// POST REQUEST
app.post('/submit', (req,res)=>{
   const data = req.body;
   res.send(`Received: ${JSON.stringify(data)}`);
});


// Middleware
app.use((req,res,next)=>{
   console.log(`${req.method} ${req.url}`);
   next();
});

// Error Handling Middleware
app.use((req,res,next)=>{
   console.error(err.stack);
   res.status(500).send('Something broke!')
   next();
});


// New Route to display items
const items = ['Apple', 'Banana', 'Orange']

app.get('/items', (req,res) =>{
   res.json(items);
});

app.post('/items', (req,res) =>{
   const newItem = req.body.item;
   items.push(newItem);
   res.json(items);
});






