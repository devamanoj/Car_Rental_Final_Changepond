// // import React from 'react';
// // import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
// // import { Outlet, useNavigate } from 'react-router-dom';

// // const AdminPanel = () => {
// //   const navigate = useNavigate();

// //   const handleNavigation = (path) => {
// //     navigate(path); // Navigate to different sections of the admin panel
// //   };

// //   return (
// //     <>
// //       {/* Top Navbar */}
// //       <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
// //         <Container>
// //           <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //           <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="ml-auto">
// //               <Button variant="outline-light" onClick={() => navigate('/logout')}>
// //                 Logout
// //               </Button>
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>

// //       {/* Main Content with Sidebar */}
// //       <Container fluid>
// //         <Row>
// //           {/* Sidebar */}
// //           <Col xs={2} className="bg-light p-3">
// //             <Nav className="flex-column">
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/booking-table')}>
// //                 <Button variant="primary" block>
// //                   Bookings
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/contact-table')}>
// //                 <Button variant="primary" block>
// //                   Contacts
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/driver-table')}>
// //                 <Button variant="primary" block>
// //                   Drivers
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/users')}>
// //                 <Button variant="primary" block>
// //                   Users
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/car-form')}>
// //                 <Button variant="primary" block>
// //                   Car Form
// //                 </Button>
// //               </Nav.Link>
// //             </Nav>
// //           </Col>

// //           {/* Content Area */}
// //           <Col xs={10}>
// //             <Outlet /> {/* Renders the nested routes' components */}
// //           </Col>
// //         </Row>
// //       </Container>
// //     </>
// //   );
// // };

// // export default AdminPanel;




// // import React from 'react';
// // import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';
// // import { FaCalendarCheck, FaEnvelope, FaTruck, FaUsers, FaCar, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from react-icons
// // import { Outlet } from 'react-router-dom'; // Importing Outlet

// // const AdminPanel = () => {
// //   const navigate = useNavigate();

// //   const handleNavigation = (path) => {
// //     navigate(path);
// //   };

// //   const handleLogout = () => {
// //     // Remove JWT token or session data
// //      const isConfirmed = window.confirm('Are you sure you want to log out?');
  
// //     if (isConfirmed) {
// //       // Logic for logout
// //       localStorage.removeItem('access'); // Example for JWT stored in localStorage
// //       localStorage.removeItem('refresh');
// //       localStorage.removeItem('user_id');
// //       console.log('Logged out');
// //       navigate('/signin'); // Redirect to Sign In page
// //     } else {
// //       console.log('Logout canceled');
// //     }
// //   };

// //   return (
// //     <Container fluid className="vh-100">
// //       <Row className="h-100">
// //         {/* Sidebar */}
// //         <Col 
// //           xs={2} 
// //           className="bg-dark p-3 d-flex flex-column"
// //           style={{ 
           
// //             backgroundColor: '#1e2a38', 
// //             color: 'white',
// //             paddingLeft: '1rem', 
// //             paddingRight: '1rem',
// //             paddingTop: '2rem', // Increased padding at the top
// //             position: 'relative'
          
// //           }}
// //         >
// //           <div className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Panel</div> {/* Branding at the top */}
// //           <Nav className="flex-column">
// //             {[
// //               { path: '/AdminPanel/booking-table', icon: <FaCalendarCheck />, text: 'Bookings' },
// //               { path: '/AdminPanel/contact-table', icon: <FaEnvelope />, text: 'Contacts' },
// //               { path: '/AdminPanel/driver-table', icon: <FaTruck />, text: 'Drivers' },
// //               { path: '/AdminPanel/users', icon: <FaUsers />, text: 'Users' },
// //               { path: '/AdminPanel/car-form', icon: <FaCar />, text: 'Car Form' }
// //             ].map(({ path, icon, text }, index) => (
// //               <Nav.Link 
// //                 key={index}
// //                 onClick={() => handleNavigation(path)}
// //                 className="mb-3" // Margin bottom for spacing
// //                 style={{ padding: 0 }}
// //               >
// //                 <Button 
// //                   variant="outline-light" 
// //                   className="w-100"
// //                   style={{ 
// //                     borderColor: 'white', 
// //                     color: 'white',
// //                     backgroundColor: '#34495e',
// //                     padding: '0.75rem', // Padding for buttons
// //                     borderRadius: '0.25rem', // Rounded corners
// //                     transition: 'background-color 0.3s' // Smooth transition
// //                   }}
// //                   onMouseEnter={(e) => (e.target.style.backgroundColor = '#5a6d83')}
// //                   onMouseLeave={(e) => (e.target.style.backgroundColor = '#34495e')}
// //                 >
// //                   {icon} {/* Render icon */}
// //                   {text} {/* Render button text */}
// //                 </Button>
// //               </Nav.Link>
// //             ))}
// //           </Nav>
          
