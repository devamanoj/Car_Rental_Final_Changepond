// import React, { useEffect } from "react";

// import carData from "../assets/data/carData";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import { useParams } from "react-router-dom";
// import BookingForm from "../components/UI/BookingForm";
// import PaymentMethod from "../components/UI/PaymentMethod";

// const CarDetails = () => {
//   const { slug } = useParams();

//   const singleCarItem = carData.find((item) => item.carName === slug);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [singleCarItem]);

//   return (
//     <Helmet title={singleCarItem.carName}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6">
//               <img src={singleCarItem.imgUrl} alt="" className="w-100" />
//             </Col>

//             <Col lg="6">
//               <div className="car__info">
//                 <h2 className="section__title">{singleCarItem.carName}</h2>

//                 <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
//                   <h6 className="rent__price fw-bold fs-4">
//                     ${singleCarItem.price}.00 / Day
//                   </h6>

//                   <span className=" d-flex align-items-center gap-2">
//                     <span style={{ color: "#f9a826" }}>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                       <i class="ri-star-s-fill"></i>
//                     </span>
//                     ({singleCarItem.rating} ratings)
//                   </span>
//                 </div>

//                 <p className="section__description">
//                   {singleCarItem.description}
//                 </p>

//                 <div
//                   className=" d-flex align-items-center mt-3"
//                   style={{ columnGap: "4rem" }}
//                 >
//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-roadster-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.model}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-settings-2-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.automatic}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-timer-flash-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.speed}
//                   </span>
//                 </div>

//                 <div
//                   className=" d-flex align-items-center mt-3"
//                   style={{ columnGap: "2.8rem" }}
//                 >
//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
//                     {singleCarItem.gps}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-wheelchair-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.seatType}
//                   </span>

//                   <span className=" d-flex align-items-center gap-1 section__description">
//                     <i
//                       class="ri-building-2-line"
//                       style={{ color: "#f9a826" }}
//                     ></i>{" "}
//                     {singleCarItem.brand}
//                   </span>
//                 </div>
//               </div>
//             </Col>
//             <center>
//             <Col lg="7" className="mt-5">
//               <div className="booking-info mt-5">
//                 <h5 className="mb-4 fw-bold ">Booking Information</h5>
//                 <BookingForm />
//               </div>
//             </Col>
//             </center>

//             {/* <Col lg="5" className="mt-5"> */}
//               {/* <div className="payment__info mt-5"> */}
//                 {/* <h5 className="mb-4 fw-bold ">Payment Information</h5> */}
//                 {/* <PaymentMethod /> */}
//               {/* </div> */}
//             {/* </Col> */}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import BookingForm from "../components/UI/BookingForm";

// const CarDetails = () => {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);

//   useEffect(() => {
//     // Fetch car details by ID
//     axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
//       .then(response => setCar(response.data))
//       .catch(error => console.error('There was an error fetching the car details!', error));
//   }, [id]);

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

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
//                   <span className="d-flex align-items-center gap-1 section__description">
//                     <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i> {seat_type}
//                   </span>
//                   <span className="d-flex align-items-center gap-1 section__description">
//                     <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i> {brand}
//                   </span>
//                 </div>
//               </div>
//             </Col>
//             <Col lg="7" className="mt-5">
//               <div className="booking-info mt-5">
//                 <h5 className="mb-4 fw-bold">Booking Information</h5>
//                 <BookingForm />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;



// today altered

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import BookingForm from "../components/UI/BookingForm";

// const CarDetails = () => {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const [userId, setUserId] = useState(1); // Assume a logged-in user ID

//   useEffect(() => {
//     // Fetch car details by ID
//     axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
//       .then(response => setCar(response.data))
//       .catch(error => console.error('There was an error fetching the car details!', error));
//   }, [id]);

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

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
//               <BookingForm carId={id} userId={userId} />
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;


///manoj did


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// // import "../../styles/booking-form.css";

// const CarDetails = () => {
//   const { id } = useParams(); // Get the car ID from the URL
//   const [car, setCar] = useState(null);
//   const [userId, setUserId] = useState(1); // Assume a logged-in user ID
//   const [users, setUsers] = useState([]);
//   const [cars, setCars] = useState([]);
//   const [formData, setFormData] = useState({
//     user: userId || '',
//     car: id || '', // Initialize with the car ID from the URL
//     bookingDate: '',
//     pickupDate: '',
//     returnDate: '',
//   });

