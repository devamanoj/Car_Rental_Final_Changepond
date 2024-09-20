// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DriverTable = () => {
//     const [drivers, setDrivers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchDrivers = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/driver/drivers/');
//                 setDrivers(response.data); // Adjust if necessary based on actual data structure
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDrivers();
//     }, []);

//     if (loading) return <p style={styles.message}>Loading...</p>;
//     if (error) return <p style={styles.message}>Error: {error.message}</p>;

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.header}>Driver List</h1>
//             <table style={styles.table}>
//                 <thead>
//                     <tr style={styles.tableHeader}>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>License</th>
//                         <th>Vehicle Model</th>
//                         <th>Vehicle Year</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {drivers.length > 0 ? (
//                         drivers.map(driver => (
//                             <tr key={driver.id} style={styles.tableRow}>
//                                 <td>{driver.name}</td>
//                                 <td>{driver.email}</td>
//                                 <td>{driver.phone}</td>
//                                 <td>{driver.license}</td>
//                                 <td>{driver.vehicle_model}</td>
//                                 <td>{driver.vehicle_year}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6" style={styles.noData}>No drivers found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         width: '80%',
//         margin: '0 auto',
//         padding: '20px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     header: {
//         textAlign: 'center',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//     },
//     tableHeader: {
//         backgroundColor: '#007bff',
//         color: '#fff',
//         textAlign: 'left',
//     },
//     tableRow: {
//         borderBottom: '1px solid #ddd',
//     },
//     message: {
//         textAlign: 'center',
//         color: '#333',
//         fontSize: '18px',
//         marginTop: '20px',
//     },
//     noData: {
//         textAlign: 'center',
//         fontStyle: 'italic',
//     },
// };

// export default DriverTable;

// import React, { useState, useEffect } from 'react';

// const DriverTable = () => {
//   const [drivers, setDrivers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     license: '',
//     vehicle_model: '',
//     vehicle_year: '',
//   });
//   const [editingDriver, setEditingDriver] = useState(null);

//   useEffect(() => {
//     fetchDrivers();
//   }, []);

//   const fetchDrivers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/driver/drivers/');
//       const data = await response.json();
//       setDrivers(data);
//     } catch (error) {
//       console.error('Error fetching drivers:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddDriver = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Driver added successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           license: '',
//           vehicle_model: '',
//           vehicle_year: '',
//         });
//         fetchDrivers(); // Refresh the list
//       } else {
//         alert('Failed to add driver.');
//       }
//     } catch (error) {
//       console.error('Error adding driver:', error);
//       alert('Error adding driver.');
//     }
//   };

//   const handleUpdateDriver = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${editingDriver.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Driver updated successfully!');
//         setEditingDriver(null);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           license: '',
//           vehicle_model: '',
//           vehicle_year: '',
//         });
//         fetchDrivers(); // Refresh the list
//       } else {
//         alert('Failed to update driver.');
//       }
//     } catch (error) {
//       console.error('Error updating driver:', error);
//       alert('Error updating driver.');
//     }
//   };

//   const handleDeleteDriver = async (id) => {
//     if (window.confirm('Are you sure you want to delete this driver?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${id}/`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           alert('Driver deleted successfully!');
//           fetchDrivers(); // Refresh the list
//         } else {
//           alert('Failed to delete the driver.');
//         }
//       } catch (error) {
//         console.error('Error deleting driver:', error);
//         alert('Error deleting driver.');
//       }
//     }
//   };

//   const handleEditClick = (driver) => {
//     setEditingDriver(driver);
//     setFormData({
//       name: driver.name,
//       email: driver.email,
//       phone: driver.phone,
//       license: driver.license,
//       vehicle_model: driver.vehicle_model,
//       vehicle_year: driver.vehicle_year,
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Driver List</h2>