// //         </Col>

// //         {/* Main Content Area */}
// //         <Col xs={10} className="d-flex flex-column">
// //           {/* Header */}
// //           <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" style={{ width: '100%'
// //             ,padding: '20px'
// //             ,margintop: '10px;'
// //            }}>
// //             <Container fluid>
             
// //               <Navbar.Collapse className="justify-content-end">
// //                 <Button variant="danger" className="w-30 h-20 mt-auto" onClick={handleLogout} style={{ fontWeight: 'bold' ,
// //                       backgroundColor: '#e74c3c', 
// //                       borderColor: '#e74c3c',
// //                       marginTop: 'auto', // Ensure the logout button stays at the bottom
// //                       padding: '0.75rem', // Padding for the logout button
// //                       borderRadius: '0.25rem', // Rounded corners for the logout button
// //                       transition: 'background-color 0.3s', // Smooth transition

// //                  }} onMouseEnter={(e) => (e.target.style.backgroundColor = '#c0392b')}
// //                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#e74c3c')}>
// //                   <FaSignOutAlt className="me-2" />
// //                   Logout
// //                 </Button>
// //               </Navbar.Collapse>
// //             </Container>
// //           </Navbar>

// //           {/* Main Content */}
// //           <div className="flex-grow-1 p-3">
// //             <Outlet /> 
// //           </div>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default AdminPanel;




// // import React from 'react';
// // import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
// // import { Outlet, useNavigate } from 'react-router-dom';

// // const AdminPanel = () => {
// //   const navigate = useNavigate();

// //   const handleNavigation = (path) => {
// //     navigate(path); // Navigate to different sections of the admin panel
// //   };

// //   return (
// //     <>
// //       {/* Top Navbar */}
// //       <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
// //         <Container>
// //           <Navbar.Brand href="#">Admin Panel</Navbar.Brand>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //           <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="ml-auto">
// //               <Button variant="outline-light" onClick={() => navigate('/logout')}>
// //                 Logout
// //               </Button>
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>

// //       {/* Main Content with Sidebar */}
// //       <Container fluid>
// //         <Row>
// //           {/* Sidebar */}
// //           <Col xs={2} className="bg-light p-3">
// //             <Nav className="flex-column">
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/booking-table')}>
// //                 <Button variant="primary" block>
// //                   Bookings
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/contact-table')}>
// //                 <Button variant="primary" block>
// //                   Contacts
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/driver-table')}>
// //                 <Button variant="primary" block>
// //                   Drivers
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/users')}>
// //                 <Button variant="primary" block>
// //                   Users
// //                 </Button>
// //               </Nav.Link>
// //               <Nav.Link onClick={() => handleNavigation('/AdminPanel/car-form')}>
// //                 <Button variant="primary" block>
// //                   Car Form
// //                 </Button>
// //               </Nav.Link>
// //             </Nav>
// //           </Col>

// //           {/* Content Area */}
// //           <Col xs={10}>
// //             <Outlet /> {/* Renders the nested routes' components */}
// //           </Col>
// //         </Row>
// //       </Container>
// //     </>
// //   );
// // };

// // export default AdminPanel;