//   // Fetch car details and users/cars list
//   useEffect(() => {
//     // Fetch car details
//     axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
//       .then(response => {
//         setCar(response.data);
//         setFormData(prevData => ({
//           ...prevData,
//           car: response.data.car_id // Set the car ID in formData after fetching
//         }));
//       })
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

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

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
//                     disabled
//                   >
//                     <option value={car.car_id}>{car.car_id}</option>
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
//                   <FormGroup className="booking__form d-inline-block me-4 mb-4">
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

// export default CarDetails;




//Exiting worked



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";

// const CarDetails = () => {
//   const { id } = useParams(); // Get the car ID from the URL
//   const [car, setCar] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null); // Store the current signed-in user
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     user: '', // Initialize as empty
//     car: id || '', // Initialize with the car ID from the URL
//     bookingDate: '',
//     pickupDate: '',
//     returnDate: '',
//   });

//   useEffect(() => {
//     // Simulate fetching the signed-in user's ID (replace with actual implementation)
//     const loggedInUserId = 3; // Example user ID

//     // Fetch car details
//     axios.get(`http://127.0.0.1:8000/cars/cars/${id}/`)
//       .then(response => {
//         setCar(response.data);
//         setFormData(prevData => ({
//           ...prevData,
//           car: response.data.car_id // Set the car ID in formData after fetching
//         }));
//       })
//       .catch(error => console.error('There was an error fetching the car details!', error));

//     // Fetch users
//     axios.get('http://127.0.0.1:8000/cars/users/')
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           setUsers(response.data.data);

//           // Find the current signed-in user
//           const user = response.data.data.find(user => user.user_id === loggedInUserId);
//           setCurrentUser(user);
//           setFormData(prevData => ({
//             ...prevData,
//             user: user ? user.user_id : '' // Set the user ID in formData
//           }));
//         } else {
//           console.error('Unexpected data format for users:', response.data);
//         }
//       })
//       .catch(error => console.error('There was an error fetching the users!', error));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

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
//       })
//       .catch(error => {
//         console.error('There was an error with the booking!', error);
//       });
//   };

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

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
//                         <option key={user.user_id} value={user.user_id}>
//                           {user.username}
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
//                     disabled
//                   >
//                     <option value={car.car_id}>{car.car_id}</option>
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

// export default CarDetails;



// src/components/CarDetails.js
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";

// const CarDetails = () => {
//   const { id } = useParams(); // Get the car ID from the URL
//   const navigate = useNavigate(); // Initialize navigate
//   const [car, setCar] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null); // Store the current signed-in user
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     user: '', // Initialize as empty
//     car: id || '', // Initialize with the car ID from the URL
//     bookingDate: '',
//     pickupDate: '',
//     returnDate: '',
//   });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Simulate fetching the signed-in user's ID (replace with actual implementation)
//     const loggedInUserId = 3; // Example user ID

//     const token = localStorage.getItem('access'); // Retrieve token from localStorage

//     // Fetch car details
//     axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//       headers: {
//         'Authorization': `Bearer ${token}` // Include token in the request header
//       }
//     })
//       .then(response => {
//         setCar(response.data);
//         setFormData(prevData => ({
//           ...prevData,
//           car: response.data.car_id // Set the car ID in formData after fetching
//         }));
//       })
//       .catch(error => {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       });

//     // Fetch users
//     axios.get('http://127.0.0.1:8000/api/users/', {
//       headers: {
//         'Authorization': `Bearer ${token}` // Include token in the request header
//       }
//     })
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           setUsers(response.data.data);

//           // Find the current signed-in user
//           const user = response.data.data.find(user => user.user_id === loggedInUserId);
//           if (user) {
//             setCurrentUser(user);
//             setFormData(prevData => ({
//               ...prevData,
//               user: user.user_id // Set the user ID in formData
//             }));
//           } else {
//             setError('Current user not found.');
//           }
//         } else {
//           console.error('Unexpected data format for users:', response.data);
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the users!', error);
//         setError('There was an error fetching the users!');
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (!formData.user) {
//       setError('User ID is required.');
//       return;
//     }

//     const token = localStorage.getItem('access'); // Retrieve token from localStorage

//     const bookingData = {
//       user: formData.user,
//       car: formData.car,
//       booking_date: formData.bookingDate,
//       pickup_date: formData.pickupDate,
//       return_date: formData.returnDate,
//     };

//     console.log('Submitting booking data:', bookingData); // Debugging statement

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/bookings/', bookingData, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       console.log(response.data.booking_id)
//       console.log('Booking successful:', response.data);
//       if (response.data && response.data.booking_id) {
//         // Redirect to the booked car page with the booking_id from response
//         navigate(`/UserPanel/booked-car/${response.data.booking_id}`);
//       } else {
//         console.error('Booking ID not found in response:', response.data);
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         const errorData = error.response.data;
//         const errorMessage = errorData.message || 'There was an error with the booking!';
//         setError(`Error: ${errorMessage}`);
//         console.error('Booking error details:', errorData);
//       } else {
//         setError('There was an error with the booking!');
//       }
//     }
//   };

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available } = car;

