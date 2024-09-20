// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import "../../styles/booking-form.css";

// const CarDetailsAndBooking = () => {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const [userId, setUserId] = useState(1); // Assume a logged-in user ID
//   const [users, setUsers] = useState([]);
//   const [cars, setCars] = useState([]);

//   // Fetch car details and users/cars list
//   useEffect(() => {
//     // Fetch car details
//     axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
//       .then(response => setCar(response.data))
//       .catch(error => console.error('There was an error fetching the car details!', error));

//     // Fetch users
//     axios.get('http://127.0.0.1:8000/cars/users/')
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           setUsers(response.data.data);
//         } else {
//           console.error('Unexpected data format for users:', response.data);
//         }
//       })
//       .catch(error => console.error('There was an error fetching the users!', error));

//     // Fetch cars (optional if you need a full list, otherwise omit)
//     axios.get('http://127.0.0.1:8000/cars/cars/')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setCars(response.data);
//         } else {
//           console.error('Unexpected data format for cars:', response.data);
//         }
//       })
//       .catch(error => console.error('There was an error fetching the cars!', error));
//   }, [id]);

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

//   // State to manage form fields
//   const [formData, setFormData] = useState({
//     user: userId || '',
//     car: id || '',
//     bookingDate: '',
//     pickupDate: '',
//     returnDate: '',
//   });

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
//     <Helmet title={car_name}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6">
//               <img src={img_url} alt={car_name} className="w-100" />
//             </Col>
//             <Col lg="6">
//               <div className="car__info">
//                 <h2 className="section__title">{car_name}</h2>
//                 <div className="d-flex align-items-center gap-5 mb-4 mt-3">
//                   <h6 className="rent__price fw-bold fs-4">
//                     ${price} <span>/ Day</span>
//                   </h6>
//                   <span className="d-flex align-items-center gap-2">
//                     <span style={{ color: "#f9a826" }}>
//                       <i className="ri-star-s-fill"></i>
//                       <i className="ri-star-s-fill"></i>
//                       <i className="ri-star-s-fill"></i>
//                       <i className="ri-star-s-fill"></i>
//                       <i className="ri-star-s-fill"></i>
//                     </span>
//                     ({rating} ratings)
//                   </span>
//                 </div>
//                 <p className="section__description">
//                   {description}
//                 </p>
//                 <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
//                   <span className="d-flex align-items-center gap-1 section__description">
//                     <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {seat_type}
//                   </span>
//                   <span className="d-flex align-items-center gap-1 section__description">
//                     <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {automatic ? 'Automatic' : 'Manual'}
//                   </span>
//                   <span className="d-flex align-items-center gap-1 section__description">
//                     <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i> {speed} km/h
//                   </span>
//                 </div>
//                 <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
//                   <span className="d-flex align-items-center gap-1 section__description">
//                     <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {is_available ? 'Available' : 'Not Available'}
//                   </span>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col lg="12">
//               <Form onSubmit={submitHandler}>
//                 <FormGroup className="booking__form d-inline-block me-4 mb-4">
//                   <Label for="user">User</Label>
//                   <Input
//                     type="select"
//                     id="user"
//                     name="user"
//                     value={formData.user}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select a user</option>
//                     {users.length > 0 ? (
//                       users.map(user => (
//                         <option key={user.id} value={user.id}>
//                           {user.user_id}
//                         </option>
//                       ))
//                     ) : (
//                       <option value="">No users available</option>
//                     )}
//                   </Input>
//                 </FormGroup>

//                 <FormGroup className="booking__form d-inline-block me-4 mb-4">
//                   <Label for="car">Car</Label>
//                   <Input
//                     type="select"
//                     id="car"
//                     name="car"
//                     value={formData.car}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select a car</option>
//                     {cars.length > 0 ? (
//                       cars.map(car => (
//                         <option key={car.car_id} value={car.car_id}>
//                           {car.car_name}
//                         </option>
//                       ))
//                     ) : (
//                       <option value="">No cars available</option>
//                     )}
//                   </Input>
//                 </FormGroup>

//                 <FormGroup className="booking__form d-inline-block me-4 mb-4">
//                   <Label for="bookingDate">Booking Date</Label>
//                   <Input
//                     type="date"
//                     id="bookingDate"
//                     name="bookingDate"
//                     value={formData.bookingDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup className="booking__form d-inline-block me-4 mb-4">
//                   <Label for="pickupDate">Pickup Date</Label>
//                   <Input
//                     type="date"
//                     id="pickupDate"
//                     name="pickupDate"
//                     value={formData.pickupDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup className="booking__form d-inline-block me-4 mb-4">
//                   <Label for="returnDate">Return Date</Label>
//                   <Input
//                     type="date"
//                     id="returnDate"
//                     name="returnDate"
//                     value={formData.returnDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </FormGroup>

//                 <Button type="submit" color="primary">Book Now</Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetailsAndBooking;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../../styles/booking-form.css";

const CarDetailsAndBooking = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [userId, setUserId] = useState(1); // Assume a logged-in user ID
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch car details and users/cars list
  useEffect(() => {
    // Fetch car details
    axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
      .then(response => setCar(response.data))
      .catch(error => console.error('There was an error fetching the car details!', error));

    // Fetch users
    axios.get('http://127.0.0.1:8000/cars/users/')
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Unexpected data format for users:', response.data);
        }
      })
      .catch(error => console.error('There was an error fetching the users!', error));

    // Fetch cars (optional if you need a full list, otherwise omit)
    axios.get('http://127.0.0.1:8000/cars/cars/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setCars(response.data);
        } else {
          console.error('Unexpected data format for cars:', response.data);
        }
      })
      .catch(error => console.error('There was an error fetching the cars!', error));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

  // State to manage form fields
  const [formData, setFormData] = useState({
    user: userId || '',
    car: id || '',
    bookingDate: '',
    pickupDate: '',
    returnDate: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Check car availability
  const checkAvailability = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/cars/bookings/check/`, {
        params: {
          car: formData.car,
          pickup_date: formData.pickupDate,
          return_date: formData.returnDate
        }
      });
      return response.data.isAvailable;
    } catch (error) {
      console.error('Error checking availability:', error);
      return false;
    }
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage(null); // Clear any previous error

    const isAvailable = await checkAvailability();
    if (!isAvailable) {
      setErrorMessage('The car is already booked for the selected dates.');
      return;
    }

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
        // Handle success (e.g., show a confirmation message)
      })
      .catch(error => {
        console.error('There was an error with the booking!', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <Helmet title={car_name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={img_url} alt={car_name} className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{car_name}</h2>
                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${price} <span>/ Day</span>
                  </h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({rating} ratings)
                  </span>
                </div>
                <p className="section__description">
                  {description}
                </p>
                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i> {seat_type}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {automatic ? 'Automatic' : 'Manual'}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i> {speed} km/h
                  </span>
                </div>
                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {is_available ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Form onSubmit={submitHandler}>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
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
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetailsAndBooking;

