// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Button } from "reactstrap";
// import Helmet from "../Helmet/Helmet";

// const BookedCarPage = () => {
//   const { booking_id, id } = useParams();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('access');
//     axios.get(`http://127.0.0.1:8000/api/cars/${id}/`,{
//       headers: {
//         'Authorization': `Bearer ${token}` // Include token in the request header
//     }
//     })
//       .then(response => setCar(response.data))

//       .catch(error => console.error('There was an error fetching the car details!', error));
//   }, [id]);

//   const handleCancelBooking = () => {
//     window.alert('Booked Car Cancelled Successfully')
//     console.log('Cancel page')
//     navigate(`/UserPanel/cancel-booking/${booking_id}`);
//   };

//   if (!car) return <p>Loading...</p>;

//   const { img_url, price, car_name } = car;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Button } from "reactstrap";
// import Helmet from "../Helmet/Helmet";

// const BookedCarPage = () => {
//   const { booking_id, id } = useParams(); // Retrieve URL parameters
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check if 'id' is valid
//     if (!id) {
//       setError('Car ID is missing in the URL.');
//       return;
//     }

//     // Check if token is available
//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     const fetchCarDetails = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setCar(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       }
//     };

//     fetchCarDetails();
//   }, [id]);

//   const handleCancelBooking = async () => {
//     if (!booking_id) {
//       setError('Booking ID is missing.');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/bookings/${booking_id}/`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       window.alert('Booking Cancelled Successfully');
//       navigate(`/UserPanel`);
//     } catch (error) {
//       console.error('There was an error canceling the booking!', error);
//       setError('There was an error canceling the booking!');
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!car) return <p>Loading...</p>;

//   const { img_url, price, car_name } = car;

//   return (
//     <Helmet title={`Booked Car - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="booked-car-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <h4>${price} / Day</h4>
//                 <Button color="danger" onClick={handleCancelBooking}>Cancel Booking</Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BookedCarPage;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Button } from "reactstrap";
// import Helmet from "../Helmet/Helmet";

// const BookedCarPage = () => {
//   const { booking_id, id } = useParams(); // Extract both booking_id and id from URL
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log('ID:', id);
//     console.log('Booking ID:', booking_id);

//     if (!id) {
//       setError('Car ID is missing!');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     const fetchCarDetails = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setCar(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       }
//     };

//     fetchCarDetails();
//   }, [id, booking_id]);

//   const handleCancelBooking = async () => {
//     if (!booking_id) {
//       setError('Booking ID is missing!');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/bookings/${booking_id}/`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       window.alert('Booking Cancelled Successfully');
//       navigate(`/UserPanel`);
//     } catch (error) {
//       console.error('There was an error canceling the booking!', error);
//       setError('There was an error canceling the booking!');
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!car) return <p>Loading...</p>;

//   const { img_url, price, car_name } = car;

//   return (
//     <Helmet title={`Booked Car - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="booked-car-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <h4>${price} / Day</h4>
//                 <Button color="danger" onClick={handleCancelBooking}>Cancel Booking</Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BookedCarPage;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Button } from "reactstrap";
// import Helmet from "../Helmet/Helmet";

// const BookedCarPage = () => {
//   const { booking_id, id } = useParams(); // Extract both booking_id and car id from URL
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!id) {
//       setError('Car ID is missing!');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     const fetchCarDetails = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`, {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setCar(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the car details!', error);
//         setError('There was an error fetching the car details!');
//       }
//     };

//     fetchCarDetails();
//   }, [id, booking_id]);

//   const handleCancelBooking = async () => {
//     if (!booking_id) {
//       setError('Booking ID is missing!');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/bookings/${booking_id}/`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       // Notify the user
//       window.alert('Booking Cancelled Successfully');

//       // Redirect back to the user panel after cancellation
//       navigate(`/UserPanel`);
//     } catch (error) {
//       console.error('There was an error canceling the booking!', error);
//       setError('There was an error canceling the booking!');
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!car) return <p>Loading...</p>;

//   const { img_url, price, car_name, is_available } = car;