//       {/* Driver Table */}
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>License</th>
//             <th>Vehicle Model</th>
//             <th>Vehicle Year</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {drivers.map(driver => (
//             <tr key={driver.id}>
//               <td>{driver.name}</td>
//               <td>{driver.email}</td>
//               <td>{driver.phone}</td>
//               <td>{driver.license}</td>
//               <td>{driver.vehicle_model}</td>
//               <td>{driver.vehicle_year}</td>
//               <td>
//                 <button
//                   className="btn btn-danger me-2"
//                   onClick={() => handleDeleteDriver(driver.id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => handleEditClick(driver)}
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Form for Adding/Updating Driver */}
//       <div className="mt-5">
//         <h3>{editingDriver ? 'Update Driver' : 'Add Driver'}</h3>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter driver's full name"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter driver's email"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="phone" className="form-label">Phone Number</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter driver's phone number"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="license" className="form-label">Driver's License Number</label>
//             <input
//               type="text"
//               className="form-control"
//               id="license"
//               name="license"
//               value={formData.license}
//               onChange={handleChange}
//               placeholder="Enter driver's license number"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="vehicle_model" className="form-label">Vehicle Model</label>
//             <input
//               type="text"
//               className="form-control"
//               id="vehicle_model"
//               name="vehicle_model"
//               value={formData.vehicle_model}
//               onChange={handleChange}
//               placeholder="Enter vehicle model"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="vehicle_year" className="form-label">Vehicle Year</label>
//             <input
//               type="number"
//               className="form-control"
//               id="vehicle_year"
//               name="vehicle_year"
//               value={formData.vehicle_year}
//               onChange={handleChange}
//               placeholder="Enter vehicle year"
//               required
//             />
//           </div>

//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={editingDriver ? handleUpdateDriver : handleAddDriver}
//           >
//             {editingDriver ? 'Update Driver' : 'Add Driver'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DriverTable;



// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons from react-icons
// import { Button, Table, Form } from 'react-bootstrap'; // Import Bootstrap components

// const DriverTable = () => {
//   const [drivers, setDrivers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     license: '',
//     vehicle_model: '',
//     vehicle_year: '',
//   });
//   const [editingDriver, setEditingDriver] = useState(null);

//   useEffect(() => {
//     fetchDrivers();
//   }, []);

//   const fetchDrivers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/driver/drivers/');
//       const data = await response.json();
//       setDrivers(data);
//     } catch (error) {
//       console.error('Error fetching drivers:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleAddDriver = async () => {
//   //   try {
//   //     const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     if (response.ok) {
//   //       alert('Driver added successfully!');
//   //       setFormData({
//   //         id:'',
//   //         name: '',
//   //         email: '',
//   //         phone: '',
//   //         license: '',
//   //         vehicle_model: '',
//   //         vehicle_year: '',
//   //       });
//   //       fetchDrivers(); // Refresh the list
//   //     } else {
//   //       alert('Failed to add driver.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding driver:', error);
//   //     alert('Error adding driver.');
//   //   }
//   // };
//   const handleAddDriver = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         alert('Driver added successfully!');
//         setFormData({
//           id: '',
//           name: '',
//           email: '',
//           phone: '',
//           license: '',
//           vehicle_model: '',
//           vehicle_year: '',
//         });
//         fetchDrivers(); // Refresh the list
//       } else {
//         const errorData = await response.json(); // Parse the error response
//         let errorMessage = 'Failed to add driver:\n';
  
//         // Iterate over the error data keys and append the error messages to the string
//         for (let key in errorData) {
//           if (errorData[key] instanceof Array) {
//             errorMessage += `${key}: ${errorData[key].join(', ')}\n`;
//           }
//         }
  
//         alert(errorMessage); // Display the formatted error message in alert
//       }
//     } catch (error) {
//       console.error('Error adding driver:', error);
//       alert(`Error adding driver: ${error.message}`);
//     }
//   };
  

//   const handleUpdateDriver = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${editingDriver.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Driver updated successfully!');
//         setEditingDriver(null);
//         setFormData({
//           id:'',
//           name: '',
//           email: '',
//           phone: '',
//           license: '',
//           vehicle_model: '',
//           vehicle_year: '',
//         });
//         fetchDrivers(); // Refresh the list
//       } else {
//         alert('Failed to update driver.');
//       }
//     } catch (error) {
//       console.error('Error updating driver:', error);
//       alert('Error updating driver.');
//     }
//   };

//   const handleDeleteDriver = async (id) => {
//     if (window.confirm('Are you sure you want to delete this driver?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${id}/`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           alert('Driver deleted successfully!');
//           fetchDrivers(); // Refresh the list
//         } else {
//           alert('Failed to delete the driver.');
//         }
//       } catch (error) {
//         console.error('Error deleting driver:', error);
//         alert('Error deleting driver.');
//       }
//     }
//   };

//   const handleEditClick = (driver) => {
//     setEditingDriver(driver);
//     setFormData({
//       id: driver.id,
//       name: driver.name,
//       email: driver.email,
//       phone: driver.phone,
//       license: driver.license,
//       vehicle_model: driver.vehicle_model,
//       vehicle_year: driver.vehicle_year,
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Driver List</h2>

