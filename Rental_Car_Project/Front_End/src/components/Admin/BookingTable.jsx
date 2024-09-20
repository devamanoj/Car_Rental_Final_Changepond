// import React, { useEffect, useState } from 'react';

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/cars/bookings/');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setBookings(result.data || []);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   if (loading) return (
//     <div style={styles.container}>
//       <div style={styles.spinner}></div>
//       <p>Loading...</p>
//     </div>
//   );

//   if (error) return (
//     <div style={styles.container}>
//       <div style={styles.alert}>
//         <strong>Error:</strong> {error}
//       </div>
//     </div>
//   );

//   if (!Array.isArray(bookings)) return <p>No bookings available.</p>;

//   return (
//     <div style={styles.container}>
//       <h2>Bookings</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.tableHeader}>
//             <th style={styles.tableCell}>Booking ID</th>
//             <th style={styles.tableCell}>User</th>
//             <th style={styles.tableCell}>Car</th>
//             <th style={styles.tableCell}>Booking Date</th>
//             <th style={styles.tableCell}>Pickup Date</th>
//             <th style={styles.tableCell}>Return Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map(booking => (
//             <tr key={booking.booking_id} style={styles.tableRow}>
//               <td style={styles.tableCell}>{booking.booking_id}</td>
//               <td style={styles.tableCell}>{booking.user}</td>
//               <td style={styles.tableCell}>{booking.car}</td>
//               <td style={styles.tableCell}>{booking.booking_date}</td>
//               <td style={styles.tableCell}>{booking.pickup_date}</td>
//               <td style={styles.tableCell}>{booking.return_date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     margin: '20px auto',
//     maxWidth: '1200px',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center'
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '20px'
//   },
//   tableHeader: {
//     backgroundColor: '#f4f4f4',
//     fontWeight: 'bold',
//     borderBottom: '2px solid #ddd'
//   },
//   tableCell: {
//     padding: '12px',
//     textAlign: 'left',
//     borderBottom: '1px solid #ddd'
//   },
//   tableRow: {
//     backgroundColor: '#fff'
//   },
//   spinner: {
//     border: '8px solid #f3f3f3', /* Light grey */
//     borderTop: '8px solid #3498db', /* Blue */
//     borderRadius: '50%',
//     width: '50px',
//     height: '50px',
//     animation: 'spin 1s linear infinite',
//     margin: 'auto'
//   },
//   alert: {
//     padding: '10px',
//     backgroundColor: '#f8d7da',
//     color: '#721c24',
//     borderRadius: '5px',
//     border: '1px solid #f5c6cb',
//     marginBottom: '20px'
//   },
//   '@keyframes spin': {
//     from: { transform: 'rotate(0deg)' },
//     to: { transform: 'rotate(360deg)' }
//   }
// };

// export default BookingTable;


// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const token = localStorage.getItem('access');
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         setBookings(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDeleteBooking = async (id) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access')}`,
//           },
//         });

//         if (response.ok) {
//           alert('Booking deleted successfully!');
//           setBookings(bookings.filter((booking) => booking.booking_id !== id));
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete booking:', errorData);
//           alert('Failed to delete the booking.');
//         }
//       } catch (error) {
//         console.error('Error deleting booking:', error);
//         alert('Error deleting booking.');
//       }
//     }
//   };

//   if (loading)
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="alert alert-danger" role="alert">
//         <strong>Error:</strong> {error}
//       </div>
//     );

//   if (!Array.isArray(bookings) || bookings.length === 0)
//     return <p className="text-center">No bookings available.</p>;

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Bookings</h2>
//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>Booking ID</th>
//             <th>User</th>
//             <th>Car</th>
//             <th>Booking Date</th>
//             <th>Pickup Date</th>
//             <th>Return Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.booking_id}>
//               <td>{booking.booking_id}</td>
//               <td>{booking.user}</td>
//               <td>{booking.car}</td>
//               <td>{booking.booking_date}</td>
//               <td>{booking.pickup_date}</td>
//               <td>{booking.return_date}</td>
//               <td>{booking.status}</td>
//               <td>
//                 <button
//                   className="btn btn-link"
//                   onClick={() => handleDeleteBooking(booking.booking_id)}
//                   style={{
//                     color: 'red',
//                     background: 'none',
//                     border: 'none',
//                     padding: 0,
//                     textAlign: 'center',
//                     fontSize: '1.5rem',
//                     cursor: 'pointer',
//                     transition: 'color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#dc3545')}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = 'red')}
//                 >
//                   <i className="fas fa-trash-alt"></i> {/* Trash icon */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingTable;




// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const token = localStorage.getItem('access');
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         setBookings(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDeleteBooking = async (id) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access')}`,
//           },
//         });

//         if (response.ok) {
//           alert('Booking deleted successfully!');
//           setBookings(bookings.filter((booking) => booking.booking_id !== id));
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete booking:', errorData);
//           alert('Failed to delete the booking.');
//         }
//       } catch (error) {
//         console.error('Error deleting booking:', error);
//         alert('Error deleting booking.');
//       }
//     }
//   };

//   if (loading)
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="alert alert-danger" role="alert">
//         <strong>Error:</strong> {error}
//       </div>
//     );

//   if (!Array.isArray(bookings) || bookings.length === 0)
//     return <p className="text-center">No bookings available.</p>;

//   return (
//     <div className="container mt-4" style={{ padding: '2rem', background: 'var(--background)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//       <h2 className="mb-4" style={{ color: 'var(--black)' }}>Bookings</h2>
//       <table className="table table-striped table-bordered" style={{ borderRadius: '10px', overflow: 'hidden' }}>
//         <thead className="table-dark">
//           <tr>
//             <th>Booking ID</th>
//             <th>User</th>
//             <th>Car</th>
//             <th>Booking Date</th>
//             <th>Pickup Date</th>
//             <th>Return Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.booking_id}>
//               <td>{booking.booking_id}</td>
//               <td>{booking.user}</td>
//               <td>{booking.car}</td>
//               <td>{booking.booking_date}</td>
//               <td>{booking.pickup_date}</td>
//               <td>{booking.return_date}</td>
//               <td>{booking.status}</td>
//               <td>
//                 <button
//                   className="btn btn-link"
//                   onClick={() => handleDeleteBooking(booking.booking_id)}
//                   style={{
//                     color: 'red',
//                     background: 'none',
//                     border: 'none',
//                     padding: 0,
//                     textAlign: 'center',
//                     fontSize: '1.5rem',
//                     cursor: 'pointer',
//                     transition: 'color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#dc3545')}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = 'red')}
//                 >
//                   <i className="fas fa-trash-alt"></i> {/* Trash icon */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingTable;


//Final

// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const token = localStorage.getItem('access');
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         setBookings(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDeleteBooking = async (id) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access')}`,
//           },
//         });

//         if (response.ok) {
//           alert('Booking deleted successfully!');
//           setBookings(bookings.filter((booking) => booking.booking_id !== id));
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete booking:', errorData);
//           alert('Failed to delete the booking.');
//         }
//       } catch (error) {
//         console.error('Error deleting booking:', error);
//         alert('Error deleting booking.');
//       }
//     }
//   };

//   if (loading)
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="alert alert-danger" role="alert">
//         <strong>Error:</strong> {error}
//       </div>
//     );

//   if (!Array.isArray(bookings) || bookings.length === 0)
//     return <p className="text-center">No bookings available.</p>;

//   return (
//     <div className="container mt-4" style={{ padding: '2rem', background: 'var(--background)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//       <h2 className="mb-4" style={{ color: 'var(--black)' }}>Bookings</h2>
//       <table className="table table-striped table-bordered" style={{ borderRadius: '10px', overflow: 'hidden' }}>
//         <thead className="table-dark">
//           <tr>
//             <th>Booking ID</th>
//             <th>User</th>
//             <th>Car</th>
//             <th>Booking Date</th>
//             <th>Pickup Date</th>
//             <th>Return Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.booking_id}>
//               <td>{booking.booking_id}</td>
//               <td>{booking.user}</td>
//               <td>{booking.car}</td>
//               <td>{booking.booking_date}</td>
//               <td>{booking.pickup_date}</td>
//               <td>{booking.return_date}</td>
//               <td>{booking.status}</td>
//               <td>
//                 <button
//                   className="btn btn-link"
//                   onClick={() => handleDeleteBooking(booking.booking_id)}
//                   style={{
//                     color: 'red',
//                     background: 'none',
//                     border: 'none',
//                     padding: 0,
//                     textAlign: 'center',
//                     fontSize: '1.5rem',
//                     cursor: 'pointer',
//                     transition: 'color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#dc3545')}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = 'red')}
//                 >
//                   <i className="fas fa-trash-alt"></i> {/* Trash icon */}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingTable;



// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// const BookingTable = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       const token = localStorage.getItem('access');
//       const userId = localStorage.getItem('user_id'); // Assumes userId is stored in localStorage

//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         // Admin user (userId = 1) should see all bookings
//         // Other users should see only their bookings
//         if (userId === '1') {
//           setBookings(result);
//         } else {
//           setBookings(result.filter(booking => booking.user_id === userId));
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const handleDeleteBooking = async (id) => {
//     if (window.confirm('Are you sure you want to delete this booking?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('access')}`,
//           },
//         });

//         if (response.ok) {
//           alert('Booking deleted successfully!');
//           setBookings(bookings.filter((booking) => booking.booking_id !== id));
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete booking:', errorData);
//           alert('Failed to delete the booking.');
//         }
//       } catch (error) {
//         console.error('Error deleting booking:', error);
//         alert('Error deleting booking.');
//       }
//     }
//   };

//   if (loading)
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="alert alert-danger" role="alert">
//         <strong>Error:</strong> {error}
//       </div>
//     );

//   if (!Array.isArray(bookings) || bookings.length === 0)
//     return <p className="text-center">No bookings available.</p>;

//   return (
//     <div className="container mt-4" style={{ padding: '2rem', background: 'var(--background)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//       <h2 className="mb-4" style={{ color: 'var(--black)' }}>Bookings</h2>
//       <table className="table table-striped table-bordered" style={{ borderRadius: '10px', overflow: 'hidden' }}>
//         <thead className="table-dark">
//           <tr>
//             <th>Booking ID</th>
//             <th>User</th>
//             <th>Car</th>
//             <th>Booking Date</th>
//             <th>Pickup Date</th>
//             <th>Return Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.booking_id}>
//               <td>{booking.booking_id}</td>
//               <td>{booking.user}</td>
//               <td>{booking.car}</td>
//               <td>{booking.booking_date}</td>
//               <td>{booking.pickup_date}</td>
//               <td>{booking.return_date}</td>
//               <td>{booking.status}</td>
//               <td>
//                 <button
//                   className="btn btn-link"
//                   onClick={() => handleDeleteBooking(booking.booking_id)}
//                   style={{
//                     color: 'red',
//                     background: 'none',
//                     border: 'none',
//                     padding: 0,
//                     textAlign: 'center',
//                     fontSize: '1.5rem',
//                     cursor: 'pointer',
//                     transition: 'color 0.3s ease',
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = '#dc3545')}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = 'red')}
//                   >
//                     <i className="fas fa-trash-alt"></i> {/* Trash icon */}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };
  