//   return (
//     <Helmet title={`Car Details - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="car-details-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <p>{description}</p>
//                 <h4>${price} / Day</h4>
//                 <Form onSubmit={submitHandler}>
//                   {/* Form fields for booking */}
//                   <FormGroup>
//                     <Label for="bookingDate">Booking Date</Label>
//                     <Input type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="pickupDate">Pickup Date</Label>
//                     <Input type="date" name="pickupDate" id="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="returnDate">Return Date</Label>
//                     <Input type="date" name="returnDate" id="returnDate" value={formData.returnDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <Button type="submit" color="primary">Book Now</Button>
//                   {error && <p className="error-message">{error}</p>}
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";

// const CarDetails = () => {
//   const { id } = useParams(); // Get the car ID from the URL
//   const navigate = useNavigate(); // Initialize navigate
//   const [car, setCar] = useState(null);
//   const [formData, setFormData] = useState({
//     user: '', // Auto-filled with the user_id from localStorage
//     car: id || '', // Auto-filled with the car ID from the URL
//     bookingDate: '',
//     pickupDate: '',
//     returnDate: '',
//   });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('access'); // Retrieve token from localStorage
//     const user_id = localStorage.getItem('user_id'); // Retrieve user_id from localStorage

//     // Set the user ID and car ID in formData
//     setFormData(prevData => ({
//       ...prevData,
//       user: user_id, // Auto-select user
//       car: id // Auto-select car
//     }));

//     // Fetch car details
//     axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//       headers: {
//         'Authorization': `Bearer ${token}` // Include token in the request header
//       }
//     })
//       .then(response => {
//         setCar(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (!formData.user || !formData.car) {
//       setError('User ID and Car ID are required.');
//       return;
//     }

//     const token = localStorage.getItem('access'); // Retrieve token from localStorage

//     const bookingData = {
//       user: formData.user,
//       car: formData.car,
//       booking_date: formData.bookingDate,
//       pickup_date: formData.pickupDate,
//       return_date: formData.returnDate,
//     };

//     console.log('Submitting booking data:', bookingData); // Debugging statement

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/bookings/', bookingData, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       console.log('Booking successful:', response.data);
//       if (response.data && response.data.booking_id) {
//         // Redirect to the booked car page with the booking_id from response
//         navigate(`/UserPanel/booked-car/${response.data.booking_id}`);
//       } else {
//         console.error('Booking ID not found in response:', response.data);
//       }
//     } catch (error) {
//       if (error.response && error.response.data) {
//         const errorData = error.response.data;
//         const errorMessage = errorData.message || 'There was an error with the booking!';
//         setError(`Error: ${errorMessage}`);
//         console.error('Booking error details:', errorData);
//       } else {
//         setError('There was an error with the booking!');
//       }
//     }
//   };

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, price } = car;

//   return (
//     <Helmet title={`Car Details - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="car-details-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <p>{description}</p>
//                 <h4>${price} / Day</h4>
//                 <Form onSubmit={submitHandler}>
//                   {/* Display the auto-selected user ID and car ID */}
//                   <FormGroup>
//                     <Label for="user">User ID</Label>
//                     <Input type="text" name="user" id="user" value={formData.user} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="car">Car ID</Label>
//                     <Input type="text" name="car" id="car" value={formData.car} readOnly />
//                   </FormGroup>

//                   {/* Form fields for booking */}
//                   <FormGroup>
//                     <Label for="bookingDate">Booking Date</Label>
//                     <Input type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="pickupDate">Pickup Date</Label>
//                     <Input type="date" name="pickupDate" id="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="returnDate">Return Date</Label>
//                     <Input type="date" name="returnDate" id="returnDate" value={formData.returnDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <Button type="submit" color="primary">Book Now</Button>
//                   {error && <p className="error-message">{error}</p>}
//                 </Form>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";

