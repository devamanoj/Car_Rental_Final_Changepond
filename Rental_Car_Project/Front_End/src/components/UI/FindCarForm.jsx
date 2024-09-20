// import React from "react";
// import "../../styles/find-car-form.css";
// // import "../../styles/find-car-form.css";
// import { Form, FormGroup } from "reactstrap";

// const FindCarForm = () => {
//   return (
//     <Form className="form">
//       <div className=" d-flex align-items-center justify-content-between flex-wrap">
//         <FormGroup className="form__group">
//           <input type="text" placeholder="From address" required />
//         </FormGroup>

//         <FormGroup className="form__group">
//           <input type="text" placeholder="To address" required />
//         </FormGroup>

//         <FormGroup className="form__group">
//           <input type="date" placeholder="Journey date" required />
//         </FormGroup>

//         <FormGroup className="form__group">
//           <input
//             className="journey__time"
//             type="time"
//             placeholder="Journey time"
//             required
//           />
//         </FormGroup>
//         <FormGroup className="select__group">
//           <select>
//             <option value="ac">AC Car</option>
//             <option value="non-ac">Non AC Car</option>
//           </select>
//         </FormGroup>

//         <FormGroup className="form__group">
//           <button className="btn find__car-btn">Find Car</button>
//         </FormGroup>
//       </div>
//     </Form>
//   );
// };

// export default FindCarForm;

// import React from "react";
// import "../../styles/find-car-form.css";
// // import "../../styles/find-car-form.css";
// import { Form, FormGroup } from "reactstrap";

// const FindCarForm = () => {
//   return (
//     <Form className="form">
//       <div className=" d-flex align-items-center justify-content-between flex-wrap">
//         <FormGroup className="form__group">
//           <input type="text" placeholder="From address" required />
//         </FormGroup>

//         <FormGroup className="form__group">
//           <input type="text" placeholder="To address" required />
//         </FormGroup>

//         <FormGroup className="form__group">
//           <input type="date" placeholder="Journey date" required />
//         </FormGroup>

//         <FormGroup className="form__group">
//           <input
//             className="journey__time"
//             type="time"
//             placeholder="Journey time"
//             required
//           />
//         </FormGroup>
//         <FormGroup className="select__group">
//           <select>
//             <option value="ac">AC Car</option>
//             <option value="non-ac">Non AC Car</option>
//           </select>
//         </FormGroup>

//         <FormGroup className="form__group">
//           <button className="btn find__car-btn">Find Car</button>
//         </FormGroup>
//       </div>
//     </Form>
//   );
// };

// export default FindCarForm;





// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "../../styles/find-car-form.css";
// // import { Form, FormGroup } from "reactstrap";

// // const FindCarForm = () => {
// //   const [availableCars, setAvailableCars] = useState([]);
// //   const [selectedCarId, setSelectedCarId] = useState("");

// //   useEffect(() => {
// //     // Fetch available cars from the API
// //     axios
// //       .get("/api/availability/") // Replace with your actual API endpoint
// //       .then((response) => {
// //         const carData = response.data;

// //         // Object to keep track of car availability status
// //         const carAvailability = {};

// //         // Determine availability for each car_id
// //         carData.forEach((item) => {
// //           const { car, available_quantity } = item;

// //           if (!carAvailability[car.id]) {
// //             carAvailability[car.id] = available_quantity > 0;
// //           } else if (available_quantity <= 0) {
// //             carAvailability[car.id] = false;
// //           }
// //         });

// //         // Filter cars based on their availability
// //         const filteredCars = Object.keys(carAvailability)
// //           .filter((carId) => carAvailability[carId])
// //           .map((carId) => carData.find((item) => item.car.id === parseInt(carId)));

// //         setAvailableCars(filteredCars);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching available cars:", error);
// //       });
// //   }, []);

// //   const handleCarSelect = (e) => {
// //     setSelectedCarId(e.target.value);
// //   };

// //   return (
// //     <Form className="form">
// //       <div className="d-flex align-items-center justify-content-between flex-wrap">
// //         <FormGroup className="form__group">
// //           <input type="text" placeholder="From address" required />
// //         </FormGroup>