//       {/* Driver Table */}
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>License</th>
//               <th>Vehicle Model</th>
//               <th>Vehicle Year</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {drivers.map(driver => (
//               <tr key={driver.id}>
//                 <td>{driver.id}</td>
//                 <td>{driver.name}</td>
//                 <td>{driver.email}</td>
//                 <td>{driver.phone}</td>
//                 <td>{driver.license}</td>
//                 <td>{driver.vehicle_model}</td>
//                 <td>{driver.vehicle_year}</td>
//                 <td>
//                   <Button
//                     variant="danger"
//                     className="me-2"
//                     onClick={() => handleDeleteDriver(driver.id)}
//                   >
//                     <FaTrashAlt className="me-1" /> Delete
//                   </Button>
//                   <Button
//                     variant="warning"
//                     onClick={() => handleEditClick(driver)}
//                   >
//                     <FaEdit className="me-1" /> Edit
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* Form for Adding/Updating Driver */}
//       <div className="mt-5">
//         <h3>{editingDriver ? 'Update Driver' : 'Add Driver'}</h3>
        
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="name">Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter driver's full name"
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="email">Email</Form.Label>
//             <Form.Control
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter driver's email"
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="phone">Phone Number</Form.Label>
//             <Form.Control
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Enter driver's phone number"
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="license">Driver's License Number</Form.Label>
//             <Form.Control
//               type="text"
//               id="license"
//               name="license"
//               value={formData.license}
//               onChange={handleChange}
//               placeholder="Enter driver's license number"
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="vehicle_model">Vehicle Model</Form.Label>
//             <Form.Control
//               type="text"
//               id="vehicle_model"
//               name="vehicle_model"
//               value={formData.vehicle_model}
//               onChange={handleChange}
//               placeholder="Enter vehicle model"
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="vehicle_year">Vehicle Year</Form.Label>
//             <Form.Control
//               type="number"
//               id="vehicle_year"
//               name="vehicle_year"
//               value={formData.vehicle_year}
//               onChange={handleChange}
//               placeholder="Enter vehicle year"
//               required
//             />
//           </Form.Group>

//           <Button
//             variant="primary"
//             onClick={editingDriver ? handleUpdateDriver : handleAddDriver}
//           >
//             {editingDriver ? <FaEdit className="me-1" /> : <FaEdit className="me-1" />}
//             {editingDriver ? 'Update Driver' : 'Add Driver'}
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default DriverTable;



// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons from react-icons
// import { Button, Table, Form } from 'react-bootstrap'; // Import Bootstrap components

// const DriverTable = () => {
//   const [drivers, setDrivers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     license: '',
//     vehicle_model: '',
//     vehicle_year: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [editingDriver, setEditingDriver] = useState(null);

//   useEffect(() => {
//     fetchDrivers();
//   }, []);

//   const fetchDrivers = async () => {
//     const token = localStorage.getItem('access');
//     try {
//       const response = await fetch('http://127.0.0.1:8000/driver/drivers/',{
//         headers: {
//           'Authorization': `Bearer ${token}`,  // Include token in the request header
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//       setDrivers(data);
//     } catch (error) {
//       console.error('Error fetching drivers:', error);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const { name, email, phone, license, vehicle_model, vehicle_year } = formData;

//     if (!name) newErrors.name = 'Name is required.';
//     if (!email) newErrors.email = 'Email is required.';
//     else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
//     if (!phone) newErrors.phone = 'Phone number is required.';
//     if (!license) newErrors.license = 'License number is required.';
//     if (!vehicle_model) newErrors.vehicle_model = 'Vehicle model is required.';
//     if (!vehicle_year) newErrors.vehicle_year = 'Vehicle year is required.';
//     else if (isNaN(vehicle_year) || vehicle_year < 1900 || vehicle_year > new Date().getFullYear()) {
//       newErrors.vehicle_year = 'Vehicle year is invalid.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleAddDriver = async () => {
//     if (!validateForm()) return;
  
//     const token = localStorage.getItem('access'); // Retrieve the access token
  
//     try {
//       const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include the token in the headers
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         alert('Driver added successfully!');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           license: '',
//           vehicle_model: '',
//           vehicle_year: '',
//         });
//         fetchDrivers(); // Refresh the list
//       } else {
//         const errorData = await response.json();
//         let errorMessage = 'Failed to add driver:\n';
//         for (let key in errorData) {
//           if (errorData[key] instanceof Array) {
//             errorMessage += `${key}: ${errorData[key].join(', ')}\n`;
//           }
//         }
//         alert(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error adding driver:', error);
//       alert(`Error adding driver: ${error.message}`);
//     }
//   };

  
//   const handleUpdateDriver = async () => {
//     if (!validateForm()) return;
  
