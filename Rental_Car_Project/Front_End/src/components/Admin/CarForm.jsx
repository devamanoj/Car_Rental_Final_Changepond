// import React, { useState } from 'react';
// import axios from 'axios';
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

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData({
//             ...formData,
//             [name]: newValue
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://127.0.0.1:8000/cars/cars/', formData)
//             .then(response => {
//                 alert('Car added successfully!');
//                 setFormData({
//                     car_name: '',
//                     description: '',
//                     seat_type: '',
//                     automatic: false,
//                     gps: false,
//                     speed: 0,
//                     price: 0.00,
//                     img_url: '',
//                     rating: 0.0,
//                     brand: '',
//                     is_available: true
//                 });
//                 if (refreshCars) {
//                     refreshCars(); // Refresh car listing data
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
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

//                 <button type="submit">Add Car</button>
//             </form>
//         </div>
//     );
// };

// export default CarForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/carform.css';

// const CarForm = () => {
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

//     const [cars, setCars] = useState([]);
//     const [editingCar, setEditingCar] = useState(null);
//     const [token, setToken] = useState(''); // State for the token
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null); // Error state

//     useEffect(() => {
//         fetchCars();
//     }, []);

//     const fetchCars = async () => {
//         setLoading(true);
//         setError(null); // Reset error state before fetching

//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: {
//                     Authorization: `Bearer ${token}` // Include token in headers
//                 }
//             });

//             if (response.status === 200) {
//                 setCars(response.data);
//                 console.log('Fetched cars:', response.data); // Debugging line
//             } else {
//                 console.error('Unexpected response status:', response.status);
//                 setError('Failed to fetch cars.');
//             }
//         } catch (error) {
//             console.error('Error fetching cars:', error);
//             setError('Error fetching cars.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: newValue
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = editingCar
//                 ? `http://127.0.0.1:8000/api/cars/${editingCar.car_id}/`
//                 : 'http://127.0.0.1:8000/api/cars/';

//             const method = editingCar ? 'put' : 'post';

//             await axios({
//                 method,
//                 url,
//                 data: formData,
//                 headers: {
//                     Authorization: `Bearer ${token}` // Include token in headers
//                 }
//             });
            
//             alert(`Car ${editingCar ? 'updated' : 'added'} successfully!`);
//             setEditingCar(null);
//             resetForm();
//             fetchCars();
//         } catch (error) {
//             console.error('Error submitting car data:', error);
//         }
//     };

//     const handleEdit = (car) => {
//         setEditingCar(car);
//         setFormData(car);
//     };

//     const handleDelete = async (car_id) => {
//         if (car_id === undefined) {
//             console.error('ID is undefined, cannot delete');
//             return;
//         }

//         console.log('Attempting to delete car with ID:', car_id); // Debugging line

//         if (window.confirm('Are you sure you want to delete this car?')) {
//             try {
//                 const response = await axios.delete(`http://127.0.0.1:8000/api/cars/${car_id}/`, {
//                     headers: {
//                         Authorization: `Bearer ${token}` // Include token in headers
//                     }
//                 });

//                 if (response.status === 204) {
//                     alert('Car deleted successfully!');
//                     fetchCars(); // Refresh the list
//                 } else {
//                     alert('Failed to delete the car.');
//                 }
//             } catch (error) {
//                 console.error('Error deleting car:', error);
//                 alert('Error deleting car.');
//             }
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             car_name: '',
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: 0,
//             price: 0.00,
//             img_url: '',
//             rating: 0.0,
//             brand: '',
//             is_available: true
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <header className="mb-4">
//                 <h1 className="text-center">Car Management System</h1>
//                 <p className="text-center">Manage your car inventory with ease.</p>
//             </header>

//             <div className="row">
//                 {/* Form for Adding/Updating Car */}
//                 <div className="col-md-6">
//                     <h2>{editingCar ? 'Update Car' : 'Add Car'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         {/* Form fields */}
//                         {Object.entries(formData).map(([key, value]) => {
//                             if (key === 'automatic' || key === 'gps' || key === 'is_available') {
//                                 return (
//                                     <div className="form-check" key={key}>
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             name={key}
//                                             checked={value}
//                                             onChange={handleChange}
//                                         />
//                                         <label className="form-check-label">{key.replace('_', ' ').toUpperCase()}</label>
//                                     </div>
//                                 );
//                             }
//                             return (
//                                 <div className="form-group" key={key}>
//                                     <label htmlFor={key} className="form-label">
//                                         {key.replace('_', ' ').toUpperCase()}:
//                                     </label>
//                                     <input
//                                         type={typeof value === 'number' ? 'number' : 'text'}
//                                         className="form-control dark-border-input"
//                                         id={key}
//                                         name={key}
//                                         value={value}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             );
//                         })}
//                         <button type="submit" className="btn btn-primary mt-3">
//                             {editingCar ? 'Update Car' : 'Add Car'}
//                         </button>
//                         {editingCar && (
//                             <button
//                                 type="button"
//                                 className="btn btn-secondary mt-3 ml-2"
//                                 onClick={() => {
//                                     setEditingCar(null);
//                                     resetForm();
//                                 }}
//                             >
//                                 Cancel
//                             </button>
//                         )}
//                     </form>
//                 </div>

//                 {/* Car Listings */}
//                 <div className="col-md-6">
//                     <h2>Car Listings</h2>
//                     {loading ? (
//                         <p>Loading cars...</p>
//                     ) : error ? (
//                         <p className="text-danger">{error}</p>
//                     ) : (
//                         <div className="row">
//                             {cars.map(car => (
//                                 <div className="col-md-4 mb-3" key={car.car_id}>
//                                     <div className="card dark-card">
//                                         <img src={car.img_url} className="card-img-top" alt={car.car_name} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">{car.car_name}</h5>
//                                             <p className="card-text">{car.description}</p>
//                                             <p className="card-text"><strong>Brand:</strong> {car.brand}</p>
//                                             <p className="card-text"><strong>Price:</strong> ${(parseFloat(car.price) || 0).toFixed(2)}</p>
//                                             <p className="card-text"><strong>Speed:</strong> {car.speed} km/h</p>
//                                             <p className="card-text"><strong>Rating:</strong> {car.rating}</p>
//                                             <p className="card-text"><strong>Available:</strong> {car.is_available ? 'Yes' : 'No'}</p>
//                                             <p className="card-text"><strong>Features:</strong> {car.automatic ? 'Automatic' : 'Manual'}, {car.gps ? 'GPS' : 'No GPS'}</p>
//                                             <button
//                                                 className="btn btn-warning mr-2"
//                                                 onClick={() => handleEdit(car)}
//                                             >
//                                                 Update
//                                             </button>
//                                             <button
//                                                 className="btn btn-danger"
//                                                 onClick={() => handleDelete(car.car_id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/carform.css'

// const CarForm = () => {
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

//     const [cars, setCars] = useState([]);
//     const [editingCar, setEditingCar] = useState(null);

//     useEffect(() => {
//         fetchCars();
//     }, []);

//     const fetchCars = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/cars/cars/');
//             setCars(response.data);
//             console.log('Fetched cars:', response.data); // Debugging line
//         } catch (error) {
//             console.error('Error fetching cars:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: newValue
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (editingCar) {
//                 await axios.put(`http://127.0.0.1:8000/cars/cars/${editingCar.car_id}/`, formData);
//                 alert('Car updated successfully!');
//                 setEditingCar(null);
//             } else {
//                 await axios.post('http://127.0.0.1:8000/cars/cars/', formData);
//                 alert('Car added successfully!');
//             }
//             resetForm();
//             fetchCars();
//         } catch (error) {
//             console.error('Error submitting car data:', error);
//         }
//     };

//     const handleEdit = (car) => {
//         setEditingCar(car);
//         setFormData(car);
//     };

//     const handleDelete = async (car_id) => {
//         if (car_id === undefined) {
//             console.error('ID is undefined, cannot delete');
//             return;
//         }

//         console.log('Attempting to delete car with ID:', car_id); // Debugging line

//         if (window.confirm('Are you sure you want to delete this car?')) {
//             try {
//                 const response = await fetch(`http://127.0.0.1:8000/cars/cars/${car_id}/`, {
//                     method: 'DELETE',
//                 });

//                 if (response.ok) {
//                     alert('Car deleted successfully!');
//                     fetchCars(); // Refresh the list
//                 } else {
//                     alert('Failed to delete the car.');
//                 }
//             } catch (error) {
//                 console.error('Error deleting car:', error);
//                 alert('Error deleting car.');
//             }
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             car_name: '',
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: 0,
//             price: 0.00,
//             img_url: '',
//             rating: 0.0,
//             brand: '',
//             is_available: true
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {/* Car Listings */}
//                 <div className="col-md-12 mb-5">
//                     <h2>Car Listings</h2>
//                     <div className="row">
//                         {cars.map(car => (
//                             <div className="col-md-4 mb-3" key={car.car_id}>
//                                 <div className="card dark-card">
//                                     <img src={car.img_url} className="card-img-top" alt={car.car_name} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{car.car_name}</h5>
//                                         <p className="card-text"><strong>Price:</strong> ${(parseFloat(car.price) || 0).toFixed(2)}</p>
//                                         <div className="btn-group">
//                                             <button
//                                                 className="btn btn-dark mb-3"
//                                                 onClick={() => handleEdit(car)}
//                                             >
//                                                 Update
//                                             </button>
//                                             <button
//                                                 className="btn btn-darkblue "
//                                                 onClick={() => handleDelete(car.car_id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Form for Adding/Updating Car */}
//                 <div className="col-md-12">
//                     <h2>{editingCar ? 'Update Car' : 'Add Car'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         {/* Form fields */}
//                         {Object.entries(formData).map(([key, value]) => {
//                             if (key === 'automatic' || key === 'gps' || key === 'is_available') {
//                                 return (
//                                     <div className="form-check" key={key}>
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             name={key}
//                                             checked={value}
//                                             onChange={handleChange}
//                                         />
//                                         <label className="form-check-label">{key.replace('_', ' ').toUpperCase()}</label>
//                                     </div>
//                                 );
//                             }
//                             return (
//                                 <div className="form-group" key={key}>
//                                     <label htmlFor={key} className="form-label">
//                                         {key.replace('_', ' ').toUpperCase()}:
//                                     </label>
//                                     <input
//                                         type={typeof value === 'number' ? 'number' : 'text'}
//                                         className="form-control dark-border-input"
//                                         id={key}
//                                         name={key}
//                                         value={value}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             );
//                         })}
//                         <button type="submit" className="btn11 btn-primary mt-3">
//                             {editingCar ? 'Update Car' : 'Add Car'}
//                         </button>
//                         {editingCar && (
//                             <button
//                                 type="button"
//                                 className="btn11 btn-secondary mt-3 ml-2"
//                                 onClick={() => {
//                                     setEditingCar(null);
//                                     resetForm();
//                                 }}
//                             >
//                                 Cancel
//                             </button>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarForm;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/carform.css'; // Ensure this file includes relevant styles for the cards and buttons

// const CarForm = () => {
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

//     const [cars, setCars] = useState([]);
//     const [editingCar, setEditingCar] = useState(null);

//     useEffect(() => {
//         fetchCars();
//     }, []);

//     const fetchCars = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/cars/cars/');
//             setCars(response.data);
//         } catch (error) {
//             console.error('Error fetching cars:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: newValue
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (editingCar) {
//                 await axios.put(`http://127.0.0.1:8000/cars/cars/${editingCar.car_id}/`, formData);
//                 alert('Car updated successfully!');
//                 setEditingCar(null);
//             } else {
//                 await axios.post('http://127.0.0.1:8000/cars/cars/', formData);
//                 alert('Car added successfully!');
//             }
//             resetForm();
//             fetchCars();
//         } catch (error) {
//             console.error('Error submitting car data:', error);
//         }
//     };

//     const handleEdit = (car) => {
//         setEditingCar(car);
//         setFormData(car);
//     };

//     const handleDelete = async (car_id) => {
//         if (!window.confirm('Are you sure you want to delete this car?')) return;

//         try {
//             const response = await fetch(`http://127.0.0.1:8000/cars/cars/${car_id}/`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 alert('Car deleted successfully!');
//                 fetchCars(); // Refresh the list
//             } else {
//                 alert('Failed to delete the car.');
//             }
//         } catch (error) {
//             console.error('Error deleting car:', error);
//             alert('Error deleting car.');
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             car_name: '',
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: 0,
//             price: 0.00,
//             img_url: '',
//             rating: 0.0,
//             brand: '',
//             is_available: true
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {/* Car Listings */}
//                 <div className="col-md-12 mb-5">
//                     <h2>Car Listings</h2>
//                     <div className="row">
//                         {cars.map(car => (
//                             <div className="col-md-4 mb-3" key={car.car_id}>
//                                 <div className="card shadow-sm">
//                                     <img src={car.img_url} className="card-img-top" alt={car.car_name} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{car.car_name}</h5>
//                                         <p className="card-text"><strong>Price:</strong> ${(parseFloat(car.price) || 0).toFixed(2)}</p>
//                                         <p className="card-text"><strong>Description:</strong> {car.description}</p>
//                                         <p className="card-text"><strong>Speed:</strong> {car.speed} km/h</p>
//                                         <div className="btn-group">
//                                             <button
//                                                 className="btn btn-warning me-2"
//                                                 onClick={() => handleEdit(car)}
//                                             >
//                                                 Update
//                                             </button>
//                                             <button
//                                                 className="btn btn-danger"
//                                                 onClick={() => handleDelete(car.car_id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Form for Adding/Updating Car */}
//                 <div className="col-md-12">
//                     <h2>{editingCar ? 'Update Car' : 'Add Car'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         {Object.entries(formData).map(([key, value]) => {
//                             if (key === 'automatic' || key === 'gps' || key === 'is_available') {
//                                 return (
//                                     <div className="form-check" key={key}>
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             name={key}
//                                             checked={value}
//                                             onChange={handleChange}
//                                         />
//                                         <label className="form-check-label">{key.replace('_', ' ').toUpperCase()}</label>
//                                     </div>
//                                 );
//                             }
//                             return (
//                                 <div className="form-group" key={key}>
//                                     <label htmlFor={key} className="form-label">
//                                         {key.replace('_', ' ').toUpperCase()}:
//                                     </label>
//                                     <input
//                                         type={typeof value === 'number' ? 'number' : 'text'}
//                                         className="form-control"
//                                         id={key}
//                                         name={key}
//                                         value={value}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             );
//                         })}
//                         <button type="submit" className="btn btn-primary mt-3">
//                             {editingCar ? 'Update Car' : 'Add Car'}
//                         </button>
//                         {editingCar && (
//                             <button
//                                 type="button"
//                                 className="btn btn-secondary mt-3 ms-2"
//                                 onClick={() => {
//                                     setEditingCar(null);
//                                     resetForm();
//                                 }}
//                             >
//                                 Cancel
//                             </button>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarForm;

// src/components/CarManagement.js

// src/components/CarManagement.js


// src/components/CarManagement.js



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card, Form, Container, Row, Col, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: '',
//         price: '',
//         img_url: '',
//         car_name: '',
//         rating: '',
//         brand: '',
//         is_available: true
//     });
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [alertMessage, setAlertMessage] = useState('');

//     // Assume token is stored in local storage
//     const token = localStorage.getItem('access');

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/cars/', {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(response => {
//             setCars(response.data);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error("There was an error fetching the cars!", error);
//             setLoading(false);
//         });
//     }, [token]);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
//         const method = selectedCar ? 'put' : 'post';

//         axios({
//             method,
//             url,
//             data: formData,
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(response => {
//             setAlertMessage(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
//             setFormData({
//                 description: '',
//                 seat_type: '',
//                 automatic: false,
//                 gps: false,
//                 speed: '',
//                 price: '',
//                 img_url: '',
//                 car_name: '',
//                 rating: '',
//                 brand: '',
//                 is_available: true
//             });
//             setSelectedCar(null);
//             return axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//         })
//         .then(response => {
//             setCars(response.data);
//         })
//         .catch(error => {
//             console.error("There was an error submitting the car data!", error);
//             setAlertMessage("There was an error submitting the car data.");
//         });
//     };

//     const handleDelete = (carId) => {
//         axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(() => {
//             setCars(cars.filter(car => car.car_id !== carId));
//             setAlertMessage("Car deleted successfully!");
//         })
//         .catch(error => {
//             console.error("There was an error deleting the car!", error);
//             setAlertMessage("There was an error deleting the car.");
//         });
//     };

//     const handleEdit = (car) => {
//         setFormData({
//             description: car.description,
//             seat_type: car.seat_type,
//             automatic: car.automatic,
//             gps: car.gps,
//             speed: car.speed,
//             price: car.price,
//             img_url: car.img_url,
//             car_name: car.car_name,
//             rating: car.rating,
//             brand: car.brand,
//             is_available: car.is_available
//         });
//         setSelectedCar(car);
//     };

//     if (loading) return <p>Loading...</p>;

//     return (
//         <Container className="my-4">
//             <h1 className="mb-4">Car Management</h1>
//             {alertMessage && <Alert variant="info" className="mb-4">{alertMessage}</Alert>}
            
//             <Row className="mb-4">
//                 <Col md={12}>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="car_name">
//                             <Form.Label>Car Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="car_name"
//                                 value={formData.car_name}
//                                 onChange={handleChange}
//                                 placeholder="Car Name"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="brand">
//                             <Form.Label>Brand</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="brand"
//                                 value={formData.brand}
//                                 onChange={handleChange}
//                                 placeholder="Brand"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="description">
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 placeholder="Description"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="seat_type">
//                             <Form.Label>Seat Type</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="seat_type"
//                                 value={formData.seat_type}
//                                 onChange={handleChange}
//                                 placeholder="Seat Type"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="speed">
//                             <Form.Label>Speed (km/h)</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="speed"
//                                 value={formData.speed}
//                                 onChange={handleChange}
//                                 placeholder="Speed"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="price">
//                             <Form.Label>Price</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                                 placeholder="Price"
//                                 step="0.01"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="img_url">
//                             <Form.Label>Image URL</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="img_url"
//                                 value={formData.img_url}
//                                 onChange={handleChange}
//                                 placeholder="Image URL"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="rating">
//                             <Form.Label>Rating</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="rating"
//                                 value={formData.rating}
//                                 onChange={handleChange}
//                                 placeholder="Rating"
//                                 step="0.1"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="automatic">
//                             <Form.Check
//                                 type="checkbox"
//                                 name="automatic"
//                                 checked={formData.automatic}
//                                 onChange={handleChange}
//                                 label="Automatic"
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="gps">
//                             <Form.Check
//                                 type="checkbox"
//                                 name="gps"
//                                 checked={formData.gps}
//                                 onChange={handleChange}
// //                                 label="GPS"
// //                             />
// //                         </Form.Group>
                        
// //                         <Form.Group controlId="is_available">
// //                             <Form.Check
// //                                 type="checkbox"
// //                                 name="is_available"
// //                                 checked={formData.is_available}
// //                                 onChange={handleChange}
// //                                 label="Available"
// //                             />
// //                         </Form.Group>
// //                         <br></br>
// //                         <Button variant="primary" type="submit">
// //                             {selectedCar ? 'Update Car' : 'Add Car'}
// //                         </Button>
// //                     </Form>
// //                 </Col>
// //             </Row>
// //             <br></br><br></br>

// //             <Row>
// //                 {cars.map(car => (
// //                     <Col xs={12} sm={6} md={4} lg={3} key={car.car_id} className="mb-4">
// //                         <Card className="h-100">
// //                             <Card.Img variant="top" src={car.img_url} />
// //                             <Card.Body>
// //                                 <Card.Title>{car.car_name}</Card.Title>
// //                                 <Card.Text>
// //                                     <strong>Brand:</strong> {car.brand}<br />
// //                                     <strong>Description:</strong> {car.description}<br />
// //                                     <strong>Seat Type:</strong> {car.seat_type}<br />
// //                                     <strong>Automatic:</strong> {car.automatic ? "Yes" : "No"}<br />
// //                                     <strong>GPS:</strong> {car.gps ? "Yes" : "No"}<br />
// //                                     <strong>Speed:</strong> {car.speed} km/h<br />
// //                                     <strong>Price:</strong> ${car.price}<br />
// //                                     <strong>Rating:</strong> {car.rating}<br />
// //                                     <strong>Available:</strong> {car.is_available ? "Yes" : "No"}
// //                                     </Card.Text>
// //                                 <Button 
// //                                     variant="primary" 
// //                                     onClick={() => handleEdit(car)}
// //                                     className="me-2">
// //                                     Edit
// //                                 </Button>
// //                                 <Button 
// //                                     variant="danger" 
// //                                     onClick={() => handleDelete(car.car_id)}>
// //                                     Delete
// //                                 </Button>
// //                             </Card.Body>
// //                         </Card>
// //                     </Col>
// //                 ))}
// //             </Row>
// //         </Container>
// //     );
// // };

// // export default CarManagement;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card, Form, Container, Row, Col, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: '',
//         price: '',
//         car_name: '',
//         rating: '',
//         brand: '',
//         is_available: true
//     });
//     const [imageFile, setImageFile] = useState(null);  // New state for storing the image file
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [alertMessage, setAlertMessage] = useState('');

//     // Assume token is stored in local storage
//     const token = localStorage.getItem('access');

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/cars/', {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(response => {
//             setCars(response.data);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error("There was an error fetching the cars!", error);
//             setLoading(false);
//         });
//     }, [token]);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleImageChange = (e) => {
//         setImageFile(e.target.files[0]); // Store the selected image file
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Create a FormData object for file upload
//         const data = new FormData();
//         data.append('description', formData.description);
//         data.append('seat_type', formData.seat_type);
//         data.append('automatic', formData.automatic);
//         data.append('gps', formData.gps);
//         data.append('speed', formData.speed);
//         data.append('price', formData.price);
//         data.append('car_name', formData.car_name);
//         data.append('rating', formData.rating);
//         data.append('brand', formData.brand);
//         data.append('is_available', formData.is_available);
//         if (imageFile) {
//             data.append('img_url', imageFile); // Append the image file
//         }

//         const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
//         const method = selectedCar ? 'put' : 'post';

//         axios({
//             method,
//             url,
//             data: data,
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             setAlertMessage(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
//             setFormData({
//                 description: '',
//                 seat_type: '',
//                 automatic: false,
//                 gps: false,
//                 speed: '',
//                 price: '',
//                 car_name: '',
//                 rating: '',
//                 brand: '',
//                 is_available: true
//             });
//             setImageFile(null);  // Reset the image file after submission
//             setSelectedCar(null);
//             return axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//         })
//         .then(response => {
//             setCars(response.data);
//         })
//         .catch(error => {
//             console.error("There was an error submitting the car data!", error);
//             setAlertMessage("There was an error submitting the car data.");
//         });
//     };

//     const handleDelete = (carId) => {
//         axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(() => {
//             setCars(cars.filter(car => car.car_id !== carId));
//             window.alert('Are you sure want to delete the car :')
//             setAlertMessage("Car deleted successfully!");
//         })
//         .catch(error => {
//             console.error("There was an error deleting the car!", error);
//             setAlertMessage("There was an error deleting the car.");
//         });
//     };

//     const handleEdit = (car) => {
//         setFormData({
//             description: car.description,
//             seat_type: car.seat_type,
//             automatic: car.automatic,
//             gps: car.gps,
//             speed: car.speed,
//             price: car.price,
//             car_name: car.car_name,
//             rating: car.rating,
//             brand: car.brand,
//             is_available: car.is_available
//         });
//         setSelectedCar(car);
//         setImageFile(null);  // Reset image file when editing
//     };

//     if (loading) return <p>Loading...</p>;



// working fine

 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarManagement = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        description: '',
        seat_type: '',
        automatic: false,
        gps: false,
        speed: '',
        price: '',
        car_name: '',
        rating: '',
        brand: '',
        is_available: true
    });
    const [imageFile, setImageFile] = useState(null);  // State for storing the image file
    const [selectedCar, setSelectedCar] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');

    // Assume token is stored in local storage
    const token = localStorage.getItem('access');

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

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]); // Store the selected image file
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show a confirmation alert before proceeding
        const confirmation = window.confirm(`Are you sure you want to ${selectedCar ? 'edit' : 'add'} this car?`);
        if (!confirmation) return;  // If user clicks "Cancel", return early

        // Create a FormData object for file upload
        const data = new FormData();
        data.append('description', formData.description);
        data.append('seat_type', formData.seat_type);
        data.append('automatic', formData.automatic);
        data.append('gps', formData.gps);
        data.append('speed', formData.speed);
        data.append('price', formData.price);
        data.append('car_name', formData.car_name);
        data.append('rating', formData.rating);
        data.append('brand', formData.brand);
        data.append('is_available', formData.is_available);
        if (imageFile) {
            data.append('img_url', imageFile); // Append the image file
        }

        const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
        const method = selectedCar ? 'put' : 'post';

        axios({
            method,
            url,
            data: data,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            window.alert(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
            setFormData({
                description: '',
                seat_type: '',
                automatic: false,
                gps: false,
                speed: '',
                price: '',
                car_name: '',
                rating: '',
                brand: '',
                is_available: true
            });
            setImageFile(null);  // Reset the image file after submission
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
            window.alert("There was an error submitting the car data.");
        });
    };

    const handleDelete = (carId) => {
        // Show a confirmation alert before deleting
        const confirmation = window.confirm('Are you sure you want to delete this car?');
        if (!confirmation) return;  // If user clicks "Cancel", return early

        axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => {
            setCars(cars.filter(car => car.car_id !== carId));
            window.alert("Car deleted successfully!");
        })
        .catch(error => {
            console.error("There was an error deleting the car!", error);
            window.alert("There was an error deleting the car.");
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
            car_name: car.car_name,
            rating: car.rating,
            brand: car.brand,
            is_available: car.is_available
        });
        setSelectedCar(car);
        setImageFile(null);  // Reset image file when editing
    };

    if (loading) return <p>Loading...</p>;

    return (
        <Container className="my-4">
            <h1 className="mb-4">Car Management</h1>
            {alertMessage && <Alert variant="info" className="mb-4">{alertMessage}</Alert>}
            
            <Row className="mb-4">
                <Col md={12}>
                    <Form onSubmit={handleSubmit}>
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
                            <Form.Label>Image Upload</Form.Label>
                            <Form.Control
                                type="file"
                                name="img_url"
                                onChange={handleImageChange}
                                accept="image/*"  // Restrict file types to images
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
                        
                        {/* <Form.Group controlId="is_available">
                            <Form.Check
                                type="checkbox"
                                name="is_available"
                                checked={formData.is_available}
                                onChange={handleChange}
                                label="Available"
                            />
                        </Form.Group> */}
                        <br></br>
                        <Button variant="primary" type="submit">
                            {selectedCar ? 'Update Car' : 'Add Car'}
                        </Button>
                     </Form>
                 </Col>
             </Row>
             <br></br><br></br>             
             <Row>
                 {cars.map(car => (
                    <Col xs={12} sm={6} md={4} lg={3} key={car.car_id} className="mb-4">
                        <Card className="h-100">
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
                                    onClick={() => handleEdit(car)}
                                    className="me-2">
                                    Edit
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(car.car_id)}>
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

export default CarManagement;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card, Form, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaTrashAlt } from 'react-icons/fa'; // Import Trash icon from react-icons

// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: '',
//         price: '',
//         car_name: '',
//         rating: '',
//         brand: '',
//         is_available: true
//     });
//     const [imageFile, setImageFile] = useState(null);  // State for storing the image file
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [alertMessage, setAlertMessage] = useState('');

//     // Assume token is stored in local storage
//     const token = localStorage.getItem('access');

//     useEffect(() => {
//         fetchCars();
//     }, [token]);

//     const fetchCars = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCars(response.data);
//         } catch (error) {
//             console.error("There was an error fetching the cars!", error);
//             setAlertMessage("There was an error fetching the cars.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleImageChange = (e) => {
//         setImageFile(e.target.files[0]); // Store the selected image file
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Show a confirmation alert before proceeding
//         const confirmation = window.confirm(`Are you sure you want to ${selectedCar ? 'edit' : 'add'} this car?`);
//         if (!confirmation) return;  // If user clicks "Cancel", return early

//         // Create a FormData object for file upload
//         const data = new FormData();
//         data.append('description', formData.description);
//         data.append('seat_type', formData.seat_type);
//         data.append('automatic', formData.automatic);
//         data.append('gps', formData.gps);
//         data.append('speed', formData.speed);
//         data.append('price', formData.price);
//         data.append('car_name', formData.car_name);
//         data.append('rating', formData.rating);
//         data.append('brand', formData.brand);
//         data.append('is_available', formData.is_available);
//         if (imageFile) {
//             data.append('img_url', imageFile); // Append the image file
//         }

//         const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
//         const method = selectedCar ? 'put' : 'post';

//         try {
//             await axios({
//                 method,
//                 url,
//                 data: data,
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             window.alert(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
//             resetForm();
//             await fetchCars();
//         } catch (error) {
//             console.error("There was an error submitting the car data!", error);
//             window.alert("There was an error submitting the car data.");
//         }
//     };

//     const handleDelete = async (carId) => {
//         // Show a confirmation alert before deleting
//         const confirmation = window.confirm('Are you sure you want to delete this car?');
//         if (!confirmation) return;  // If user clicks "Cancel", return early

//         try {
//             await axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCars(cars.filter(car => car.car_id !== carId));
//             window.alert("Car deleted successfully!");
//         } catch (error) {
//             console.error("There was an error deleting the car!", error);
//             window.alert("There was an error deleting the car.");
//         }
//     };

//     const handleEdit = (car) => {
//         setFormData({
//             description: car.description,
//             seat_type: car.seat_type,
//             automatic: car.automatic,
//             gps: car.gps,
//             speed: car.speed,
//             price: car.price,
//             car_name: car.car_name,
//             rating: car.rating,
//             brand: car.brand,
//             is_available: car.is_available
//         });
//         setSelectedCar(car);
//         setImageFile(null);  // Reset image file when editing
//     };

//     const resetForm = () => {
//         setFormData({
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: '',
//             price: '',
//             car_name: '',
//             rating: '',
//             brand: '',
//             is_available: true
//         });
//         setImageFile(null);  // Reset the image file after submission
//         setSelectedCar(null);
//     };

//     if (loading) return (
//         <div style={styles.container}>
//             <div style={styles.spinner}></div>
//             <p>Loading...</p>
//         </div>
//     );

//     return (
//         <Container className="my-4" style={styles.container}>
//             <h1 className="mb-4">Car Management</h1>
//             {alertMessage && <Alert variant="danger" style={styles.alert}>{alertMessage}</Alert>}
            
//             <Row className="mb-4">
//                 <Col md={12}>
//                     <Card>
//                         <Card.Header as="h5" style={styles.cardHeader}>
//                             {selectedCar ? 'Edit Car' : 'Add Car'}
//                         </Card.Header>
//                         <Card.Body>
//                             <Form onSubmit={handleSubmit}>
//                                 <Form.Group controlId="car_name">
//                                     <Form.Label>Car Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="car_name"
//                                         value={formData.car_name}
//                                         onChange={handleChange}
//                                         placeholder="Car Name"
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="brand">
//                                     <Form.Label>Brand</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="brand"
//                                         value={formData.brand}
//                                         onChange={handleChange}
//                                         placeholder="Brand"
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="description">
//                                     <Form.Label>Description</Form.Label>
//                                     <Form.Control
//                                         as="textarea"
//                                         name="description"
//                                         value={formData.description}
//                                         onChange={handleChange}
//                                         placeholder="Description"
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="seat_type">
//                                     <Form.Label>Seat Type</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="seat_type"
//                                         value={formData.seat_type}
//                                         onChange={handleChange}
//                                         placeholder="Seat Type"
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="speed">
//                                     <Form.Label>Speed (km/h)</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         name="speed"
//                                         value={formData.speed}
//                                         onChange={handleChange}
//                                         placeholder="Speed"
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="price">
//                                     <Form.Label>Price</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         name="price"
//                                         value={formData.price}
//                                         onChange={handleChange}
//                                         placeholder="Price"
//                                         step="0.01"
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="img_url">
//                                     <Form.Label>Image Upload</Form.Label>
//                                     <Form.Control
//                                         type="file"
//                                         name="img_url"
//                                         onChange={handleImageChange}
//                                         accept="image/*"  // Restrict file types to images
//                                         required
//                                     />
// //                                 </Form.Group>
                                // <Form.Group controlId="rating">
                                //     <Form.Label>Rating</Form.Label>
                                //     <Form.Control
                                //         type="number"
                                //         name="rating"
                                //         value={formData.rating}
                                //         onChange={handleChange}
                                //         placeholder="Rating"
                                //         step="0.1"
                                //         required
                                //     />
                                // </Form.Group>
//                                 <Form.Group controlId="automatic">
//                                     <Form.Check
//                                         type="checkbox"
//                                         name="automatic"
//                                         checked={formData.automatic}
//                                         onChange={handleChange}
//                                         label="Automatic"
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="gps">
//                                     <Form.Check
//                                         type="checkbox"
//                                         name="gps"
//                                         checked={formData.gps}
//                                         onChange={handleChange}
//                                         label="GPS"
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="is_available">
//                                     <Form.Check
//                                         type="checkbox"
//                                         name="is_available"
//                                         checked={formData.is_available}
//                                         onChange={handleChange}
//                                         label="Available"
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" type="submit">
//                                     {selectedCar ? 'Update Car' : 'Add Car'}
//                                 </Button>
//                                 <Button
//                                     variant="secondary"
//                                     className="ms-2"
//                                     onClick={resetForm}
//                                 >
//                                     Cancel
//                                 </Button>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             <Row>
//                 {cars.map(car => (
//                     <Col md={4} key={car.car_id} className="mb-4">
//                         <Card>
//                             <Card.Img variant="top" src={car.img_url} style={styles.cardImage} />
//                             <Card.Body>
//                                 <Card.Title>{car.car_name}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">{car.brand}</Card.Subtitle>
//                                 <Card.Text>
//                                     <strong>Description:</strong> {car.description}<br />
//                                     <strong>Seat Type:</strong> {car.seat_type}<br />
//                                     <strong>Speed:</strong> {car.speed} km/h<br />
//                                     <strong>Price:</strong> ${car.price}<br />
//                                     <strong>Rating:</strong> {car.rating}<br />
//                                     <strong>Automatic:</strong> {car.automatic ? 'Yes' : 'No'}<br />
//                                     <strong>GPS:</strong> {car.gps ? 'Yes' : 'No'}<br />
//                                     <strong>Available:</strong> {car.is_available ? 'Yes' : 'No'}
//                                 </Card.Text>
//                                 <Button
//                                     variant="warning"
//                                     className="me-2"
//                                     onClick={() => handleEdit(car)}
//                                 >
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     variant="danger"
//                                     onClick={() => handleDelete(car.car_id)}
//                                 >
//                                     <FaTrashAlt /> Delete
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// const styles = {
//     container: {
//         padding: '20px',
//         margin: '20px auto',
//         maxWidth: '1200px',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center'
//     },
//     cardHeader: {
//         backgroundColor: '#000d6b',
//         color: '#ffffff',
//         borderRadius: '10px 10px 0 0'
//     },
//     cardImage: {
//         height: '200px',
//         objectFit: 'cover'
//     },
//     spinner: {
//         border: '8px solid #f3f3f3', /* Light grey */
//         borderTop: '8px solid #3498db', /* Blue */
//         borderRadius: '50%',
//         width: '50px',
//         height: '50px',
//         animation: 'spin 1s linear infinite',
//         margin: 'auto'
//     },
//     alert: {
//         padding: '10px',
//         backgroundColor: '#f8d7da',
//         color: '#721c24',
//         borderRadius: '5px',
//         border: '1px solid #f5c6cb',
//         marginBottom: '20px'
//     },
//     '@keyframes spin': {
//         from: { transform: 'rotate(0deg)' },
//         to: { transform: 'rotate(360deg)' }
//     }
// };

// export default CarManagement;













// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card, Form, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaTrashAlt } from 'react-icons/fa'; // Import Trash icon from react-icons

// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: '',
//         price: '',
//         car_name: '',
//         rating: '',
//         brand: '',
//         is_available: true
//     });
//     const [imageFile, setImageFile] = useState(null);  // State for storing the image file
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [alertMessage, setAlertMessage] = useState('');

//     // Assume token is stored in local storage
//     const token = localStorage.getItem('access');

//     useEffect(() => {
//         fetchCars();
//     }, [token]);

//     const fetchCars = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCars(response.data);
//         } catch (error) {
//             console.error("There was an error fetching the cars!", error);
//             setAlertMessage("There was an error fetching the cars.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleImageChange = (e) => {
//         setImageFile(e.target.files[0]); // Store the selected image file
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Show a confirmation alert before proceeding
//         const confirmation = window.confirm(`Are you sure you want to ${selectedCar ? 'edit' : 'add'} this car?`);
//         if (!confirmation) return;  // If user clicks "Cancel", return early

//         // Create a FormData object for file upload
//         const data = new FormData();
//         data.append('description', formData.description);
//         data.append('seat_type', formData.seat_type);
//         data.append('automatic', formData.automatic);
//         data.append('gps', formData.gps);
//         data.append('speed', formData.speed);
//         data.append('price', formData.price);
//         data.append('car_name', formData.car_name);
//         data.append('rating', formData.rating);
//         data.append('brand', formData.brand);
//         data.append('is_available', formData.is_available);
//         if (imageFile) {
//             data.append('img_url', imageFile); // Append the image file
//         }

//         const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
//         const method = selectedCar ? 'put' : 'post';

//         try {
//             await axios({
//                 method,
//                 url,
//                 data: data,
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             window.alert(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
//             resetForm();
//             await fetchCars();
//         } catch (error) {
//             console.error("There was an error submitting the car data!", error);
//             window.alert("There was an error submitting the car data.");
//         }
//     };

//     const handleDelete = async (carId) => {
//         // Show a confirmation alert before deleting
//         const confirmation = window.confirm('Are you sure you want to delete this car?');
//         if (!confirmation) return;  // If user clicks "Cancel", return early

//         try {
//             await axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCars(cars.filter(car => car.car_id !== carId));
//             window.alert("Car deleted successfully!");
//         } catch (error) {
//             console.error("There was an error deleting the car!", error);
//             window.alert("There was an error deleting the car.");
//         }
//     };

//     const handleEdit = (car) => {
//         setFormData({
//             description: car.description,
//             seat_type: car.seat_type,
//             automatic: car.automatic,
//             gps: car.gps,
//             speed: car.speed,
//             price: car.price,
//             car_name: car.car_name,
//             rating: car.rating,
//             brand: car.brand,
//             is_available: car.is_available
//         });
//         setSelectedCar(car);
//         setImageFile(null);  // Reset image file when editing
//     };

//     const resetForm = () => {
//         setFormData({
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: '',
//             price: '',
//             car_name: '',
//             rating: '',
//             brand: '',
//             is_available: true
//         });
//         setImageFile(null);  // Reset the image file after submission
//         setSelectedCar(null);
//     };

//     if (loading) return (
//         <div style={styles.container}>
//             <div style={styles.spinner}></div>
//             <p>Loading...</p>
//         </div>
//     );

//     return (
//         <Container className="my-4" style={styles.container}>
//             <h1 className="mb-4" style={styles.pageTitle}>Car Management</h1>
//             {alertMessage && <Alert variant="danger" style={styles.alert}>{alertMessage}</Alert>}
            
//             <Row className="mb-4">
//                 <Col md={12}>
//                     <Card>
//                         <Card.Header as="h5" style={styles.cardHeader}>
//                             {selectedCar ? 'Edit Car' : 'Add Car'}
//                         </Card.Header>
//                         <Card.Body>
//                             <div style={styles.formContainer}>
//                                 <Form onSubmit={handleSubmit}>
//                                     <Form.Group controlId="car_name">
//                                         <Form.Label>Car Name</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="car_name"
//                                             value={formData.car_name}
//                                             onChange={handleChange}
//                                             placeholder="Car Name"
//                                             required
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="brand">
//                                         <Form.Label>Brand</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="brand"
//                                             value={formData.brand}
//                                             onChange={handleChange}
//                                             placeholder="Brand"
//                                             required
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="description">
//                                         <Form.Label>Description</Form.Label>
//                                         <Form.Control
//                                             as="textarea"
//                                             name="description"
//                                             value={formData.description}
//                                             onChange={handleChange}
//                                             placeholder="Description"
//                                             required
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="seat_type">
//                                         <Form.Label>Seat Type</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="seat_type"
//                                             value={formData.seat_type}
//                                             onChange={handleChange}
//                                             placeholder="Seat Type"
//                                             required
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="speed">
//                                         <Form.Label>Speed (km/h)</Form.Label>
//                                         <Form.Control
//                                             type="number"
//                                             name="speed"
//                                             value={formData.speed}
//                                             onChange={handleChange}
//                                             placeholder="Speed"
//                                             required
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="price">
//                                         <Form.Label>Price</Form.Label>
//                                         <Form.Control
//                                             type="number"
//                                             name="price"
//                                             value={formData.price}
//                                             onChange={handleChange}
//                                             placeholder="Price"
//                                             step="0.01"
//                                             required
//                                         />
//                                     </Form.Group>
//                                         {/* {selectedCar && (
//                                             <Form.Group controlId="img_url">
//                                                 <Form.Label>Image Upload</Form.Label>
//                                                 <Form.Control
//                                                     type="file"
//                                                     name="img_url"
//                                                     onChange={handleImageChange}
//                                                     accept="image/*"  // Restrict file types to images
//                                                     enabled={selectedCar}  // Disable image upload in edit mode
//                                                 />
//                                             </Form.Group>
//                                         )} */}


                                     

//                                         <Form.Group controlId="img_url">
//                                     <Form.Label>Image Upload</Form.Label>
//                                     <Form.Control
//                                         type="file"
//                                         name="img_url"
//                                         onChange={handleImageChange}
//                                         accept="image/*"  // Restrict file types to images
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group controlId="rating">
//                                     <Form.Label>Rating</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         name="rating"
//                                         value={formData.rating}
//                                         onChange={handleChange}
//                                         placeholder="Rating"
//                                         step="0.1"
//                                         required
//                                     />
//                                 </Form.Group>

//                                     <Form.Group controlId="automatic">
//                                         <Form.Check
//                                             type="checkbox"
//                                             name="automatic"
//                                             checked={formData.automatic}
//                                             onChange={handleChange}
//                                             label="Automatic"
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="gps">
//                                         <Form.Check
//                                             type="checkbox"
//                                             name="gps"
//                                             checked={formData.gps}
//                                             onChange={handleChange}
//                                             label="GPS"
//                                         />
//                                     </Form.Group>
//                                     <Form.Group controlId="is_available">
//                                         <Form.Check
//                                             type="checkbox"
//                                             name="is_available"
//                                             checked={formData.is_available}
//                                             onChange={handleChange}
//                                             label="Available"
//                                         />
//                                     </Form.Group>
//                                     <Button variant="primary" type="submit">
//                                         {selectedCar ? 'Update Car' : 'Add Car'}
//                                     </Button>
//                                     <Button
//                                         variant="secondary"
//                                         className="ms-2"
//                                         onClick={resetForm}
//                                     >
//                                         Cancel
//                                     </Button>
//                                 </Form>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             <Row>
//                 {cars.map(car => (
//                     <Col md={4} key={car.car_id} className="mb-4">
//                         <Card>
//                             <Card.Img variant="top" src={car.img_url} style={styles.cardImage} />
//                             <Card.Body>
//                                 <Card.Title>{car.car_name}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">{car.brand}</Card.Subtitle>
//                                 <Card.Text>
//                                     <strong>Description:</strong> {car.description}<br />
//                                     <strong>Seat Type:</strong> {car.seat_type}<br />
//                                     <strong>Speed:</strong> {car.speed} km/h<br />
//                                     <strong>Price:</strong> ${car.price}<br />
//                                     <strong>Rating:</strong> {car.rating}<br />
//                                     <strong>Automatic:</strong> {car.automatic ? 'Yes' : 'No'}<br />
//                                     <strong>GPS:</strong> {car.gps ? 'Yes' : 'No'}<br />
//                                     <strong>Available:</strong> {car.is_available ? 'Yes' : 'No'}
//                                 </Card.Text>
//                                 <Button
//                                     variant="warning"
//                                     className="me-2"
//                                     onClick={() => handleEdit(car)}
//                                 >
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     variant="danger"
//                                     onClick={() => handleDelete(car.car_id)}
//                                 >
//                                     <FaTrashAlt /> Delete
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// const styles = {
//     container: {
//         padding: '20px',
//         margin: '20px auto',
//         maxWidth: '1200px',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center'
//     },
//     cardHeader: {
//         backgroundColor: '#000d6b',
//         color: '#ffffff',
//         borderRadius: '10px 10px 0 0'
//     },
//     cardImage: {
//         height: '200px',
//         objectFit: 'cover'
//     },
//     spinner: {
//         border: '8px solid #f3f3f3', /* Light grey */
//         borderTop: '8px solid #3498db', /* Blue */
//         borderRadius: '50%',
//         width: '50px',
//         height: '50px',
//         animation: 'spin 1s linear infinite',
//         margin: 'auto'
//     },
//     alert: {
//         padding: '10px',
//         backgroundColor: '#f8d7da',
//         color: '#721c24',
//         borderRadius: '5px',
//         border: '1px solid #f5c6cb',
//         marginBottom: '20px'
//     },
//     pageTitle: {
//         color: '#000d6b'
//     },
//     formContainer: {
//         overflowY: 'auto',
//         maxHeight: '500px',
//         padding: '20px'
//     },
//     '@keyframes spin': {
//         from: { transform: 'rotate(0deg)' },
//         to: { transform: 'rotate(360deg)' }
//     }
// };

// export default CarManagement;














// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card, Form, Container, Row, Col, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: '',
//         price: '',
//         car_name: '',
//         rating: '',
//         brand: '',
//         is_available: true
//     });
//     const [imageFile, setImageFile] = useState(null);
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [alertMessage, setAlertMessage] = useState('');
//     const [errors, setErrors] = useState({});  // State for storing validation errors

//     const token = localStorage.getItem('access');

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/cars/', {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(response => {
//             setCars(response.data);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error("There was an error fetching the cars!", error);
//             setLoading(false);
//         });
//     }, [token]);

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!formData.car_name.trim()) {
//             newErrors.car_name = 'Car Name is required';
//             isValid = false;
//         }
//         if (!formData.brand.trim()) {
//             newErrors.brand = 'Brand is required';
//             isValid = false;
//         }
//         if (!formData.description.trim()) {
//             newErrors.description = 'Description is required';
//             isValid = false;
//         }
//         if (!formData.seat_type.trim()) {
//             newErrors.seat_type = 'Seat Type is required';
//             isValid = false;
//         }
//         if (!formData.speed.trim() || isNaN(formData.speed) || formData.speed <= 0) {
//             newErrors.speed = 'Speed must be a positive number';
//             isValid = false;
//         }
//         if (!formData.price.trim() || isNaN(formData.price) || formData.price <= 0) {
//             newErrors.price = 'Price must be a positive number';
//             isValid = false;
//         }
//         if (!formData.rating.trim() || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) {
//             newErrors.rating = 'Rating must be a number between 0 and 5';
//             isValid = false;
//         }
//         if (!imageFile) {
//             newErrors.img_url = 'Image upload is required';
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleImageChange = (e) => {
//         setImageFile(e.target.files[0]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!validateForm()) return;  // If form is invalid, prevent form submission

//         const confirmation = window.confirm(`Are you sure you want to ${selectedCar ? 'edit' : 'add'} this car?`);
//         if (!confirmation) return;

//         const data = new FormData();
//         data.append('description', formData.description);
//         data.append('seat_type', formData.seat_type);
//         data.append('automatic', formData.automatic);
//         data.append('gps', formData.gps);
//         data.append('speed', formData.speed);
//         data.append('price', formData.price);
//         data.append('car_name', formData.car_name);
//         data.append('rating', formData.rating);
//         data.append('brand', formData.brand);
//         data.append('is_available', formData.is_available);
//         if (imageFile) {
//             data.append('img_url', imageFile);
//         }

//         const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
//         const method = selectedCar ? 'put' : 'post';

//         axios({
//             method,
//             url,
//             data: data,
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             window.alert(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
//             setFormData({
//                 description: '',
//                 seat_type: '',
//                 automatic: false,
//                 gps: false,
//                 speed: '',
//                 price: '',
//                 car_name: '',
//                 rating: '',
//                 brand: '',
//                 is_available: true
//             });
//             setImageFile(null);
//             setSelectedCar(null);
//             setErrors({});  // Clear validation errors
//             return axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//         })
//         .then(response => {
//             setCars(response.data);
//         })
//         .catch(error => {
//             console.error("There was an error submitting the car data!", error);
//             window.alert("There was an error submitting the car data.");
//         });
//     };

//     const handleDelete = (carId) => {
//         const confirmation = window.confirm('Are you sure you want to delete this car?');
//         if (!confirmation) return;

//         axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(() => {
//             setCars(cars.filter(car => car.car_id !== carId));
//             window.alert("Car deleted successfully!");
//         })
//         .catch(error => {
//             console.error("There was an error deleting the car!", error);
//             window.alert("There was an error deleting the car.");
//         });
//     };

//     const handleEdit = (car) => {
//         setFormData({
//             description: car.description,
//             seat_type: car.seat_type,
//             automatic: car.automatic,
//             gps: car.gps,
//             speed: car.speed,
//             price: car.price,
//             car_name: car.car_name,
//             rating: car.rating,
//             brand: car.brand,
//             is_available: car.is_available
//         });
//         setSelectedCar(car);
//         setImageFile(null);
//     };

//     if (loading) return <p>Loading...</p>;

//     return (
//         <Container className="my-4">
//             <h1 className="mb-4">Car Management</h1>
//             {alertMessage && <Alert variant="info" className="mb-4">{alertMessage}</Alert>}
            
//             <Row className="mb-4">
//                 <Col md={12}>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="car_name">
//                             <Form.Label>Car Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="car_name"
//                                 value={formData.car_name}
//                                 onChange={handleChange}
//                                 placeholder="Car Name"
//                                 isInvalid={!!errors.car_name}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.car_name}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="brand">
//                             <Form.Label>Brand</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="brand"
//                                 value={formData.brand}
//                                 onChange={handleChange}
//                                 placeholder="Brand"
//                                 isInvalid={!!errors.brand}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.brand}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="description">
//                             <Form.Label>Description</Form.Label>
//                             <Form.Control
//                                 as="textarea"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 placeholder="Description"
//                                 isInvalid={!!errors.description}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.description}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="seat_type">
//                             <Form.Label>Seat Type</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="seat_type"
//                                 value={formData.seat_type}
//                                 onChange={handleChange}
//                                 placeholder="Seat Type"
//                                 isInvalid={!!errors.seat_type}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.seat_type}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="speed">
//                             <Form.Label>Speed (km/h)</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="speed"
//                                 value={formData.speed}
//                                 onChange={handleChange}
//                                 placeholder="Speed"
//                                 isInvalid={!!errors.speed}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.speed}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="price">
//                             <Form.Label>Price</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                                 placeholder="Price"
//                                 step="0.01"
//                                 isInvalid={!!errors.price}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.price}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="img_url">
//                             <Form.Label>Image Upload</Form.Label>
//                             <Form.Control
//                                 type="file"
//                                 name="img_url"
//                                 onChange={handleImageChange}
//                                 accept="image/*"
//                                 isInvalid={!!errors.img_url}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.img_url}
//                             </Form.Control.Feedback>
//                         </Form.Group>

// {/* {!selectedCar && (  // Only show the image upload field if adding a new car
//                             <Form.Group controlId="img_url">
//                                 <Form.Label>Image Upload</Form.Label>
//                                 <Form.Control
//                                     type="file"
//                                     name="img_url"
//                                     onChange={handleImageChange}
//                                     accept="image/*"
//                                     required
//                                 />
//                             </Form.Group>
//                         )} */}
//                         <Form.Group controlId="rating">
//                             <Form.Label>Rating</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="rating"
//                                 value={formData.rating}
//                                 onChange={handleChange}
//                                 placeholder="Rating"
//                                 step="0.1"
//                                 isInvalid={!!errors.rating}
//                             />
//                             <Form.Control.Feedback type="invalid">
//                                 {errors.rating}
//                             </Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group controlId="automatic">
//                             <Form.Check
//                                 type="checkbox"
//                                 name="automatic"
//                                 checked={formData.automatic}
//                                 onChange={handleChange}
//                                 label="Automatic"
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="gps">
//                             <Form.Check
//                                 type="checkbox"
//                                 name="gps"
//                                 checked={formData.gps}
//                                 onChange={handleChange}
//                                 label="GPS"
//                             />
//                         </Form.Group>
//                         {/* <Form.Group controlId="is_available">
//                             <Form.Check
//                                 type="checkbox"
//                                 name="is_available"
//                                 checked={formData.is_available}
//                                 onChange={handleChange}
//                                 label="Available"
//                             />
//                         </Form.Group> */}
//                         <br />
//                         <Button variant="primary" type="submit">
//                             {selectedCar ? 'Update Car' : 'Add Car'}
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//             <br /><br />
//             <Row>
//                 {cars.map(car => (
//                     <Col xs={12} sm={6} md={4} lg={3} key={car.car_id} className="mb-4">
//                         <Card className="h-100">
//                             <Card.Img variant="top" src={car.img_url} />
//                             <Card.Body>
//                                 <Card.Title>{car.car_name}</Card.Title>
//                                 <Card.Text>
//                                     <strong>Brand:</strong> {car.brand}<br />
//                                     <strong>Description:</strong> {car.description}<br />
//                                     <strong>Seat Type:</strong> {car.seat_type}<br />
//                                     <strong>Automatic:</strong> {car.automatic ? "Yes" : "No"}<br />
//                                     <strong>GPS:</strong> {car.gps ? "Yes" : "No"}<br />
//                                     <strong>Speed:</strong> {car.speed} km/h<br />
//                                     <strong>Price:</strong> ${car.price}<br />
//                                     <strong>Rating:</strong> {car.rating}<br />
//                                     <strong>Available:</strong> {car.is_available ? "Yes" : "No"}
//                                 </Card.Text>
//                                 <Button
//                                     variant="primary"
//                                     onClick={() => handleEdit(car)}
//                                     className="me-2">
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     variant="danger"
//                                     onClick={() => handleDelete(car.car_id)}>
//                                     Delete
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// export default CarManagement;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Card, Form, Container, Row, Col, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import '../../styles/CarManagement.css'; // Import custom CSS file

// const CarManagement = () => {
//     const [cars, setCars] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [formData, setFormData] = useState({
//         description: '',
//         seat_type: '',
//         automatic: false,
//         gps: false,
//         speed: '',
//         price: '',
//         car_name: '',
//         rating: '',
//         brand: '',
//         is_available: true
//     });
//     const [imageFile, setImageFile] = useState(null);
//     const [selectedCar, setSelectedCar] = useState(null);
//     const [alertMessage, setAlertMessage] = useState('');
//     const [errors, setErrors] = useState({});  // State for storing validation errors

//     const token = localStorage.getItem('access');

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/cars/', {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(response => {
//             setCars(response.data);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error("There was an error fetching the cars!", error);
//             setLoading(false);
//         });
//     }, [token]);

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!formData.car_name.trim()) {
//             newErrors.car_name = 'Car Name is required';
//             isValid = false;
//         }
//         if (!formData.brand.trim()) {
//             newErrors.brand = 'Brand is required';
//             isValid = false;
//         }
//         if (!formData.description.trim()) {
//             newErrors.description = 'Description is required';
//             isValid = false;
//         }
//         if (!formData.seat_type.trim()) {
//             newErrors.seat_type = 'Seat Type is required';
//             isValid = false;
//         }
//         if (!formData.speed.trim() || isNaN(formData.speed) || formData.speed <= 0) {
//             newErrors.speed = 'Speed must be a positive number';
//             isValid = false;
//         }
//         if (!formData.price.trim() || isNaN(formData.price) || formData.price <= 0) {
//             newErrors.price = 'Price must be a positive number';
//             isValid = false;
//         }
//         if (!formData.rating.trim() || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 5) {
//             newErrors.rating = 'Rating must be a number between 0 and 5';
//             isValid = false;
//         }
//         if (!imageFile) {
//             newErrors.img_url = 'Image upload is required';
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleImageChange = (e) => {
//         setImageFile(e.target.files[0]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!validateForm()) return;  // If form is invalid, prevent form submission

//         const confirmation = window.confirm(`Are you sure you want to ${selectedCar ? 'edit' : 'add'} this car?`);
//         if (!confirmation) return;

//         const data = new FormData();
//         data.append('description', formData.description);
//         data.append('seat_type', formData.seat_type);
//         data.append('automatic', formData.automatic);
//         data.append('gps', formData.gps);
//         data.append('speed', formData.speed);
//         data.append('price', formData.price);
//         data.append('car_name', formData.car_name);
//         data.append('rating', formData.rating);
//         data.append('brand', formData.brand);
//         data.append('is_available', formData.is_available);
//         if (imageFile) {
//             data.append('img_url', imageFile);
//         }

//         const url = selectedCar ? `http://127.0.0.1:8000/api/cars/${selectedCar.car_id}/` : 'http://127.0.0.1:8000/api/cars/';
//         const method = selectedCar ? 'put' : 'post';

//         axios({
//             method,
//             url,
//             data: data,
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data'
//             }
//         })
//         .then(response => {
//             window.alert(`Car ${selectedCar ? 'updated' : 'added'} successfully!`);
//             setFormData({
//                 description: '',
//                 seat_type: '',
//                 automatic: false,
//                 gps: false,
//                 speed: '',
//                 price: '',
//                 car_name: '',
//                 rating: '',
//                 brand: '',
//                 is_available: true
//             });
//             setImageFile(null);
//             setSelectedCar(null);
//             setErrors({});  // Clear validation errors
//             return axios.get('http://127.0.0.1:8000/api/cars/', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//         })
//         .then(response => {
//             setCars(response.data);
//         })
//         .catch(error => {
//             console.error("There was an error submitting the car data!", error);
//             window.alert("There was an error submitting the car data.");
//         });
//     };

//     const handleDelete = (carId) => {
//         const confirmation = window.confirm('Are you sure you want to delete this car?');
//         if (!confirmation) return;

//         axios.delete(`http://127.0.0.1:8000/api/cars/${carId}/`, {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//         .then(() => {
//             setCars(cars.filter(car => car.car_id !== carId));
//             window.alert("Car deleted successfully!");
//         })
//         .catch(error => {
//             console.error("There was an error deleting the car!", error);
//             window.alert("There was an error deleting the car.");
//         });
//     };

//     const handleEdit = (car) => {
//         setFormData({
//             description: car.description,
//             seat_type: car.seat_type,
//             automatic: car.automatic,
//             gps: car.gps,
//             speed: car.speed,
//             price: car.price,
//             car_name: car.car_name,
//             rating: car.rating,
//             brand: car.brand,
//             is_available: car.is_available
//         });
//         setSelectedCar(car);
//         setImageFile(null);
//     };

//     if (loading) return <p>Loading...</p>;

//     return (
//         <Container className="my-4">
//             <h1 className="mb-4">Car Management</h1>
//             {alertMessage && <Alert variant="info" className="mb-4">{alertMessage}</Alert>}
            
//             <Row className="mb-4">
//     <Col md={12}>
//         <Card>
//             <Card.Header
//                 as="h5"
//                 style={{
//                     backgroundColor: '#000d6b',
//                     color: '#ffffff',
//                     borderRadius: '10px 10px 0 0',
//                 }}
//             >
//                 {selectedCar ? 'Update Car' : 'Add Car'}
//             </Card.Header>
//             <Card.Body
//                 style={{
//                     maxHeight: '500px', // Adjust height as needed
//                     overflowY: 'auto',  // Enable vertical scrolling
//                 }}
//             >
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="car_name" className="mb-3">
//                         <Form.Label>Car Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="car_name"
//                             value={formData.car_name}
//                             onChange={handleChange}
//                             placeholder="Car Name"
//                             isInvalid={!!errors.car_name}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.car_name}
//                         </Form.Control.Feedback>
//                     </Form.Group>
                    
//                     <Form.Group controlId="brand" className="mb-3">
//                         <Form.Label>Brand</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="brand"
//                             value={formData.brand}
//                             onChange={handleChange}
//                             placeholder="Brand"
//                             isInvalid={!!errors.brand}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.brand}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="description" className="mb-3">
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             name="description"
//                             value={formData.description}
//                             onChange={handleChange}
//                             placeholder="Description"
//                             isInvalid={!!errors.description}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.description}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="seat_type" className="mb-3">
//                         <Form.Label>Seat Type</Form.Label>
//                         <Form.Control
//                             type="text"
//                             name="seat_type"
//                             value={formData.seat_type}
//                             onChange={handleChange}
//                             placeholder="Seat Type"
//                             isInvalid={!!errors.seat_type}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.seat_type}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="automatic" className="mb-3">
//                         <Form.Check
//                             type="checkbox"
//                             name="automatic"
//                             checked={formData.automatic}
//                             onChange={handleChange}
//                             label="Automatic"
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="gps" className="mb-3">
//                         <Form.Check
//                             type="checkbox"
//                             name="gps"
//                             checked={formData.gps}
//                             onChange={handleChange}
//                             label="GPS"
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="speed" className="mb-3">
//                         <Form.Label>Speed (km/h)</Form.Label>
//                         <Form.Control
//                             type="number"
//                             name="speed"
//                             value={formData.speed}
//                             onChange={handleChange}
//                             placeholder="Speed"
//                             isInvalid={!!errors.speed}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.speed}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="price" className="mb-3">
//                         <Form.Label>Price</Form.Label>
//                         <Form.Control
//                             type="number"
//                             name="price"
//                             value={formData.price}
//                             onChange={handleChange}
//                             placeholder="Price"
//                             isInvalid={!!errors.price}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.price}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="rating" className="mb-3">
//                         <Form.Label>Rating (0-5)</Form.Label>
//                         <Form.Control
//                             type="number"
//                             name="rating"
//                             value={formData.rating}
//                             onChange={handleChange}
//                             placeholder="Rating"
//                             isInvalid={!!errors.rating}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.rating}
//                         </Form.Control.Feedback>
//                     </Form.Group>

//                     <Form.Group controlId="img_url" className="mb-3">
//                         <Form.Label>Image Upload</Form.Label>
//                         <Form.Control
//                             type="file"
//                             name="img_url"
//                             onChange={handleImageChange}
//                             isInvalid={!!errors.img_url}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                             {errors.img_url}
//                         </Form.Control.Feedback>
//                     </Form.Group>
// {/* 
//                     <Form.Group controlId="is_available" className="mb-3">
//                         <Form.Check
//                             type="checkbox"
//                             name="is_available"
//                             checked={formData.is_available}
//                             onChange={handleChange}
//                             label="Available"
//                         />
//                     </Form.Group> */}

//                     <Button
//                         type="submit"
//                         variant="primary"
//                         style={{
//                             backgroundColor: '#000d6b',
//                             borderColor: '#000d6b',
//                             display: 'block',
//                             marginTop: '1rem',
//                         }}
//                     >
//                         {selectedCar ? <FaEdit className="me-1" /> : <FaEdit className="me-1" />}
//                         {selectedCar ? 'Update Car' : 'Add Car'}
//                     </Button>
//                     <br/>
//                     <br/>
//                 </Form>
//             </Card.Body>
//         </Card>
//     </Col>
// </Row>

// <Row>
//     {cars.map(car => (
//         <Col md={4} key={car.car_id} className="mb-4">
//             <Card>
//                 <Card.Img variant="top" src={car.img_url || 'default-image-url'} />
//                 <Card.Body>
//                     <Card.Title>{car.car_name}</Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted">{car.brand}</Card.Subtitle>
//                     <Card.Text>
//                         {car.description}
//                         <br />
//                         <strong>Price:</strong> ${car.price}
//                         <br />
//                         <strong>Speed:</strong> {car.speed} km/h
//                         <br />
//                         <strong>Rating:</strong> {car.rating}/5
//                     </Card.Text>
//                     <Button
//                         variant="warning"
//                         className="me-2"
//                         onClick={() => handleEdit(car)}
//                     >
//                         Edit
//                     </Button>
//                     <Button
//                         variant="danger"
//                         onClick={() => handleDelete(car.car_id)}
//                     >
//                         Delete
//                     </Button>
//                     <br/>
//                     <br/>
//                 </Card.Body>
//             </Card>
//         </Col>
//     ))}
// </Row>

//         </Container>
//     );
// };

// export default CarManagement;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/carform.css'

// const CarForm = () => {
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

//     const [cars, setCars] = useState([]);
//     const [editingCar, setEditingCar] = useState(null);

//     useEffect(() => {
//         fetchCars();
//     }, []);

//     const fetchCars = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/cars/');
//             setCars(response.data);
//             console.log('Fetched cars:', response.data); // Debugging line
//         } catch (error) {
//             console.error('Error fetching cars:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         const newValue = type === 'checkbox' ? checked : value;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: newValue
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (editingCar) {
//                 await axios.put(`http://127.0.0.1:8000/api/cars/${editingCar.car_id}/`, formData);
//                 alert('Car updated successfully!');
//                 setEditingCar(null);
//             } else {
//                 await axios.post('http://127.0.0.1:8000/api/cars/', formData);
//                 alert('Car added successfully!');
//             }
//             resetForm();
//             fetchCars();
//         } catch (error) {
//             console.error('Error submitting car data:', error);
//         }
//     };

//     const handleEdit = (car) => {
//         setEditingCar(car);
//         setFormData(car);
//     };

//     const handleDelete = async (car_id) => {
//         if (car_id === undefined) {
//             console.error('ID is undefined, cannot delete');
//             return;
//         }

//         console.log('Attempting to delete car with ID:', car_id); // Debugging line

//         if (window.confirm('Are you sure you want to delete this car?')) {
//             try {
//                 const response = await fetch(`http://127.0.0.1:8000/api/cars/${car_id}/`, {
//                     method: 'DELETE',
//                 });

//                 if (response.ok) {
//                     alert('Car deleted successfully!');
//                     fetchCars(); // Refresh the list
//                 } else {
//                     alert('Failed to delete the car.');
//                 }
//             } catch (error) {
//                 console.error('Error deleting car:', error);
//                 alert('Error deleting car.');
//             }
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             car_name: '',
//             description: '',
//             seat_type: '',
//             automatic: false,
//             gps: false,
//             speed: 0,
//             price: 0.00,
//             img_url: '',
//             rating: 0.0,
//             brand: '',
//             is_available: true
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {/* Car Listings */}
//                 <div className="col-md-12 mb-5">
//                     <h2>Car Listings</h2>
//                     <div className="row">
//                         {cars.map(car => (
//                             <div className="col-md-4 mb-3" key={car.car_id}>
//                                 <div className="card dark-card">
//                                     <img src={car.img_url} className="card-img-top" alt={car.car_name} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{car.car_name}</h5>
//                                         <p className="card-text"><strong>Price:</strong> ${(parseFloat(car.price) || 0).toFixed(2)}</p>
//                                         <div className="btn-group">
//                                             <button
//                                                 className="btn btn-dark mb-3"
//                                                 onClick={() => handleEdit(car)}
//                                             >
//                                                 Update
//                                             </button>
//                                             <button
//                                                 className="btn btn-darkblue "
//                                                 onClick={() => handleDelete(car.car_id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Form for Adding/Updating Car */}
//                 <div className="col-md-12">
//                     <h2>{editingCar ? 'Update Car' : 'Add Car'}</h2>
//                     <form onSubmit={handleSubmit}>
//                         {/* Form fields */}
//                         {Object.entries(formData).map(([key, value]) => {
//                             if (key === 'automatic' || key === 'gps' || key === 'is_available') {
//                                 return (
//                                     <div className="form-check" key={key}>
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             name={key}
//                                             checked={value}
//                                             onChange={handleChange}
//                                         />
//                                         <label className="form-check-label">{key.replace('_', ' ').toUpperCase()}</label>
//                                     </div>
//                                 );
//                             }
//                             return (
//                                 <div className="form-group" key={key}>
//                                     <label htmlFor={key} className="form-label">
//                                         {key.replace('_', ' ').toUpperCase()}:
//                                     </label>
//                                     <input
//                                         type={typeof value === 'number' ? 'number' : 'text'}
//                                         className="form-control dark-border-input"
//                                         id={key}
//                                         name={key}
//                                         value={value}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             );
//                         })}
//                         <button type="submit" className="btn11 btn-primary mt-3">
//                             {editingCar ? 'Update Car' : 'Add Car'}
//                         </button>
//                         {editingCar && (
//                             <button
//                                 type="button"
//                                 className="btn11 btn-secondary mt-3 ml-2"
//                                 onClick={() => {
//                                     setEditingCar(null);
//                                     resetForm();
//                                 }}
//                             >
//                                 Cancel
//                             </button>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarForm;