// //         <FormGroup className="form__group">
// //           <input type="text" placeholder="To address" required />
// //         </FormGroup>

// //         <FormGroup className="form__group">
// //           <input type="date" placeholder="Journey date" required />
// //         </FormGroup>

// //         <FormGroup className="form__group">
// //           <input
// //             className="journey__time"
// //             type="time"
// //             placeholder="Journey time"
// //             required
// //           />
// //         </FormGroup>

// //         <FormGroup className="select__group">
// //           <select onChange={handleCarSelect} value={selectedCarId}>
// //             <option value="">Select Available Car</option>
// //             {availableCars.map((item) => (
// //               <option key={item.car.id} value={item.car.id}>
// //                 {item.car.car_name}
// //               </option>
// //             ))}
// //           </select>
// //         </FormGroup>

// //         <FormGroup className="form__group">
// //           <button className="btn find__car-btn">Find Car</button>
// //         </FormGroup>
// //       </div>
// //     </Form>
// //   );
// // };

// // export default FindCarForm;

// //final
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, FormGroup } from 'reactstrap';
// import "../../styles/find-car-form.css";

// const FindCarForm = () => {
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [availableCars, setAvailableCars] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault(); // Prevent form submission from reloading the page
//     if (!pickupDate || !returnDate) {
//       setError('Please enter both pickup and return dates');
//       return;
//     }

//     setError(null);
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('access');
//       const response = await axios.get('http://127.0.0.1:8000/api/cars/search_available/', {
//         params: {
//           pickup_date: pickupDate,
//           return_date: returnDate,
//         },
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       // Update to reflect the correct structure
//       setAvailableCars(response.data.available_cars); // Store available cars
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching available cars');
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Form className="form" onSubmit={handleSearch}>
//         <div className="d-flex align-items-center justify-content-between flex-wrap">
//           <FormGroup className="form__group">
//             <input
//               type="date"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               placeholder="Pickup date"
//               required
//             />
//           </FormGroup>

//           <FormGroup className="form__group">
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               placeholder="Return date"
//               required
//             />
//           </FormGroup>

//           <FormGroup className="form__group">
//             <button type="submit" className="btn find__car-btn">
//               {loading ? 'Searching...' : 'Find Car'}
//             </button>
//           </FormGroup>
//         </div>
//       </Form>

//       {/* {/ Error Message /} */}
//       {error && <p className="text-danger">{error}</p>}

//       {/* {/ Available Cars Display /} */}
//       <div className="mt-4">
//         {availableCars.length > 0 ? (
//           <div className="row">
//             {availableCars.map((car) => {
//               console.log(car.img_url); // Log the image URL
//               return (
//                 <div key={car.car_id} className="col-md-4">
//                   <div className="card mb-4">
//                     <img
//                       src={ `http://127.0.0.1:8000${car.img_url}` }
//                       className="card-img-top"
//                       alt={car.car_name}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{car.car_name}</h5>
//                       <p className="card-text">
//                         Brand: {car.brand} <br />
//                         Price per day: ${car.price} <br />
//                         Seat Type: {car.seat_type}
//                       </p>
//                       <button className="btn btn-success">Book Now</button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : 
//         (
//           !loading || <p>No cars available for the selected dates.</p>
//         )
//         }
//       </div>
//     </div>
//   );
// };


// export default FindCarForm;


//final

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, FormGroup } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import "../../styles/find-car-form.css";

// const FindCarForm = () => {
//   const [pickupDate, setPickupDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [availableCars, setAvailableCars] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Initialize the navigate function

//   // Define the handleBookNow function outside of handleSearch
//   const handleBookNow = (carId) => {
//     // Navigate to the user panel's car detail page with the specific car ID
//     navigate(`/UserPanel/cars/${carId}`);
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault(); // Prevent form submission from reloading the page

//     if (!pickupDate || !returnDate) {
//       setError('Please enter both pickup and return dates');
//       return;
//     }

//     const token = localStorage.getItem('access');

//     if (!token) {
//       // Redirect to sign-in page if token is not available
//       navigate('/signin');
//       return;
//     }

//     setError(null);
//     setLoading(true);

