// import React, { useState } from 'react';
// import '../styles/carform.css'; // Import the CSS file

// const CarForm = ({ refreshCars }) => {
//     const [formData, setFormData] = useState({
//         car_name: '',
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: 0,
//         price: 0.00,
//         img_url: '',
//         rating: 0.0,
//         brand: '',
//         is_available: true
//     });

//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: newValue
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const token = localStorage.getItem('access'); // Retrieve token from localStorage

//         if (!token) {
//             alert('User is not authenticated. Please log in.');
//             return;
//         }

//         const requestOptions = {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${token}`, // Include the token in the headers
//                 'Content-Type': 'application/json' // Set content type to JSON
//             },
//             body: JSON.stringify(formData)
//         };

//         setLoading(true);
//         setError(null);

//         try {
//             const response = await fetch('http://127.0.0.1:8000/api/cars/', requestOptions);
//             if (!response.ok) {
//                 if (response.status === 401) {
//                     throw new Error('Unauthorized. Please log in again.');
//                 }
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const result = await response.json();
//             alert('Car added successfully!');
//             setFormData({
//                 car_name: '',
//                 description: '',
//                 seat_type: '',
//                 automatic: false,
//                 gps: false,
//                 speed: 0,
//                 price: 0.00,
//                 img_url: '',
//                 rating: 0.0,
//                 brand: '',
//                 is_available: true
//             });
//             if (refreshCars) {
//                 refreshCars(); // Refresh car listing data
//             }
//         } catch (error) {
//             console.error('There was an error!', error);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="form-container">
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Car Name:</label>
//                     <input
//                         type="text"
//                         name="car_name"
//                         value={formData.car_name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Description:</label>
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                     ></textarea>
//                 </div>

//                 <div className="form-group">
//                     <label>Seat Type:</label>
//                     <input
//                         type="text"
//                         name="seat_type"
//                         value={formData.seat_type}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Automatic:</label>
//                     <input
//                         type="checkbox"
//                         name="automatic"
//                         checked={formData.automatic}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>GPS:</label>
//                     <input
//                         type="checkbox"
//                         name="gps"
//                         checked={formData.gps}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Speed:</label>
//                     <input
//                         type="number"
//                         name="speed"
//                         value={formData.speed}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Price:</label>
//                     <input
//                         type="number"
//                         name="price"
//                         step="0.01"
//                         value={formData.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Image URL:</label>
//                     <input
//                         type="url"
//                         name="img_url"
//                         value={formData.img_url}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Rating:</label>
//                     <input
//                         type="number"
//                         name="rating"
//                         step="0.1"
//                         max="5"
//                         min="0"
//                         value={formData.rating}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Brand:</label>
//                     <input
//                         type="text"
//                         name="brand"
//                         value={formData.brand}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Available:</label>
//                     <input
//                         type="checkbox"
//                         name="is_available"
//                         checked={formData.is_available}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Adding Car...' : 'Add Car'}
//                 </button>

//                 {error && <p className="error-message">Error: {error}</p>}
//             </form>
//         </div>
//     );
// };

// export default CarForm;


// src/components/CarManagement.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carform = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        description: '',
        seat_type: '',
        automatic: false,
        gps: false,
        speed: '',
        price: '',
        img_url: '',
        car_name: '',
        rating: '',
        brand: '',
        is_available: true
    });
    const [selectedCar, setSelectedCar] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');
    
    // Assume token is stored in local storage
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cars/', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setCars(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error("There was an error fetching the cars!", error);
            setLoading(false);
        });
    }, [token]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
        const method = selectedCar ? 'put' : 'post';

        axios({
            method,
            url,
            data: formData,
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setAlertMessage(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
            setFormData({
                description: '',
                seat_type: '',
                automatic: false,
                gps: false,
                speed: '',
                price: '',
                img_url: '',
                car_name: '',
                rating: '',
                brand: '',
                is_available: true
            });
            setSelectedCar(null);
            return axios.get('http://127.0.0.1:8000/api/cars/', {
                headers: { Authorization: `Bearer ${token}` }
            });
        })
        .then(response => {
            setCars(response.data);
        })
        .catch(error => {
            console.error("There was an error submitting the car data!", error);
            setAlertMessage("There was an error submitting the car data.");
        });
    };

    const handleDelete = (carId) => {
        axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            setCars(cars.filter(car => car.car_id !== carId));
            setAlertMessage("Car deleted successfully!");
        })
        .catch(error => {
            console.error("There was an error deleting the car!", error);
            setAlertMessage("There was an error deleting the car.");
        });
    };

    const handleEdit = (car) => {
        setFormData({
            description: car.description,
            seat_type: car.seat_type,
            automatic: car.automatic,
            gps: car.gps,
            speed: car.speed,
            price: car.price,
            img_url: car.img_url,
            car_name: car.car_name,
            rating: car.rating,
            brand: car.brand,
            is_available: car.is_available
        });
        setSelectedCar(car);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <Container>
            <h1>Car Management</h1>
            {alertMessage && <Alert variant="info">{alertMessage}</Alert>}
            
            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="car_name">
                    <Form.Label>Car Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="car_name"
                        value={formData.car_name}
                        onChange={handleChange}
                        placeholder="Car Name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Brand"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="seat_type">
                    <Form.Label>Seat Type</Form.Label>
                    <Form.Control
                        type="text"
                        name="seat_type"
                        value={formData.seat_type}
                        onChange={handleChange}
                        placeholder="Seat Type"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="speed">
                    <Form.Label>Speed (km/h)</Form.Label>
                    <Form.Control
                        type="number"
                        name="speed"
                        value={formData.speed}
                        onChange={handleChange}
                        placeholder="Speed"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        step="0.01"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="img_url">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="img_url"
                        value={formData.img_url}
                        onChange={handleChange}
                        placeholder="Image URL"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="Rating"
                        step="0.1"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="automatic">
                    <Form.Check
                        type="checkbox"
                        name="automatic"
                        checked={formData.automatic}
                        onChange={handleChange}
                        label="Automatic"
                    />
                </Form.Group>
                <Form.Group controlId="gps">
                    <Form.Check
                        type="checkbox"
                        name="gps"
                        checked={formData.gps}
                        onChange={handleChange}
                        label="GPS"
                    />
                </Form.Group>
                <Form.Group controlId="is_available">
                    <Form.Check
                        type="checkbox"
                        name="is_available"
                        checked={formData.is_available}
                        onChange={handleChange}
                        label="Available"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {selectedCar ? 'Update Car' : 'Add Car'}
                </Button>
            </Form>

            <Row>
                {cars.map(car => (
                    <Col md={4} key={car.car_id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={car.img_url} />
                            <Card.Body>
                                <Card.Title>{car.car_name}</Card.Title>
                                <Card.Text>
                                    <strong>Brand:</strong> {car.brand}<br />
                                    <strong>Description:</strong> {car.description}<br />
                                    <strong>Seat Type:</strong> {car.seat_type}<br />
                                    <strong>Automatic:</strong> {car.automatic ? "Yes" : "No"}<br />
                                    <strong>GPS:</strong> {car.gps ? "Yes" : "No"}<br />
                                    <strong>Speed:</strong> {car.speed} km/h<br />
                                    <strong>Price:</strong> ${car.price}<br />
                                    <strong>Rating:</strong> {car.rating}<br />
                                    <strong>Available:</strong> {car.is_available ? "Yes" : "No"}
                                </Card.Text>
                                <Button 
                                    variant="primary" 
                                    onClick={() => handleEdit(car)}>
                                    Edit
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(car.car_id)} 
                                    className="ml-2">
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Carform;