//   export default BookingTable;
  


import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('access');
      const userId = localStorage.getItem('user_id'); // Assumes userId is stored in localStorage

      try {
        const response = await fetch('http://127.0.0.1:8000/api/bookings/', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        // Admin user (userId = 1) should see all bookings
        // Other users should see only their bookings
        if (userId === '1') {
          setBookings(result);
        } else {
          setBookings(result.filter(booking => booking.user_id === userId));
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/bookings/${id}/`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });

        if (response.ok) {
          alert('Booking deleted successfully!');
          setBookings(bookings.filter((booking) => booking.booking_id !== id));
        } else {
          const errorData = await response.json();
          console.error('Failed to delete booking:', errorData);
          alert('Failed to delete the booking.');
        }
      } catch (error) {
        console.error('Error deleting booking:', error);
        alert('Error deleting booking.');
      }
    }
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error:</strong> {error}
      </div>
    );

  if (!Array.isArray(bookings) || bookings.length === 0)
    return <p className="text-center">No bookings available.</p>;

  return (
    <div className="container mt-4" style={{ padding: '2rem', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <center><h2 className="mb-4" style={{ color: 'white',backgroundColor: '#000d6b' }}>Bookings</h2></center>
      <table className="table table-striped table-bordered" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#000d6b !important', color: '#ffffff' }}> {/* Header row styling */}
            <th>Booking ID</th>
            <th>User</th>
            <th>Car</th>
            <th>Booking Date</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.booking_id}</td>
              <td>{booking.user}</td>
              <td>{booking.car}</td>
              <td>{booking.booking_date}</td>
              <td>{booking.pickup_date}</td>
              <td>{booking.return_date}</td>
              <td>{booking.status}</td>
              <td>
                <button
                  className="btn btn-link"
                  onClick={() => handleDeleteBooking(booking.booking_id)}
                  style={{
                    color: '#ff4d4d', // Match the delete button color
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#dc3545')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ff4d4d')}
                >
                  <i className="fas fa-trash-alt"></i> {/* Trash icon */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
