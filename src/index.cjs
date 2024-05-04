
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;
app.use(cors());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anil@12345',
  database: 'test_1'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware to parse request bodys
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to handle passenger submission
app.post('/passenger', (req, res) => {
  const { startingPoint, destination, phoneNumber, pickupDate, pickupTime, dropTime } = req.body;

  // Insert passenger data into passengers table
  const query = 'INSERT INTO passengers (starting_point, destination, phone_number, pickup_date, pickup_time, drop_time) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [startingPoint, destination, phoneNumber, pickupDate, pickupTime, dropTime], (err, results) => {
    if (err) {
      console.error('Error inserting passenger data:', err);
      res.status(500).send('Error inserting passenger data');
      return;
    }
    res.status(200).send('Passenger data inserted successfully');
  });
});

// API endpoint to handle driver submission
app.post('/driver', (req, res) => {
  const { currentLocation, phoneNumber } = req.body;

  // Insert driver data into drivers table
  const query = 'INSERT INTO drivers (current_location, phone_number) VALUES (?, ?)';
  connection.query(query, [currentLocation, phoneNumber], (err, results) => {
    if (err) {
      console.error('Error inserting driver data:', err);
      res.status(500).send('Error inserting driver data');
      return;
    }
    res.status(200).send('Driver data inserted successfully');
  });
});

// API endpoint to handle fetching passenger details based on driver's current location
app.get('/passenger-details', (req, res) => {
  const { currentLocation } = req.query;

  // Query passengers whose starting point matches driver's current location
  const query = 'SELECT starting_point, destination, phone_number,pickup_date, pickup_time, drop_time FROM passengers WHERE starting_point = ?';
  connection.query(query, [currentLocation], (err, results) => {
    if (err) {
      console.error('Error retrieving passenger details:', err);
      res.status(500).send('Error retrieving passenger details');
      return;
    }
    //console.log(results);
    res.status(200).json(results); // Send passenger details to the driver
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