// const CarDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [formData, setFormData] = useState({
//     user: '',
//     car: id || '',
//     bookingDate: new Date().toISOString().split("T")[0], // Automatically set to today's date
//     pickupDate: '',
//     returnDate: '',
//   });
//   const [error, setError] = useState(null);
//   const [modal, setModal] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [dateError, setDateError] = useState(null); // To track invalid date selections

//   useEffect(() => {
//     const token = localStorage.getItem('access');
//     const user_id = localStorage.getItem('user_id');

//     setFormData(prevData => ({
//       ...prevData,
//       user: user_id,
//       car: id
//     }));

//     axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         setCar(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateDates = () => {
//     const { pickupDate, returnDate } = formData;
//     const currentDate = new Date();
//     const pickup = new Date(pickupDate);
//     const returnD = new Date(returnDate);

//     if (pickup < currentDate || returnD <= pickup) {
//       setDateError("Invalid date selection. Please check the dates.");
//       return false;
//     }

//     setDateError(null);
//     return true;
//   };

//   const calculateTotalPrice = () => {
//     const { pickupDate, returnDate } = formData;
//     const pickup = new Date(pickupDate);
//     const returnD = new Date(returnDate);

//     const daysBooked = Math.ceil((returnD - pickup + 1) / (1000*60*60*24));
//     const calculatedPrice = daysBooked * car.price;

//     setTotalPrice(calculatedPrice);
//     return calculatedPrice;
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (!validateDates()) {
//       return; // Prevent submission if dates are invalid
//     }

//     if (!formData.user || !formData.car || !formData.pickupDate || !formData.returnDate) {
//       setError('User ID, Car ID, Pickup Date, and Return Date are required.');
//       return;
//     }

//     const token = localStorage.getItem('access');

//     const bookingData = {
//       user: formData.user,
//       car: formData.car,
//       booking_date: formData.bookingDate,
//       pickup_date: formData.pickupDate,
//       return_date: formData.returnDate,
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/bookings/', bookingData, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       if (response.data && response.data.booking_id) {
//         navigate(`/UserPanel/booked-car/${response.data.booking_id}`);
//       }
//     } catch (error) {
//       setError('There was an error with the booking!');
//     }
//   };

//   const handleConfirmBooking = () => {
//     if (validateDates()) {
//       calculateTotalPrice();
//       setModal(true);
//     }
//   };

//   const closeModal = () => {
//     setModal(false);
//   };

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, price } = car;

//   return (
//     <Helmet title={`Car Details - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="car-details-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <p>{description}</p>
//                 <h4>${price} / Day</h4>
//                 <Form onSubmit={(e) => e.preventDefault()}>
//                   <FormGroup>
//                     <Label for="user">User ID</Label>
//                     <Input type="text" name="user" id="user" value={formData.user} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="car">Car ID</Label>
//                     <Input type="text" name="car" id="car" value={formData.car} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="bookingDate">Booking Date</Label>
//                     <Input type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="pickupDate">Pickup Date</Label>
//                     <Input type="date" name="pickupDate" id="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="returnDate">Return Date</Label>
//                     <Input type="date" name="returnDate" id="returnDate" value={formData.returnDate} onChange={handleChange} required />
//                   </FormGroup>
//                   <Button type="button" color="primary" onClick={handleConfirmBooking}>
//                     Confirm Booking
//                   </Button>
//                   {error && <p className="error-message">{error}</p>}
//                   {dateError && <p className="error-message">{dateError}</p>}
//                 </Form>

//                 <Modal isOpen={modal} toggle={closeModal}>
//                   <ModalHeader toggle={closeModal}>Confirm Your Booking</ModalHeader>
//                   <ModalBody>
//                     <p>Car: {car_name}</p>
//                     <p>Price per day: ${price}</p>
//                     <p>Total price for your booking: ${totalPrice}</p>
//                     <p>Pickup Date: {formData.pickupDate}</p>
//                     <p>Return Date: {formData.returnDate}</p>
//                   </ModalBody>
//                   <ModalFooter>
//                     <Button color="success" onClick={submitHandler}>Confirm</Button>{' '}
//                     <Button color="secondary" onClick={closeModal}>Cancel</Button>
//                   </ModalFooter>
//                 </Modal>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Form, FormGroup, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// // import "../styles/car-details.css"; // Import your CSS file

// const CarDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [formData, setFormData] = useState({
//     user: '',
//     car: id || '',
//     bookingDate: new Date().toISOString().split("T")[0], // Automatically set to today's date
//     pickupDate: '',
//     returnDate: '',
//   });
//   const [error, setError] = useState(null);
//   const [modal, setModal] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [dateError, setDateError] = useState(null); // To track invalid date selections