//   return (
//     <Helmet title={`Booked Car - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="booked-car-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <h4>${price} / Day</h4>
//                 {!is_available && (
//                   <Button color="danger" onClick={handleCancelBooking}>Cancel Booking</Button>
//                 )}
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BookedCarPage;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import Helmet from '../Helmet/Helmet';

const CancelBookingPage = () => {
  const { booking_id } = useParams(); // Extract booking_id from URL
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const token = localStorage.getItem('access');
        if (!token) {
          setError('No token found!');
          return;
        }

        // Fetch booking details
        const bookingResponse = await axios.get(`http://127.0.0.1:8000/api/bookings/${booking_id}/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setBooking(bookingResponse.data);

        // Fetch car details
        const carResponse = await axios.get(`http://127.0.0.1:8000/api/cars/${bookingResponse.data.car}/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setCar(carResponse.data);

      } catch (error) {
        console.error('There was an error fetching the booking or car details!', error);
        setError('There was an error fetching the details!');
      }
    };

    fetchBookingDetails();
  }, [booking_id]);

  const handleCancelBooking = async () => {
    try {
      const token = localStorage.getItem('access');
      if (!token) {
        setError('No token found!');
        return;
      }

      // Create a cancellation record
      await axios.post(`http://127.0.0.1:8000/api/cancellations/`, {
        booking: booking_id,
        cancellation_date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        reason: 'User request'
      }, {
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
      });

      window.alert('Booking Cancelled Successfully');
      navigate(`/UserPanel`);
    } catch (error) {
      console.error('There was an error canceling the booking!', error);
      setError('There was an error canceling the booking!');
    }
  };

  if (error) return <p>{error}</p>;
  if (!car || !booking) return <p>Loading...</p>;

  const { img_url, price, car_name } = car;

  return (
    <Helmet title={`Cancel Booking - ${car_name}`}>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="booked-car-card">
                <img src={img_url} alt={car_name} className="w-100" />
                <h2>{car_name}</h2>
                <h4>${price} / Day</h4>
                <Button color="danger" onClick={handleCancelBooking}>Cancel Booking</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CancelBookingPage;



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Container, Row, Col, Button } from "reactstrap";
// import Helmet from "../Helmet/Helmet";

// const BookedCarPage = () => {
//   const { booking_id } = useParams(); // Extract booking_id from URL
//   const navigate = useNavigate();
//   const [booking, setBooking] = useState(null);
//   const [car, setCar] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!booking_id) {
//       setError('Booking ID is missing!');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     const fetchBookingDetails = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/bookings/${booking_id}/`, {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setBooking(response.data);
//         const carId = response.data.car; // Get the car ID from the booking response
//         fetchCarDetails(carId);
//       } catch (error) {
//         console.error('There was an error fetching the booking details!', error);
//         setError('There was an error fetching the booking details!');
//       }
//     };

//     fetchBookingDetails();
//   }, [booking_id]);

//   const fetchCarDetails = async (carId, token) => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       setCar(response.data);
//     } catch (error) {
//       console.error('There was an error fetching the car details!', error);
//       setError('There was an error fetching the car details!');
//     }
//   };
  
//   // Call the function with the token
//   fetchCarDetails(this.carId, localStorage.getItem('access'));

//   const handleCancelBooking = async () => {
//     if (!booking_id) {
//       setError('Booking ID is missing!');
//       return;
//     }

//     const token = localStorage.getItem('access');
//     if (!token) {
//       setError('No token found!');
//       return;
//     }

//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/bookings/${booking_id}/`, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });

//       window.alert('Booking Cancelled Successfully');
//       navigate(`/UserPanel`);
//     } catch (error) {
//       console.error('There was an error canceling the booking!', error);
//       setError('There was an error canceling the booking!');
//     }
//   };

//   if (error) return <p>{error}</p>;
//   if (!car) return <p>Loading...</p>;

//   const { img_url, price, car_name } = car;

//   return (
//     <Helmet title={`Booked Car - ${car_name}`}>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="booked-car-card">
//                 <img src={img_url} alt={car_name} className="w-100" />
//                 <h2>{car_name}</h2>
//                 <h4>${price} / Day</h4>
//                 <Button color="danger" onClick={handleCancelBooking}>Cancel Booking</Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default BookedCarPage;