//     const token = localStorage.getItem('access'); // Retrieve the access token
  
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${editingDriver.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include the token in the headers
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         alert('Driver updated successfully!');
//         setEditingDriver(null);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           license: '',
//           vehicle_model: '',
//           vehicle_year: '',
//         });
//         fetchDrivers(); // Refresh the list
//       } else {
//         alert('Failed to update driver.');
//       }
//     } catch (error) {
//       console.error('Error updating driver:', error);
//       alert('Error updating driver.');
//     }
//   };

  
//   const handleDeleteDriver = async (id) => {
//     const token = localStorage.getItem('access'); // Retrieve the access token
  
//     if (window.confirm('Are you sure you want to delete this driver?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`, // Include the token in the headers
//           },
//         });
  
//         if (response.ok) {
//           alert('Driver deleted successfully!');
//           fetchDrivers(); // Refresh the list
//         } else {
//           alert('Failed to delete the driver.');
//         }
//       } catch (error) {
//         console.error('Error deleting driver:', error);
//         alert('Error deleting driver.');
//       }
//     }
//   };
  
//   const handleEditClick = (driver) => {
//     setEditingDriver(driver);
//     setFormData({
//       id: driver.id,
//       name: driver.name,
//       email: driver.email,
//       phone: driver.phone,
//       license: driver.license,
//       vehicle_model: driver.vehicle_model,
//       vehicle_year: driver.vehicle_year,
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Driver List</h2>

//       {/* Driver Table */}
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>License</th>
//               <th>Vehicle Model</th>
//               <th>Vehicle Year</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {drivers.map(driver => (
//               <tr key={driver.id}>
//                 <td>{driver.id}</td>
//                 <td>{driver.name}</td>
//                 <td>{driver.email}</td>
//                 <td>{driver.phone}</td>
//                 <td>{driver.license}</td>
//                 <td>{driver.vehicle_model}</td>
//                 <td>{driver.vehicle_year}</td>
//                 <td>
//                   <Button
//                     variant="danger"
//                     className="me-2"
//                     onClick={() => handleDeleteDriver(driver.id)}
//                   >
//                     <FaTrashAlt className="me-1" /> Delete
//                   </Button>
//                   <Button
//                     variant="warning"
//                     onClick={() => handleEditClick(driver)}
//                   >
//                     <FaEdit className="me-1" /> Edit
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* Form for Adding/Updating Driver */}
//       <div className="mt-5">
//         <h3>{editingDriver ? 'Update Driver' : 'Add Driver'}</h3>
        
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="name">Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter driver's full name"
//               isInvalid={!!errors.name}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.name}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="email">Email</Form.Label>
//             <Form.Control
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter driver's email"
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//   <Form.Label htmlFor="phone">Phone Number</Form.Label>
//   <Form.Control
//     type="tel"
//     id="phone"
//     name="phone"
//     value={formData.phone}
//     onChange={(e) => {
//       const phone = e.target.value;

//       // Set the form data
//       setFormData((prevData) => ({
//         ...prevData,
//         phone: phone,
//       }));

//       // Inline validation logic
//       const phoneRegex = /^[0-9]{10,15}$/; // Validates 10-15 digits

//       if (!phoneRegex.test(phone)) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           phone: 'Please enter a valid phone number (10-15 digits).',
//         }));
//       } else {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           phone: '',
//         }));
//       }
//     }}
//     placeholder="Enter driver's phone number"
//     isInvalid={!!errors.phone}
//   />
//   <Form.Control.Feedback type="invalid">
//     {errors.phone}
//   </Form.Control.Feedback>
// </Form.Group>


//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="license">Driver's License Number</Form.Label>
//             <Form.Control
//               type="text"
//               id="license"
//               name="license"
//               value={formData.license}
//               onChange={handleChange}
//               placeholder="Enter driver's license number"
//               isInvalid={!!errors.license}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.license}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="vehicle_model">Vehicle Model</Form.Label>
//             <Form.Control
//               type="text"
//               id="vehicle_model"
//               name="vehicle_model"
//               value={formData.vehicle_model}
//               onChange={handleChange}
//               placeholder="Enter vehicle model"
//               isInvalid={!!errors.vehicle_model}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.vehicle_model}
//             </Form.Control.Feedback>
//           </Form.Group>

