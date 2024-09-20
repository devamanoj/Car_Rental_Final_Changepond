// import React, { useState, useEffect } from 'react';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     address: '',
//     phone_number: '',
//   });
//   const [editingUser, setEditingUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/cars/users/');
//       const result = await response.json();
//       console.log('Fetched users:', result); // Log the fetched data

//       if (result && result.data && Array.isArray(result.data)) {
//         setUsers(result.data);
//       } else {
//         console.error('Expected an array of users in result.data, but got:', result);
//         setUsers([]);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddUser = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/cars/users/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('User added successfully!');
//         setFormData({
//           username: '',
//           email: '',
//           address: '',
//           phone_number: '',
//         });
//         fetchUsers();
//       } else {
//         alert('Failed to add user.');
//       }
//     } catch (error) {
//       console.error('Error adding user:', error);
//       alert('Error adding user.');
//     }
//   };

//   const handleUpdateUser = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/cars/users/${editingUser.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('User updated successfully!');
//         setEditingUser(null);
//         setFormData({
//           username: '',
//           email: '',
//           address: '',
//           phone_number: '',
//         });
//         fetchUsers();
//       } else {
//         alert('Failed to update user.');
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//       alert('Error updating user.');
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/cars/users/${id}/`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           alert('User deleted successfully!');
//           fetchUsers();
//         } else {
//           alert('Failed to delete the user.');
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         alert('Error deleting user.');
//       }
//     }
//   };

//   const handleEditClick = (user) => {
//     setEditingUser(user);
//     setFormData({
//       username: user.username,
//       email: user.email,
//       address: user.address,
//       phone_number: user.phone_number,
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">User List</h2>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.map(user => (
//             <tr key={user.user_id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>{user.phone_number}</td>
//               <td>
//                 <button
//                   className="btn btn-danger me-2"
//                   onClick={() => handleDeleteUser(user.user_id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => handleEditClick(user)}
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-5">
//         <h3>{editingUser ? 'Update User' : 'Add User'}</h3>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter user's username"
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
//               placeholder="Enter user's email"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="address" className="form-label">Address</label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Enter user's address"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="phone_number" className="form-label">Phone Number</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone_number"
//               name="phone_number"
//               value={formData.phone_number}
//               onChange={handleChange}
//               placeholder="Enter user's phone number"
//               required
//             />
//           </div>

//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={editingUser ? handleUpdateUser : handleAddUser}
//           >
//             {editingUser ? 'Update User' : 'Add User'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserTable;


// import React, { useState, useEffect } from 'react';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     address: '',
//     phone_number: '',
//   });
//   const [editingUser, setEditingUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/cars/users/');
//       const result = await response.json();
//       console.log('Fetched users:', result); // Log the fetched data

//       if (result && result.data && Array.isArray(result.data)) {
//         setUsers(result.data);
//       } else {
//         console.error('Expected an array of users in result.data, but got:', result);
//         setUsers([]);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddUser = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/cars/users/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('User added successfully!');
//         setFormData({
//           username: '',
//           email: '',
//           address: '',
//           phone_number: '',
//         });
//         fetchUsers();
//       } else {
//         alert('Failed to add user.');
//       }
//     } catch (error) {
//       console.error('Error adding user:', error);
//       alert('Error adding user.');
//     }
//   };

//   const handleUpdateUser = async () => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/cars/users/${editingUser.id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('User updated successfully!');
//         setEditingUser(null);
//         setFormData({
//           username: '',
//           email: '',
//           address: '',
//           phone_number: '',
//         });
//         fetchUsers();
//       } else {
//         alert('Failed to update user.');
//       }
//     } catch (error) {
//       console.error('Error updating user:', error);
//       alert('Error updating user.');
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/cars/users/${id}/`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           alert('User deleted successfully!');
//           fetchUsers();
//         } else {
//           alert('Failed to delete the user.');
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         alert('Error deleting user.');
//       }
//     }
//   };

//   const handleEditClick = (user) => {
//     setEditingUser(user);
//     setFormData({
//       username: user.username,
//       email: user.email,
//       address: user.address,
//       phone_number: user.phone_number,
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">User List</h2>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.map(user => (
//             <tr key={user.user_id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>{user.phone_number}</td>
//               <td>
//                 <button
//                   className="btn btn-danger me-2"
//                   onClick={() => handleDeleteUser(user.user_id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => handleEditClick(user)}
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editingUser && (
//         <div className="mt-5">
//           <h3>Update User</h3>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">Username</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Enter user's username"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter user's email"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="address" className="form-label">Address</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter user's address"
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="phone_number" className="form-label">Phone Number</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone_number"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 placeholder="Enter user's phone number"
//                 required
//               />
//             </div>

//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={handleUpdateUser}
//             >
//               Update User
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserTable;



// import React, { useState, useEffect } from 'react';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/users/');
//       const result = await response.json();
//       console.log('Fetched users:', result); // Log the fetched data

//       if (Array.isArray(result.data)) {
//         setUsers(result.data);
//       } else {
//         console.error('Expected an array of users in result.data, but got:', result);
//         setUsers([]);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           alert('User deleted successfully!');
//           fetchUsers();
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete user:', errorData);
//           alert('Failed to delete the user.');
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         alert('Error deleting user.');
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">User List</h2>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.map(user => (
//             <tr key={user.user_id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>{user.phone_number}</td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteUser(user.user_id)}
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

// export default UserTable;



// import React, { useState, useEffect } from 'react';

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);  // Added a loading state
//   const [error, setError] = useState(null);  // Added error handling state

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const token = localStorage.getItem('access');  // Assuming token is stored in localStorage
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/users/', {
//         headers: {
//           'Authorization': `Bearer ${token}`,  // Include token in the request header
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }

//       const result = await response.json();
//       console.log('Fetched users:', result); // Log the fetched data

//       if (Array.isArray(result)) {
//         setUsers(result);  // Directly using the result as it appears to be an array
//       } else {
//         console.error('Expected an array of users, but got:', result);
//         setUsers([]);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       setError(error.message);  // Set error message
//     } finally {
//       setLoading(false);  // Stop loading after data is fetched
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       const token = localStorage.getItem('access');  // Get token for authorization
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`,  // Include token for DELETE request
//           }
//         });

//         if (response.ok) {
//           alert('User deleted successfully!');
//           fetchUsers();  // Refresh the user list after deletion
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete user:', errorData);
//           alert('Failed to delete the user.');
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         alert('Error deleting user.');
//       }
//     }
//   };

//   if (loading) return <p>Loading...</p>;  // Show loading state
//   if (error) return <p>Error: {error}</p>;  // Show error if any

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">User List</h2>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>first_name</th>
//             <th>last_name</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.map(user => (
//             <tr key={user.username}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.first_name}</td>
//               <td>{user.last_name}</td>
//               <td>{user.password}</td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDeleteUser(user.user_id)}
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

// export default UserTable;




// import React, { useState, useEffect } from 'react';
// import { FaTrashAlt } from 'react-icons/fa'; // Import Trash icon from react-icons
// import { Spinner, Table, Button, Card } from 'react-bootstrap'; // Import Bootstrap components

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);  // Added a loading state
//   const [error, setError] = useState(null);  // Added error handling state

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const token = localStorage.getItem('access');  // Assuming token is stored in localStorage
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/users/', {
//         headers: {
//           'Authorization': `Bearer ${token}`,  // Include token in the request header
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch users');
//       }

//       const result = await response.json();
//       console.log('Fetched users:', result); // Log the fetched data

//       if (Array.isArray(result)) {
//         setUsers(result);  // Directly using the result as it appears to be an array
//       } else {
//         console.error('Expected an array of users, but got:', result);
//         setUsers([]);
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       setError(error.message);  // Set error message
//     } finally {
//       setLoading(false);  // Stop loading after data is fetched
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       const token = localStorage.getItem('access');  // Get token for authorization
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`,  // Include token for DELETE request
//           }
//         });

//         if (response.ok) {
//           alert('User deleted successfully!');
//           fetchUsers();  // Refresh the user list after deletion
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to delete user:', errorData);
//           alert('Failed to delete the user.');
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         alert('Error deleting user.');
//       }
//     }
//   };

//   if (loading) return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /> Loading...</div>;  // Show loading state
//   if (error) return <div className="text-center mt-5 alert alert-danger">Error: {error}</div>;  // Show error if any

//   return (
//     <div className="container mt-5">
//       <Card>
//         <Card.Header as="h5">User List</Card.Header>
//         <Card.Body>
//           <Table striped bordered hover responsive variant="dark">
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(users) && users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.first_name}</td>
//                   <td>{user.last_name}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       onClick={() => handleDeleteUser(user.id)}
//                     >
//                       <FaTrashAlt className="me-1" /> Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default UserTable;


import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Import Trash icon from react-icons
import { Spinner, Table, Button, Card } from 'react-bootstrap'; // Import Bootstrap components

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // Added a loading state
  const [error, setError] = useState(null);  // Added error handling state

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem('access');  // Assuming token is stored in localStorage
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/', {
        headers: {
          'Authorization': `Bearer ${token}`,  // Include token in the request header
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const result = await response.json();
      console.log('Fetched users:', result); // Log the fetched data

      if (Array.isArray(result)) {
        setUsers(result);  // Directly using the result as it appears to be an array
      } else {
        console.error('Expected an array of users, but got:', result);
        setUsers([]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error.message);  // Set error message
    } finally {
      setLoading(false);  // Stop loading after data is fetched
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const token = localStorage.getItem('access');  // Get token for authorization
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,  // Include token for DELETE request
          }
        });

        if (response.ok) {
          alert('User deleted successfully!');
          fetchUsers();  // Refresh the user list after deletion
        } else {
          const errorData = await response.json();
          console.error('Failed to delete user:', errorData);
          alert('Failed to delete the user.');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error deleting user.');
      }
    }
  };

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /> Loading...</div>;  // Show loading state
  if (error) return <div className="text-center mt-5 alert alert-danger">Error: {error}</div>;  // Show error if any

  return (
    <div className="container mt-5" style={{ padding: '2rem', borderRadius: '15px' }}>
      <Card>
        <Card.Header as="h5" style={{ backgroundColor: '#000d6b', color: '#ffffff', borderRadius: '10px 10px 0 0' }}>
          User List
        </Card.Header>
        <Card.Body>
          <Table style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteUser(user.id)}
                      style={{ backgroundColor: '#000d6b', borderColor: '#000d6b' }}  // Set the button color
                    >
                      <FaTrashAlt className="me-1" /> Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserTable;