//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/cars/search_available/', {
//         params: {
//           pickup_date: pickupDate,
//           return_date: returnDate,
//         },
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       setAvailableCars(response.data.available_cars); // Store available cars
//     } catch (err) {
//       setError('Error fetching available cars');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Form className="form" onSubmit={handleSearch}>
//         <div className="d-flex align-items-center justify-content-between flex-wrap">
//           <FormGroup className="form__group">
//             <input
//               type="date"
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               placeholder="Pickup date"
//               required
//             />
//           </FormGroup>

//           <FormGroup className="form__group">
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               placeholder="Return date"
//               required
//             />
//           </FormGroup>

//           <FormGroup className="form__group">
//             <button type="submit" className="btn find__car-btn">
//               {loading ? 'Searching...' : 'Find Car'}
//             </button>
//           </FormGroup>
//         </div>
//       </Form>

//       {/* Error Message */}
//       {error && <p className="text-danger">{error}</p>}

//       {/* Available Cars Display */}
//       <div className="mt-4">
//         {availableCars.length > 0 ? (
//           <div className="row">
//             {availableCars.map((car) => {
//               return (
//                 <div key={car.car_id} className="col-md-4">
//                   <div className="card mb-4">
//                     <img
//                       src={`http://127.0.0.1:8000${car.img_url}`}
//                       className="card-img-top"
//                       alt={car.car_name}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{car.car_name}</h5>
//                       <p className="card-text">
//                         Brand: {car.brand} <br />
//                         Price per day: ${car.price} <br />
//                         Seat Type: {car.seat_type}
//                       </p>
//                       <button 
//                         className="btn btn-success" 
//                         onClick={() => handleBookNow(car.car_id)}
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           !loading || <p>No cars available for the selected dates.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FindCarForm;



import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [availableCars, setAvailableCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // Track if the search button was clicked

  const navigate = useNavigate(); // Initialize the navigate function

  // Define the handleBookNow function outside of handleSearch
  const handleBookNow = (carId) => {
    // Navigate to the user panel's car detail page with the specific car ID
    navigate(`/UserPanel/cars/${carId}`);
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    if (!pickupDate || !returnDate) {
      setError('Please enter both pickup and return dates');
      return;
    }

    const token = localStorage.getItem('access');

    if (!token) {
      // Redirect to sign-in page if token is not available
      navigate('/signin');
      return;
    }

    setError(null);
    setLoading(true);
    setHasSearched(true); // Set hasSearched to true after initiating the search

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cars/search_available/', {
        params: {
          pickup_date: pickupDate,
          return_date: returnDate,
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setAvailableCars(response.data.available_cars); // Store available cars
    } catch (err) {
      setError('Error fetching available cars');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <Form className="form" onSubmit={handleSearch}>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
          <nbsp /><label htmlFor="Pickup-date">Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              placeholder="Pickup date"
              required
            />
          </FormGroup>

          <FormGroup className="form__group">
          <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              placeholder="Return date"
              required
            />
          </FormGroup>

          <FormGroup className="form__group">
            <button type="submit" className="btn find__car-btn">
              {loading ? 'Searching...' : 'Find Car'}
            </button>
          </FormGroup>
        </div>
      </Form>

      {/* Error Message */}
      {error && <p className="text-danger">{error}</p>}

      {/* Available Cars Display */}
      {hasSearched && (
        <div className="mt-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {availableCars.length > 0 ? (
                <>
                  <h3 className="text-center mb-4">Available Cars</h3>
                  <div className="row justify-content-center">
                    {availableCars.map((car) => (
                      <div key={car.car_id} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                        <div className="card">
                          <img
                            src={`http://127.0.0.1:8000${car.img_url}`}
                            className="card-img-top"
                            alt={car.car_name}
                          />
                          <div className="card-body">
                            <h5 className="card-title text-center">{car.car_name}</h5>
                            <p className="card-text">
                              Brand: {car.brand} <br />
                              Price per day: ${car.price} <br />
                              Seat Type: {car.seat_type}
                            </p>
                            <div className="text-center">
                              <button 
                                className="btn btn-success" 
                                onClick={() => handleBookNow(car.car_id)}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p>No cars available for the selected dates.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FindCarForm;