//                 <Form.Group className="mb-3">
//             <Form.Label htmlFor="vehicle_year">Vehicle Year</Form.Label>
//             <Form.Control
//               type="number"
//               id="vehicle_year"
//               name="vehicle_year"
//               value={formData.vehicle_year}
//               onChange={(e) => {
//                 const year = parseInt(e.target.value, 10);
//                 const currentYear = new Date().getFullYear();

//                 setFormData((prevData) => ({
//                   ...prevData,
//                   vehicle_year: e.target.value,
//                 }));

//                 // Inline validation logic
//                 if (isNaN(year) || year < 1900 || year > currentYear) {
//                   setErrors((prevErrors) => ({
//                     ...prevErrors,
//                     vehicle_year: `Please enter a valid year between 1900 and ${currentYear}`,
//                   }));
//                 } else {
//                   setErrors((prevErrors) => ({
//                     ...prevErrors,
//                     vehicle_year: '',
//                   }));
//                 }
//               }}
//               placeholder="Enter vehicle year"
//               isInvalid={!!errors.vehicle_year}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.vehicle_year}
//             </Form.Control.Feedback>
//       </Form.Group>


//           <Button
//             variant="primary"
//             onClick={editingDriver ? handleUpdateDriver : handleAddDriver}
//           >
//             {editingDriver ? <FaEdit className="me-1" /> : <FaEdit className="me-1" />}
//             {editingDriver ? 'Update Driver' : 'Add Driver'}
//           </Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default DriverTable;


import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons from react-icons
import { Button, Table, Form, Card } from 'react-bootstrap'; // Import Bootstrap components

