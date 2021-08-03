const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'crouton97',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// GET ROUTE
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end(); 
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});