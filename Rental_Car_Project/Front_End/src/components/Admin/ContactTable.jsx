// import React, { useEffect, useState } from 'react';

// const ContactTable = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/contacts/');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setContacts(result || []);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const deleteContact = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this contact?')) return;

//     try {
//       const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}/`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete the contact.');
//       }

//       // Update the UI by removing the deleted contact
//       setContacts(contacts.filter(contact => contact.id !== id));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

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

//   if (!Array.isArray(contacts) || contacts.length === 0) return <p>No contacts available.</p>;

//   return (
//     <div style={styles.container}>
//       <h2>Contacts</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.tableHeader}>
//             <th style={styles.tableCell}>ID</th>
//             <th style={styles.tableCell}>Name</th>
//             <th style={styles.tableCell}>Email</th>
//             <th style={styles.tableCell}>Message</th>
//             <th style={styles.tableCell}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map(contact => (
//             <tr key={contact.id} style={styles.tableRow}>
//               <td style={styles.tableCell}>{contact.id}</td>
//               <td style={styles.tableCell}>{contact.name}</td>
//               <td style={styles.tableCell}>{contact.email}</td>
//               <td style={styles.tableCell}>{contact.message}</td>
//               <td style={styles.tableCell}>
//                 <button
//                   style={styles.deleteButton}
//                   onClick={() => deleteContact(contact.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
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
//   deleteButton: {
//     backgroundColor: '#ff4d4d',
//     color: '#fff',
//     border: 'none',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     borderRadius: '5px'
//   },
//   '@keyframes spin': {
//     from: { transform: 'rotate(0deg)' },
//     to: { transform: 'rotate(360deg)' }
//   }
// };

// export default ContactTable;


// import React, { useEffect, useState } from 'react';

// const ContactTable = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const token = localStorage.getItem('access'); // Retrieve token from localStorage

//       if (!token) {
//         setError('No token found. Please log in.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/contacts/', {
//           headers: {
//             'Authorization': `Bearer ${token}` // Include the token in the headers
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setContacts(result || []);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const deleteContact = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this contact?')) return;

//     const token = localStorage.getItem('access'); // Retrieve token from localStorage

//     if (!token) {
//       alert('No token found. Please log in.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}/`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}` // Include the token in the headers
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete the contact.');
//       }

//       // Update the UI by removing the deleted contact
//       setContacts(contacts.filter(contact => contact.id !== id));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

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

//   if (!Array.isArray(contacts) || contacts.length === 0) return <p>No contacts available.</p>;

//   return (
//     <div style={styles.container}>
//       <h2>Contacts</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr style={styles.tableHeader}>
//             <th style={styles.tableCell}>ID</th>
//             <th style={styles.tableCell}>Name</th>
//             <th style={styles.tableCell}>Email</th>
//             <th style={styles.tableCell}>Message</th>
//             <th style={styles.tableCell}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map(contact => (
//             <tr key={contact.id} style={styles.tableRow}>
//               <td style={styles.tableCell}>{contact.id}</td>
//               <td style={styles.tableCell}>{contact.name}</td>
//               <td style={styles.tableCell}>{contact.email}</td>
//               <td style={styles.tableCell}>{contact.message}</td>
//               <td style={styles.tableCell}>
//                 <button
//                   style={styles.deleteButton}
//                   onClick={() => deleteContact(contact.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
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
//   deleteButton: {
//     backgroundColor: '#ff4d4d',
//     color: '#fff',
//     border: 'none',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     borderRadius: '5px'
//   },
//   '@keyframes spin': {
//     from: { transform: 'rotate(0deg)' },
//     to: { transform: 'rotate(360deg)' }
//   }
// };

// export default ContactTable;



  import React, { useState, useEffect } from 'react';
  import { FaTrashAlt } from 'react-icons/fa'; // Import Trash icon from react-icons
  import { Spinner, Card, Button } from 'react-bootstrap'; // Import Bootstrap components

  const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchContacts();
    }, []);

    const fetchContacts = async () => {
      const token = localStorage.getItem('access'); // Retrieve token from localStorage

      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/contacts/', {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the headers
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }

        const result = await response.json();
        if (Array.isArray(result)) {
          setContacts(result);
        } else {
          setContacts([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const handleDeleteContact = async (id) => {
      if (window.confirm('Are you sure you want to delete this contact?')) {
        const token = localStorage.getItem('access'); // Retrieve token from localStorage

        if (!token) {
          alert('No token found. Please log in.');
          return;
        }

        try {
          const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}/`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`, // Include token for DELETE request
            }
          });

          if (response.ok) {
            alert('Contact deleted successfully!');
            fetchContacts(); // Refresh the contact list after deletion
          } else {
            const errorData = await response.json();
            console.error('Failed to delete contact:', errorData);
            alert('Failed to delete the contact.');
          }
        } catch (error) {
          console.error('Error deleting contact:', error);
          alert('Error deleting contact.');
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

    if (!Array.isArray(contacts) || contacts.length === 0) return <p>No contacts available.</p>;

    return (
      <div style={styles.container}>
        <Card>
          <Card.Header as="h5" style={styles.cardHeader}>
            Contact List
          </Card.Header>
          <Card.Body>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
                  <th style={styles.tableCell}>ID</th>
                  <th style={styles.tableCell}>Name</th>
                  <th style={styles.tableCell}>Email</th>
                  <th style={styles.tableCell}>Message</th>
                  <th style={styles.tableCell}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => (
                  <tr key={contact.id} style={styles.tableRow}>
                    <td style={styles.tableCell}>{contact.id}</td>
                    <td style={styles.tableCell}>{contact.name}</td>
                    <td style={styles.tableCell}>{contact.email}</td>
                    <td style={styles.tableCell}>{contact.message}</td>
                    <td style={styles.tableCell}>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteContact(contact.id)}
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

  export default ContactTable;