const DriverTable = () => {
  const [drivers, setDrivers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license: '',
    vehicle_model: '',
    vehicle_year: '',
  });
  const [errors, setErrors] = useState({});
  const [editingDriver, setEditingDriver] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    const token = localStorage.getItem('access');
    try {
      const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in the request header
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, license, vehicle_model, vehicle_year } = formData;

    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
    if (!phone) newErrors.phone = 'Phone number is required.';
    if (!license) newErrors.license = 'License number is required.';
    if (!vehicle_model) newErrors.vehicle_model = 'Vehicle model is required.';
    if (!vehicle_year) newErrors.vehicle_year = 'Vehicle year is required.';
    else if (isNaN(vehicle_year) || vehicle_year < 1900 || vehicle_year > new Date().getFullYear()) {
      newErrors.vehicle_year = 'Vehicle year is invalid.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddDriver = async () => {
    if (!validateForm()) return;

    const token = localStorage.getItem('access'); // Retrieve the access token

    try {
      const response = await fetch('http://127.0.0.1:8000/driver/drivers/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Driver added successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          license: '',
          vehicle_model: '',
          vehicle_year: '',
        });
        fetchDrivers(); // Refresh the list
      } else {
        const errorData = await response.json();
        let errorMessage = 'Failed to add driver:\n';
        for (let key in errorData) {
          if (errorData[key] instanceof Array) {
            errorMessage += `${key}: ${errorData[key].join(', ')}\n`;
          }
        }
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error adding driver:', error);
      alert(`Error adding driver: ${error.message}`);
    }
  };

  const handleUpdateDriver = async () => {
    if (!validateForm()) return;

    const token = localStorage.getItem('access'); // Retrieve the access token

    try {
      const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${editingDriver.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Driver updated successfully!');
        setEditingDriver(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          license: '',
          vehicle_model: '',
          vehicle_year: '',
        });
        fetchDrivers(); // Refresh the list
      } else {
        alert('Failed to update driver.');
      }
    } catch (error) {
      console.error('Error updating driver:', error);
      alert('Error updating driver.');
    }
  };

  const handleDeleteDriver = async (id) => {
    const token = localStorage.getItem('access'); // Retrieve the access token

    if (window.confirm('Are you sure you want to delete this driver?')) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/driver/drivers/${id}/`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the headers
          },
        });

        if (response.ok) {
          alert('Driver deleted successfully!');
          fetchDrivers(); // Refresh the list
        } else {
          alert('Failed to delete the driver.');
        }
      } catch (error) {
        console.error('Error deleting driver:', error);
        alert('Error deleting driver.');
      }
    }
  };

  const handleEditClick = (driver) => {
    setEditingDriver(driver);
    setFormData({
      id: driver.id,
      name: driver.name,
      email: driver.email,
      phone: driver.phone,
      license: driver.license,
      vehicle_model: driver.vehicle_model,
      vehicle_year: driver.vehicle_year,
    });
  };

  return (
    <div className="container mt-5">
      {/* Driver Table */}
      <Card>
        <Card.Header as="h5" style={{ backgroundColor: '#000d6b', color: '#ffffff', borderRadius: '10px 10px 0 0' }}>
          Driver List
        </Card.Header>
        <Card.Body>
          <div className="table-responsive">
            <Table striped bordered hover style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>License</th>
                  <th>Vehicle Model</th>
                  <th>Vehicle Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map(driver => (
                  <tr key={driver.id}>
                    <td>{driver.id}</td>
                    <td>{driver.name}</td>
                    <td>{driver.email}</td>
                    <td>{driver.phone}</td>
                    <td>{driver.license}</td>
                    <td>{driver.vehicle_model}</td>
                    <td>{driver.vehicle_year}</td>
                    <td>
                    <Button
                      variant="danger"
                      className="me-2"
                      onClick={() => handleDeleteDriver(driver.id)}
                      style={{ backgroundColor: '#000d6b', borderColor: '#000d6b' }} // Button color
                    >
                      <FaTrashAlt className="me-1" /> Delete
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleEditClick(driver)}
                      className="no-hover-effect"
                      style={{ }} // Button color
                    >
                      <FaEdit className="me-1" /> Edit
                    </Button>


                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      {/* Form for Adding/Updating Driver */}
      <div className="mt-5">
      <Card>
  <Card.Header
    as="h5"
    style={{
      backgroundColor: '#000d6b',
      color: '#ffffff',
      borderRadius: '10px 10px 0 0',
    }}
  >
    {editingDriver ? 'Update Driver' : 'Add Driver'}
  </Card.Header>
  <Card.Body
    style={{
      maxHeight: '500px', // Adjust height as needed
      overflowY: 'auto',  // Enable vertical scrolling
    }}
  >
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Full Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter driver's full name"
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter driver's email"
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="phone">Phone Number</Form.Label>
        <Form.Control
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => {
            const phone = e.target.value;
            setFormData((prevData) => ({
              ...prevData,
              phone: phone,
            }));
            const phoneRegex = /^[0-9]{10,15}$/;
            if (!phoneRegex.test(phone)) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                phone: 'Please enter a valid phone number (10-15 digits).',
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                phone: '',
              }));
            }
          }}
          placeholder="Enter driver's phone number"
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="license">Driver's License Number</Form.Label>
        <Form.Control
          type="text"
          id="license"
          name="license"
          value={formData.license}
          onChange={handleChange}
          placeholder="Enter driver's license number"
          isInvalid={!!errors.license}
        />
        <Form.Control.Feedback type="invalid">
          {errors.license}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="vehicle_model">Vehicle Model</Form.Label>
        <Form.Control
          type="text"
          id="vehicle_model"
          name="vehicle_model"
          value={formData.vehicle_model}
          onChange={handleChange}
          placeholder="Enter vehicle model"
          isInvalid={!!errors.vehicle_model}
        />
        <Form.Control.Feedback type="invalid">
          {errors.vehicle_model}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="vehicle_year">Vehicle Year</Form.Label>
        <Form.Control
          type="number"
          id="vehicle_year"
          name="vehicle_year"
          value={formData.vehicle_year}
          onChange={(e) => {
            const year = parseInt(e.target.value, 10);
            const currentYear = new Date().getFullYear();
            setFormData((prevData) => ({
              ...prevData,
              vehicle_year: e.target.value,
            }));
            if (isNaN(year) || year < 1900 || year > currentYear) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                vehicle_year: `Please enter a valid year between 1900 and ${currentYear}`,
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                vehicle_year: '',
              }));
            }
          }}
          placeholder="Enter vehicle year"
          isInvalid={!!errors.vehicle_year}
        />
        <Form.Control.Feedback type="invalid">
          {errors.vehicle_year}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        variant="primary"
        onClick={editingDriver ? handleUpdateDriver : handleAddDriver}
        style={{
          backgroundColor: '#000d6b',
          borderColor: '#000d6b',
          display: 'block',
          marginTop: '1rem',
        }}
      >
        {editingDriver ? <FaEdit className="me-1" /> : <FaEdit className="me-1" />}
        {editingDriver ? 'Update Driver' : 'Add Driver'}
        <br/>
      </Button>
      <br/>
    
      
    </Form>
  </Card.Body>
</Card>



      </div>
    </div>
  );
};

export default DriverTable;
