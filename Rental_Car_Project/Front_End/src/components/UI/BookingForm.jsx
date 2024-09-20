// import React from "react";
// import "../../styles/booking-form.css";
// import { Form, FormGroup } from "reactstrap";

// const BookingForm = () => {
//   const submitHandler = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <Form onSubmit={submitHandler}>
//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="text" placeholder="First Name" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input type="text" placeholder="Last Name" />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="email" placeholder="Email" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input type="number" placeholder="Phone Number" />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="text" placeholder="From Address" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input type="text" placeholder="To Address" />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <select name="" id="">
//           <option value="1 person">1 Person</option>
//           <option value="2 person">2 Person</option>
//           <option value="3 person">3 Person</option>
//           <option value="4 person">4 Person</option>
//           <option value="5+ person">5+ Person</option>
//         </select>
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <select name="" id="">
//           <option value="1 luggage">1 luggage</option>
//           <option value="2 luggage">2 luggage</option>
//           <option value="3 luggage">3 luggage</option>
//           <option value="4 luggage">4 luggage</option>
//           <option value="5+ luggage">5+ luggage</option>
//         </select>
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <input type="date" placeholder="Journey Date" />
//       </FormGroup>
//       <FormGroup className="booking__form d-inline-block ms-1 mb-4">
//         <input
//           type="time"
//           placeholder="Journey Time"
//           className="time__picker"
//         />
//       </FormGroup>

//       <FormGroup>
//         <textarea
//           rows={5}
//           type="textarea"
//           className="textarea"
//           placeholder="Write"
//         ></textarea>
//       </FormGroup>
//     </Form>
//   );
// };

// export default BookingForm;


// import React, { useState, useEffect } from "react";
// import "../../styles/booking-form.css";
// import { Form, FormGroup, Button, Label, Input } from "reactstrap";
// import axios from 'axios';

// const BookingForm = () => {
//   // State to manage form fields
//   const [formData, setFormData] = useState({
//     user: '',
//     car: '',
//     bookingDate: '',
//     pickupDate: '',
//     returnDate: '',
//   });

//   const [users, setUsers] = useState([]);
//   const [cars, setCars] = useState([]);

//   // Fetch users and cars data from the API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/cars/users/`);
//         if (response.data && Array.isArray(response.data.data)) {
//           setUsers(response.data.data);
//         } else {
//           console.error('Unexpected data format for users:', response.data);
//         }
//       } catch (error) {
//         console.error('There was an error fetching the users!', error);
//       }
//     };

//     const fetchCars = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/cars/cars/`);
//         if (Array.isArray(response.data)) {
//           setCars(response.data);
//         } else {
//           console.error('Unexpected data format for cars:', response.data);
//         }
//       } catch (error) {
//         console.error('There was an error fetching the cars!', error);
//       }
//     };

//     fetchUsers();
//     fetchCars();
//   }, []);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const submitHandler = (event) => {
//     event.preventDefault();

//     // Construct the data to be sent to the backend
//     const bookingData = {
//       user: formData.user,
//       car: formData.car,
//       booking_date: formData.bookingDate,
//       pickup_date: formData.pickupDate,
//       return_date: formData.returnDate,
//     };

//     axios.post('http://127.0.0.1:8000/cars/bookings/', bookingData)
//       .then(response => {
//         console.log('Booking successful:', response.data);
//         // Handle success (e.g., show a confirmation message)
//       })
//       .catch(error => {
//         console.error('There was an error with the booking!', error);
//         // Handle error (e.g., show an error message)
//       });
//   };

