// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import FindCarForm from '../components/UI/FindCarForm'; // Ensure the path is correct

// const UserPanelDash = () => {
//   // Inline styles
//   const sectionStyle = {
//     padding: '60px 0',
//     backgroundColor: '#f5f5f5'
//   };

//   const gifStyle = {
//     width: '80%', // Adjust the width as needed
//     maxWidth: '800px', // Max width to ensure it doesn’t get too large
//     height: 'auto',
//     marginBottom: '20px',
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   };

//   const titleStyle = {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: '10px'
//   };

//   const messageStyle = {
//     fontSize: '1.2rem',
//     color: '#666',
//     marginBottom: '20px'
//   };

//   return (
//     <section style={sectionStyle}>
//       <Container>
//         <Row className="align-items-center">
//           {/* Left Side: GIF and Welcome Message */}
//           <Col md="6" className="text-center text-md-left">
//             <img 
//               src="https://i.pinimg.com/originals/30/57/47/3057478343b774a2d117791160da8fc9.gif" // Replace with your online GIF link
//               alt="Welcome Animation"
//               style={gifStyle}
//             />
//             <h1 style={titleStyle}>Welcome to Your Dashboard</h1>
//             <p style={messageStyle}>
//               Explore our range of cars and find the perfect one for your needs!
//             </p>
//           </Col>
          
//           {/* Right Side: FindCarForm Component */}
//           <Col md="6">
//             <FindCarForm />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default UserPanelDash;



import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/UI/FindCarForm'; // Ensure the path is correct
import axios from 'axios';

const UserPanelDash = () => {
  const [username, setUsername] = useState(''); // State to store the username
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch user details from the API
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('access'); // Retrieve token from local storage
        const userId = localStorage.getItem('user_id'); // Retrieve user_id from local storage

        if (!token || !userId) {
          setError('User not authenticated');
          setLoading(false);
          return;
        }

        const response = await axios.get('http://127.0.0.1:8000/api/users/', { // Adjust the endpoint as needed
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Find the user with the matching user_id
        const user = response.data.find(user => user.id === parseInt(userId, 10));

        if (user) {
          setUsername(user.username); // Set username of the matched user
        } else {
          setError('User not found');
        }
      } catch (err) {
        setError('Error fetching user details'); // Handle error
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchUserDetails(); // Fetch user details when component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  // Inline styles
  const sectionStyle = {
    padding: '60px 0',
    backgroundColor: '#f5f5f5'
  };

  const gifStyle = {
    width: '80%', // Adjust the width as needed
    maxWidth: '800px', // Max width to ensure it doesn’t get too large
    height: 'auto',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px'
  };

  const messageStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px'
  };

  if (loading) {
    return <p>Loading...</p>; // Optional: Loading state
  }

  if (error) {
    return <p className="text-danger">{error}</p>; // Optional: Error state
  }

  return (
    <section style={sectionStyle}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side: GIF and Welcome Message */}
          <Col md="6" className="text-center text-md-left">
            <img 
              src="https://th.bing.com/th/id/OIP.4huSZurFmuW0VxWb0asNKgHaE8?rs=1&pid=ImgDetMain" // Replace with your online GIF link
              alt="Welcome Animation"
              style={gifStyle}
            />
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1 style={titleStyle}>Welcome, {username}!</h1>
            <p style={messageStyle}>
              Explore our range of cars and find the perfect one for your needs!
            </p>
          </Col>
          <br></br><br></br><br></br><br></br><br></br>
          
          {/* Right Side: FindCarForm Component */}
          <Col md="6">
          <center><strong><p>Check Here!!!</p></strong></center>
          
            <FindCarForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserPanelDash;
