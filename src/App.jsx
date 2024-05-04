
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios library

function App() {
  const [mode, setMode] = useState('Passenger');
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [driverPhoneNumber, setDriverPhoneNumber] = useState('');
  const [passengerList, setPassengerList] = useState([]); // State to store passenger list

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    // Clear input fields when mode changes
    setStartingPoint('');
    setDestination('');
    setPhoneNumber('');
    setPickupDate('');
    setPickupTime('');
    setDropTime('');
    setCurrentLocation('');
    setDriverPhoneNumber('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === 'Passenger') {
        // Create form data object for passenger
        const passengerData = {
          startingPoint: startingPoint,
          destination: destination,
          phoneNumber: phoneNumber,
          pickupDate: pickupDate,
          pickupTime: pickupTime,
          dropTime: dropTime
        };
        // Send POST request to backend server for passenger
        await axios.post('http://localhost:3001/passenger', passengerData);
      } else {
        // Create form data object for driver
        const driverData = {
          currentLocation: currentLocation,
          phoneNumber: driverPhoneNumber // Include driver's phone number
        };
        // Send POST request to backend server for driver
        await axios.post('http://localhost:3001/driver', driverData);
      }

      // Reset form fields after submission
      setStartingPoint('');
      setDestination('');
      setPhoneNumber('');
      setPickupDate('');
      setPickupTime('');
      setDropTime('');
      setDriverPhoneNumber('');

      // Log success message
      console.log('Form submitted successfully');
    } catch (error) {
      // Log error to console if request fails
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    // Fetch passenger details if the mode is Driver
    const fetchPassengerDetails = async () => {
      if (mode === 'Driver') {
        try {
          console.log(`Inside fetch Passenger-fetching ${currentLocation}`);
          const response = await axios.get(`http://localhost:3001/passenger-details?currentLocation=${currentLocation}`);
          console.log(`Passengerlist-${response.data}`);
          setPassengerList(response.data); // Update passenger list state with fetched data
        } catch (error) {
          console.error('Error fetching passenger details:', error);
        }
      }
    };

    // Fetch passenger details every 5 seconds
    const intervalId = setInterval(fetchPassengerDetails, 5000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [mode, currentLocation]);

  return (
    <div>
      <h2>Transportation Service</h2>
      <form onSubmit={handleSubmit}>
        {/* Radio buttons for mode selection */}
        <div>
          <input
            type="radio"
            id="passengerMode"
            name="mode"
            value="Passenger"
            checked={mode === 'Passenger'}
            onChange={() => handleModeChange('Passenger')}
          />
          <label htmlFor="passengerMode">Passenger</label>
        </div>
        <div>
          <input
            type="radio"
            id="driverMode"
            name="mode"
            value="Driver"
            checked={mode === 'Driver'}
            onChange={() => handleModeChange('Driver')}
          />
          <label htmlFor="driverMode">Driver</label>
        </div>
        {mode === 'Passenger' && (
          <div>
            <ul>
            {/* Input fields for passenger */}
            <li className='fields'> 
            <label htmlFor="startingPoint" >Starting Point:  </label>
            <input
              className='data'
              type="text"
              id="startingPoint"
              value={startingPoint}
              onChange={(e) => setStartingPoint(e.target.value)}
            />
            </li>

            <li className='fields'>
            <label htmlFor="destination" >Destination:</label>
            <input
              className='data'
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            </li>

            <li className='fields'>
            <label htmlFor="phoneNumber" >Phone Number:</label>
            <input
              className='data'
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            </li>

            <li className='fields' >
            <label htmlFor="pickupDate" >Pickup Date:</label>
            <input
              className='data'
              type="text"
              id="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
            </li>

            <li className='fields'>
            <label htmlFor="pickupTime">Pickup Time:</label>
            <input
              className='data'
              type="text"
              id="pickupTime"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
            </li>

            <li className='fields'>
            <label htmlFor="dropTime" >Drop Time:</label>
            <input
              className='data'
              type="text"
              id="dropTime"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
            />
            </li>
            </ul>
          </div>
        )}
        {mode === 'Driver' && (
          <div>
            <ul>
              <li className='driver3'>
            {/* Input fields for driver */}
            <label htmlFor="currentLocation" className='driver1'>Current Location: </label>
            <input
              className='driver2'
              type="text"
              id="currentLocation"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
               </li>
               <li className='driver3'>  
            <label htmlFor="driverPhoneNumber" className='driver1'>Driver's Phone Number:</label>
            <input
              className='driver2'
              type="text"
              id="driverPhoneNumber"
              value={driverPhoneNumber}
              onChange={(e) => setDriverPhoneNumber(e.target.value)}
            />
            </li>
            </ul>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>

      {/* Render passenger list if available */}
      {passengerList.length > 0 && (
        <div>
          <h3>Passenger List</h3>
          <ul>
            {passengerList.map((passenger, index) => (
              <li key={index} className='pdata'>
                
                  <ul>
                <li>
                Starting Point: {passenger.starting_point},
                </li>
                <li>
                 Destination: {passenger.destination}, 
                 </li>
                 <li>
                Phone Number: 
                <a href='https://wa.me/${passenger.phone_number}'>
                {passenger.phone_number},</a>
                </li>
                <li>
                Pickup_Date:{passenger.pickup_date},
                </li>
                <li>
                Pickup_Time:{passenger.pickup_time},
                </li>
                <li>
                Drop_Time:{passenger.drop_time}
                </li>
                

                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
