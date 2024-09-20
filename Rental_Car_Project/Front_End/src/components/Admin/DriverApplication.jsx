
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons from react-icons
// import { Button, Table, Form } from 'react-bootstrap'; // Import Bootstrap components

// const DriverApplication = () => {
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
//       const response = await fetch('http://127.0.0.1:8000/driver/userdrivers/',{
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


// //   const handleAddDriver = async () => {
// //     if (!validateForm()) return;
  
// //     const token = localStorage.getItem('access'); // Retrieve the access token
  
// //     try {
// //       const response = await fetch('http://127.0.0.1:8000/driver/userdrivers/', {
// //         method: 'POST',
// //         headers: {
// //           'Authorization': `Bearer ${token}`, // Include the token in the headers
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });
  
// //       if (response.ok) {
// //         alert('Driver added successfully!');
// //         setFormData({
// //           name: '',
// //           email: '',
// //           phone: '',
// //           license: '',
// //           vehicle_model: '',
// //           vehicle_year: '',
// //         });
// //         fetchDrivers(); // Refresh the list
// //       } else {
// //         const errorData = await response.json();
// //         let errorMessage = 'Failed to add driver:\n';
// //         for (let key in errorData) {
// //           if (errorData[key] instanceof Array) {
// //             errorMessage += `${key}: ${errorData[key].join(', ')}\n`;
// //           }
// //         }
// //         alert(errorMessage);
// //       }
// //     } catch (error) {
// //       console.error('Error adding driver:', error);
// //       alert(`Error adding driver: ${error.message}`);
// //     }
// //   };

  
// //   const handleUpdateDriver = async () => {
// //     if (!validateForm()) return;
  
// //     const token = localStorage.getItem('access'); // Retrieve the access token
  
// //     try {
// //       const response = await fetch(`http://127.0.0.1:8000/driver/userdrivers/${editingDriver.id}/`, {
// //         method: 'PUT',
// //         headers: {
// //           'Authorization': `Bearer ${token}`, // Include the token in the headers
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });
  
// //       if (response.ok) {
// //         alert('Driver updated successfully!');
// //         setEditingDriver(null);
// //         setFormData({
// //           name: '',
// //           email: '',
// //           phone: '',
// //           license: '',
// //           vehicle_model: '',
// //           vehicle_year: '',
// //         });
// //         fetchDrivers(); // Refresh the list
// //       } else {
// //         alert('Failed to update driver.');
// //       }
// //     } catch (error) {
// //       console.error('Error updating driver:', error);
// //       alert('Error updating driver.');
// //     }
// //   };

  
//   const handleDeleteDriver = async (id) => {
//     const token = localStorage.getItem('access'); // Retrieve the access token
  
//     if (window.confirm('Are you sure you want to delete this driver?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/driver/userdrivers/${id}/`, {
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
//       <h2 className="mb-4">Driver Job Application List</h2>

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
//                   {/* <Button
//                     variant="warning"
//                     onClick={() => handleEditClick(driver)}
//                   >
//                     <FaEdit className="me-1" /> Edit
//                   </Button> */}
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


//           {/* <Button
//             variant="primary"
//             onClick={editingDriver ? handleUpdateDriver : handleAddDriver}
//           >
//             {editingDriver ? <FaEdit className="me-1" /> : <FaEdit className="me-1" />}
//             {editingDriver ? 'Update Driver' : 'Add Driver'}
//           </Button> */}
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default DriverApplication;



import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Import Trash icon from react-icons
import { Spinner, Card, Button } from 'react-bootstrap'; // Import Bootstrap components

const DriverApplication = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    const token = localStorage.getItem('access'); // Retrieve token from localStorage

    if (!token) {
      setError('No token found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/driver/userdrivers/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the headers
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch drivers');
      }

      const result = await response.json();
      setDrivers(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDriver = async (id) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      const token = localStorage.getItem('access'); // Retrieve token from localStorage

      if (!token) {
        alert('No token found. Please log in.');
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/driver/userdrivers/${id}/`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`, // Include token for DELETE request
          }
        });

        if (response.ok) {
          alert('Driver deleted successfully!');
          fetchDrivers(); // Refresh the driver list after deletion
        } else {
          const errorData = await response.json();
          console.error('Failed to delete driver:', errorData);
          alert('Failed to delete the driver.');
        }
      } catch (error) {
        console.error('Error deleting driver:', error);
        alert('Error deleting driver.');
      }
    }
  };

  if (loading) return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );

  if (error) return (
    <div style={styles.container}>
      <div style={styles.alert}>
        <strong>Error:</strong> {error}
      </div>
    </div>
  );

  if (!Array.isArray(drivers) || drivers.length === 0) return <p>No drivers available.</p>;

  return (
    <div style={styles.container}>
      <Card>
        <Card.Header as="h5" style={styles.cardHeader}>
          Driver Job Application List
        </Card.Header>
        <Card.Body>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.tableCell}>ID</th>
                <th style={styles.tableCell}>Name</th>
                <th style={styles.tableCell}>Email</th>
                <th style={styles.tableCell}>Phone</th>
                <th style={styles.tableCell}>License</th>
                <th style={styles.tableCell}>Vehicle Model</th>
                <th style={styles.tableCell}>Vehicle Year</th>
                <th style={styles.tableCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map(driver => (
                <tr key={driver.id} style={styles.tableRow}>
                  <td style={styles.tableCell}>{driver.id}</td>
                  <td style={styles.tableCell}>{driver.name}</td>
                  <td style={styles.tableCell}>{driver.email}</td>
                  <td style={styles.tableCell}>{driver.phone}</td>
                  <td style={styles.tableCell}>{driver.license}</td>
                  <td style={styles.tableCell}>{driver.vehicle_model}</td>
                  <td style={styles.tableCell}>{driver.vehicle_year}</td>
                  <td style={styles.tableCell}>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteDriver(driver.id)}
                      style={styles.deleteButton}
                    >
                      <FaTrashAlt /> Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '20px auto',
    maxWidth: '1200px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  cardHeader: {
    backgroundColor: '#000d6b',
    color: '#ffffff',
    borderRadius: '10px 10px 0 0'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  },
  tableHeader: {
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    borderBottom: '2px solid #ddd'
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  },
  tableRow: {
    backgroundColor: '#fff'
  },
  spinner: {
    border: '8px solid #f3f3f3', /* Light grey */
    borderTop: '8px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    margin: 'auto'
  },
  alert: {
    padding: '10px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: '5px',
    border: '1px solid #f5c6cb',
    marginBottom: '20px'
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
};

export default DriverApplication;