//   useEffect(() => {
//     const token = localStorage.getItem('access');
//     const user_id = localStorage.getItem('user_id');

//     setFormData(prevData => ({
//       ...prevData,
//       user: user_id,
//       car: id
//     }));

//     axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//       .then(response => {
//         setCar(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       });
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateDates = () => {
//     const { pickupDate, returnDate } = formData;
//     const currentDate = new Date();
//     const pickup = new Date(pickupDate);
//     const returnD = new Date(returnDate);

//     if (pickup < currentDate || returnD <= pickup) {
//       setDateError("Invalid date selection. Pickup date must be after today, and return date must be after pickup date.");
//       return false;
//     }

//     setDateError(null);
//     return true;
//   };

//   const calculateTotalPrice = () => {
//     const { pickupDate, returnDate } = formData;
//     const pickup = new Date(pickupDate);
//     const returnD = new Date(returnDate);

//     const daysBooked = Math.ceil((returnD - pickup + 1) / (1000 * 60 * 60 * 24));
//     const calculatedPrice = daysBooked * car.price;

//     setTotalPrice(calculatedPrice);
//     return calculatedPrice;
//   };

//   const validateForm = () => {
//     const { user, car, pickupDate, returnDate } = formData;
//     if (!user || !car || !pickupDate || !returnDate) {
//       setError('User ID, Car ID, Pickup Date, and Return Date are required.');
//       return false;
//     }
//     return true;
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     if (!validateDates() || !validateForm()) {
//       return; // Prevent submission if validation fails
//     }

//     const token = localStorage.getItem('access');

//     const bookingData = {
//       user: formData.user,
//       car: formData.car,
//       booking_date: formData.bookingDate,
//       pickup_date: formData.pickupDate,
//       return_date: formData.returnDate,
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/bookings/', bookingData, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       if (response.data && response.data.booking_id) {
//         navigate(`/UserPanel/booked-car/${response.data.booking_id}`);
//       }
//     } catch (error) {
//       setError('There was an error with the booking!');
//     }
//   };

//   const handleConfirmBooking = () => {
//     if (validateDates() && validateForm()) {
//       calculateTotalPrice();
//       setModal(true);
//     }
//   };

//   const closeModal = () => {
//     setModal(false);
//   };

//   if (!car) return <p>Loading...</p>;

//   const { img_url, car_name, description, price } = car;

//   return (
//     <Helmet title={`Car Details - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="car-details-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <p>{description}</p>
//                 <h4>${price} / Day</h4>
//                 <Form onSubmit={(e) => e.preventDefault()}>
//                   <FormGroup>
//                     <Label for="user">User ID</Label>
//                     <Input type="text" name="user" id="user" value={formData.user} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="car">Car ID</Label>
//                     <Input type="text" name="car" id="car" value={formData.car} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="bookingDate">Booking Date</Label>
//                     <Input type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} readOnly />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="pickupDate">Pickup Date</Label>
//                     <Input type="date" name="pickupDate" id="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
//                     {dateError && <p className="error-message">{dateError}</p>}
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="returnDate">Return Date</Label>
//                     <Input type="date" name="returnDate" id="returnDate" value={formData.returnDate} onChange={handleChange} required />
//                     {dateError && <p className="error-message">{dateError}</p>}
//                   </FormGroup>
//                   <Button type="button" color="primary" onClick={handleConfirmBooking}>
//                     Confirm Booking
//                   </Button>
//                   {error && <p className="error-message">{error}</p>}
//                 </Form>

//                 <Modal isOpen={modal} toggle={closeModal}>
//                   <ModalHeader toggle={closeModal}>Confirm Your Booking</ModalHeader>
//                   <ModalBody>
//                     <p>Car: {car_name}</p>
//                     <p>Price per day: ${price}</p>
//                     <p>Total price for your booking: ${totalPrice}</p>
//                     <p>Pickup Date: {formData.pickupDate}</p>
//                     <p>Return Date: {formData.returnDate}</p>
//                   </ModalBody>
//                   <ModalFooter>
//                     <Button color="success" onClick={submitHandler}>Confirm</Button>{' '}
//                     <Button color="secondary" onClick={closeModal}>Cancel</Button>
//                   </ModalFooter>
//                 </Modal>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarDetails;

//final

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, Row, Col, Form, FormGroup, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [formData, setFormData] = useState({
    user: '',
    car: id || '',
    bookingDate: new Date().toISOString().split("T")[0], // Automatically set to today's date
    pickupDate: '',
    returnDate: '',
  });
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dateError, setDateError] = useState(null); // To track invalid date selections

  useEffect(() => {
    const token = localStorage.getItem('access');
    const user_id = localStorage.getItem('user_id');

    setFormData(prevData => ({
      ...prevData,
      user: user_id,
      car: id
    }));

    axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setCar(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the car details!', error);
        setError('There was an error fetching the car details!');
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateDates = () => {
    const { pickupDate, returnDate } = formData;
    const currentDate = new Date();
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    if (pickup < currentDate || returnD <= pickup) {
      setDateError("Invalid date selection. Pickup date must be after today, and return date must be after pickup date.");
      return false;
    }

    setDateError(null);
    return true;
  };

  const calculateTotalPrice = () => {
    const { pickupDate, returnDate } = formData;
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    const daysBooked = Math.ceil((returnD - pickup + 1) / (1000 * 60 * 60 * 24));
    const calculatedPrice = daysBooked * car.price;

    setTotalPrice(calculatedPrice);
    return calculatedPrice;
  };

  const validateForm = () => {
    const { user, car, pickupDate, returnDate } = formData;
    if (!user || !car || !pickupDate || !returnDate) {
      setError('User ID, Car ID, Pickup Date, and Return Date are required.');
      return false;
    }
    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!validateDates() || !validateForm()) {
      return; // Prevent submission if validation fails
    }

    const token = localStorage.getItem('access');

    const bookingData = {
      user: formData.user,
      car: formData.car,
      booking_date: formData.bookingDate,
      pickup_date: formData.pickupDate,
      return_date: formData.returnDate,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/bookings/', bookingData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.data && response.data.booking_id) {
        window.alert('Car booked successfully. For further details, check "My Bookings".');
        setModal(false); // Close the modal after booking
      }
      else {
        window.alert('Car is already booked for the selected dates');
      }
    } catch (error) {
      // setError('There was an error with the booking!');
      window.alert('Car is already booked for the selected dates');
      setModal(false);
    }
  };

  const handleConfirmBooking = () => {
    if (validateDates() && validateForm()) {
      calculateTotalPrice();
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  if (!car) return <p>Loading...</p>;

  const { img_url, car_name, description, price } = car;

  return (
    <Helmet title={`Car Details - ${car_name}`}>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="car-details-card">
                <img src={img_url} alt={car_name} className="w-100" />
                <h2>{car_name}</h2>
                <p>{description}</p>
                <h4>${price} / Day</h4>
                <Form onSubmit={(e) => e.preventDefault()}>
                  {/* <FormGroup>
                    <Label for="user">User ID</Label>
                    <Input type="text" name="user" id="user" value={formData.user} readOnly />
                  </FormGroup>
                  <FormGroup>
                    <Label for="car">Car ID</Label>
                    <Input type="text" name="car" id="car" value={formData.car} readOnly />
                  </FormGroup>
                  <FormGroup>
                    <Label for="bookingDate">Booking Date</Label>
                    <Input type="date" name="bookingDate" id="bookingDate" value={formData.bookingDate} readOnly />
                  </FormGroup> */}
                  <FormGroup>
                    <Label for="pickupDate">Pickup Date</Label>
                    <Input type="date" name="pickupDate" id="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
                    {dateError && <p className="error-message" style={{ color: 'red' }}>{dateError}</p>}
                  </FormGroup>
                  <FormGroup>
                    <Label for="returnDate">Return Date</Label>
                    <Input type="date" name="returnDate" id="returnDate" value={formData.returnDate} onChange={handleChange} required />
                    {dateError && <p className="error-message" style={{ color: 'red' }}>{dateError}</p>}
                  </FormGroup>
                  <Button type="button" color="primary" onClick={handleConfirmBooking}>
                    Confirm Booking
                  </Button>
                  {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
                </Form>

                <Modal isOpen={modal} toggle={closeModal}>
                  <ModalHeader toggle={closeModal}>Confirm Your Booking</ModalHeader>
                  <ModalBody>
                    <p>Car: {car_name}</p>
                    <p>Price per day: ${price}</p>
                    <p>Total price for your booking: ${totalPrice}</p>
                    <p>Pickup Date: {formData.pickupDate}</p>
                    <p>Return Date: {formData.returnDate}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={submitHandler}>Confirm</Button>{' '}
                    <Button color="secondary" onClick={closeModal}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