// import React from 'react';
// import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { FaCalendarCheck, FaEnvelope, FaTruck, FaUsers, FaCar, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from react-icons
// import { Outlet } from 'react-router-dom'; // Importing Outlet

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const handleLogout = () => {
//     // Remove JWT token or session data
//      const isConfirmed = window.confirm('Are you sure you want to log out?');
  
//     if (isConfirmed) {
//       // Logic for logout
//       localStorage.removeItem('access'); // Example for JWT stored in localStorage
//       localStorage.removeItem('refresh');
//       localStorage.removeItem('user_id');
//       console.log('Logged out');
//       navigate('/signin'); // Redirect to Sign In page
//     } else {
//       console.log('Logout canceled');
//     }
//   };

//   return (
//     <Container fluid className="vh-100">
//       <Row className="h-100">
//         {/* Sidebar */}
//         <Col xs={2}>
//           <div className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Panel</div> {/* Branding at the top */}
//           <Nav className="flex-column">
//             {[
//               { path: '/AdminPanel/booking-table', icon: <FaCalendarCheck />, text: 'Bookings' },
//               { path: '/AdminPanel/contact-table', icon: <FaEnvelope />, text: 'Contacts' },
//               { path: '/AdminPanel/driver-table', icon: <FaTruck />, text: 'Drivers' },
//               { path: '/AdminPanel/users', icon: <FaUsers />, text: 'Users' },
//               { path: '/AdminPanel/car-form', icon: <FaCar />, text: 'Car Form' }
//             ].map(({ path, icon, text }, index) => (
//               <Nav.Link 
//                 key={index}
//                 onClick={() => handleNavigation(path)}
//                 className="mb-3" // Margin bottom for spacing
//                 style={{ padding: 0 }}
//               >
//                 <Button 
//                   variant="outline-light" 
//                   className="w-100"
//                   style={{ 
//                     borderColor: 'white', 
//                     color: 'white',
//                     backgroundColor: '#34495e',
//                     padding: '0.75rem', // Padding for buttons
//                     borderRadius: '0.25rem', // Rounded corners
//                     transition: 'background-color 0.3s' // Smooth transition
//                   }}
//                   onMouseEnter={(e) => (e.target.style.backgroundColor = '#5a6d83')}
//                   onMouseLeave={(e) => (e.target.style.backgroundColor = '#34495e')}
//                 >
//                   {icon} {/* Render icon */}
//                   {text} {/* Render button text */}
//                 </Button>
//               </Nav.Link>
//             ))}
//           </Nav>
          
//         </Col>

//         {/* Main Content Area */}
//         <Col xs={10} className="d-flex flex-column">
//           {/* Header */}
//           <Navbar bg="dark" variant="dark" expand="lg" className="mb-4" style={{ width: '100%'
//             ,padding: '20px'
//             ,margintop: '10px;'
//            }}>
//             <Container fluid>
             
//               <Navbar.Collapse className="justify-content-end">
//                 <Button variant="danger" className="w-30 h-20 mt-auto" onClick={handleLogout} style={{ fontWeight: 'bold' ,
//                       backgroundColor: '#e74c3c', 
//                       borderColor: '#e74c3c',
//                       marginTop: 'auto', // Ensure the logout button stays at the bottom
//                       padding: '0.75rem', // Padding for the logout button
//                       borderRadius: '0.25rem', // Rounded corners for the logout button
//                       transition: 'background-color 0.3s', // Smooth transition

//                  }} onMouseEnter={(e) => (e.target.style.backgroundColor = '#c0392b')}
//                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#e74c3c')}>
//                   <FaSignOutAlt className="me-2" />
//                   Logout
//                 </Button>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>

//           {/* Main Content */}
//           <div className="flex-grow-1 p-3">
//             <Outlet /> 
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPanel;








import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import styled from "styled-components";

// SVG Imports
import logo from "../components/panel/assets/logo.svg";
import Home from "../components/panel/assets/home-solid.svg";
import Forum from "../components/panel/assets/Forum.svg";
import Team from "../components/panel/assets/social.svg";
import Calender from "../components/panel/assets/sceduled.svg";
import Projects from "../components/panel/assets/starred.svg";
import Documents from "../components/panel/assets/draft.svg";
import PowerOff from "../components/panel/assets/power-off-solid.svg";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  height: 100vh; /* Ensuring full height */
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: width 0.5s ease;
  overflow: hidden; /* Ensures no overflow */
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 2rem 0;
  width: 100%;
  overflow-y: auto; /* Allows vertical scrolling */
  height: calc(100% - 4rem); /* Adjust based on logo and logout space */
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg) brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  padding: 1rem;
  overflow-y: auto; /* Allows vertical scrolling */
  transition: margin-left 0.5s ease;
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    const isConfirmed = window.confirm('Are you sure you want to log out?');
    if (isConfirmed) {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      localStorage.removeItem('user_id');
      console.log('Logged out');
      navigate('/signin');
    } else {
      console.log('Logout canceled');
    }
  };

  return (
    <Container>

      <SidebarContainer clicked={click}>
      <Button clicked={click} onClick={() => handleClick()}>
        
        </Button>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click} onClick={() => handleClick()}>
          <Item onClick={() => setClick(false)} exact activeClassName="active" to="/AdminPanel/booking-table">
            <img src={Calender} alt="Home" />
            <Text clicked={click}>Bookings</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/AdminPanel/contact-table">
            <img src={Forum} alt="Team" />
            <Text clicked={click}>Contact</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/AdminPanel/driver-table">
            <img src={Documents} alt="Calender" />
            <Text clicked={click}>Drivers</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/AdminPanel/users">
            <img src={Team} alt="Documents" />
            <Text clicked={click}>User</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/AdminPanel/car-form">
            <img src={Documents} alt="CarForm" />
            <Text clicked={click}>CarForm</Text>
          </Item>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/AdminPanel/driver-application">
            <img src={Team} alt="JobAppliactions" />
            <Text clicked={click}>DriverBank</Text>
          </Item>
          <Item onClick={handleLogout} activeClassName="active" >
            <img src={PowerOff} alt="Logout" />
            <Text clicked={click}>Logout</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
      <MainContent clicked={click}>
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default Sidebar;