//   return (
//     <Form onSubmit={submitHandler}>
//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <Label for="user">User</Label>
//         <Input
//           type="select"
//           id="user"
//           name="user"
//           value={formData.user}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a user</option>
//           {users.length > 0 ? (
//             users.map(user => (
//               <option key={user.id} value={user.id}>
//                 {user.user_id} {/* Adjust based on your user object */}
//               </option>
//             ))
//           ) : (
//             <option value="">No users available</option>
//           )}
//         </Input>
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <Label for="car">Car</Label>
//         <Input
//           type="select"
//           id="car"
//           name="car"
//           value={formData.car}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select a car</option>
//           {cars.length > 0 ? (
//             cars.map(car => (
//               <option key={car.car_id} value={car.car_id}>
//                 {car.car_id} {/* Displaying car name instead of description */}
//               </option>
//             ))
//           ) : (
//             <option value="">No cars available</option>
//           )}
//         </Input>
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <Label for="bookingDate">Booking Date</Label>
//         <Input
//           type="date"
//           id="bookingDate"
//           name="bookingDate"
//           value={formData.bookingDate}
//           onChange={handleChange}
//           required
//         />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <Label for="pickupDate">Pickup Date</Label>
//         <Input
//           type="date"
//           id="pickupDate"
//           name="pickupDate"
//           value={formData.pickupDate}
//           onChange={handleChange}
//           required
//         />
//       </FormGroup>

//       <FormGroup className="booking__form d-inline-block me-4 mb-4">
//         <Label for="returnDate">Return Date</Label>
//         <Input
//           type="date"
//           id="returnDate"
//           name="returnDate"
//           value={formData.returnDate}
//           onChange={handleChange}
//           required
//         />
//       </FormGroup>

//       <Button type="submit" color="primary">Book Now</Button>
//     </Form>
//   );
// };

// export default BookingForm;


import React, { useState, useEffect } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import axios from 'axios';

const BookingForm = ({ carId, userId }) => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    user: userId || '',
    car: carId || '',
    bookingDate: '',
    pickupDate: '',
    returnDate: '',
  });

  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);

  // Fetch users and cars data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/cars/users/');
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Unexpected data format for users:', response.data);
        }
      } catch (error) {
        console.error('There was an error fetching the users!', error);
      }
    };

    const fetchCars = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/cars/cars/');
        if (Array.isArray(response.data)) {
          setCars(response.data);
        } else {
          console.error('Unexpected data format for cars:', response.data);
        }
      } catch (error) {
        console.error('There was an error fetching the cars!', error);
      }
    };

    fetchUsers();
    fetchCars();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const submitHandler = (event) => {
    event.preventDefault();

    // Construct the data to be sent to the backend
    const bookingData = {
      user: formData.user,
      car: formData.car,
      booking_date: formData.bookingDate,
      pickup_date: formData.pickupDate,
      return_date: formData.returnDate,
    };

    axios.post('http://127.0.0.1:8000/cars/bookings/', bookingData)
      .then(response => {
        console.log('Booking successful:', response.data);
        console.log('car:', );
        // Handle success (e.g., show a confirmation message)
      })
      .catch(error => {
        console.error('There was an error with the booking!', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="user">User</Label>
        <Input
          type="select"
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        >
          <option value="">Select a user</option>
          {users.length > 0 ? (
            users.map(user => (
              <option key={user.id} value={user.id}>
                {user.user_id}
              </option>
            ))
          ) : (
            <option value="">No users available</option>
          )}
        </Input>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="car">Car</Label>
        <Input
          type="select"
          id="car"
          name="car"
          value={formData.car}
          onChange={handleChange}
          required
        >
          <option value="">Select a car</option>
          {cars.length > 0 ? (
            cars.map(car => (
              <option key={car.car_id} value={car.car_id}>
                {car.car_name}
              </option>
            ))
          ) : (
            <option value="">No cars available</option>
          )}
        </Input>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="bookingDate">Booking Date</Label>
        <Input
          type="date"
          id="bookingDate"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="pickupDate">Pickup Date</Label>
        <Input
          type="date"
          id="pickupDate"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <Label for="returnDate">Return Date</Label>
        <Input
          type="date"
          id="returnDate"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button type="submit" color="primary">Book Now</Button>
    </Form>
  );
};

export default BookingForm;
