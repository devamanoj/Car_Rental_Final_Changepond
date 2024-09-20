// //userpanel.jsx

// import React from 'react';
// import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
// import { Outlet, useNavigate } from 'react-router-dom';

// const UserPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Show confirmation dialog
//     const isConfirmed = window.confirm('Are you sure you want to log out?');
  
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
  

//   const handleButtonClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#">Rental Car Dashboard</Navbar.Brand>
//         </Container>
//       </Navbar>

//       {/* Main Content with Sidebar */}
//       <Container fluid className="mt-4">
//         <Row>
//           {/* Left Sidebar */}
//           <Col xs={2} className="bg-light p-3">
//             <Nav className="flex-column">
//               <Nav.Link onClick={() => handleButtonClick('/UserPanel/carslist')} className="mb-2">
//                 <Button variant="primary" block>
//                   View Cars
//                 </Button>
//               </Nav.Link>
//               <Nav.Link onClick={() => handleButtonClick('/UserPanel/my-bookings')} className="mb-2">
//                 <Button variant="primary" block>
//                   My Bookings
//                 </Button>
//               </Nav.Link>
//               <Nav.Link onClick={() => handleButtonClick('/UserPanel/contact')} className="mb-2">
//                 <Button variant="primary" block>
//                   Contact
//                 </Button>
//               </Nav.Link>
//               <Nav.Link className="mb-2">
//                 <Button variant="danger" block onClick={handleLogout}>
//                   Logout
//                 </Button>
//               </Nav.Link>
//             </Nav>
//           </Col>
//           <Col xs={10}>
//             <Outlet /> {/* Renders the nested routes' components */}
//           </Col>
//           {/* Main Content Area */}
//           <Col xs={10} className="text-center">
//             {/* <h2>Welcome to the Rental Car Dashboard!</h2>
//             <p>Use the navigation on the left to manage your car bookings, view available cars, or update your profile.</p> */}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default UserPanel;



// import React from 'react';
// import { Navbar, Nav, Button, Container, Row, Col, Collapse } from 'react-bootstrap';
// import { Outlet, useNavigate } from 'react-router-dom';
// import '../styles/user-panel.css'; // Import custom CSS

// const UserPanel = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = React.useState(true);

//   const handleLogout = () => {
//     // Show confirmation dialog
//     const isConfirmed = window.confirm('Are you sure you want to log out?');
  
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
  
//   const handleButtonClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="#">Rental Car Dashboard</Navbar.Brand>
//           <Button
//             className="ml-auto"
//             variant="link"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <i className={`bi ${isOpen ? 'bi-chevron-left' : 'bi-chevron-right'}`}></i>
//           </Button>
//         </Container>
//       </Navbar>

//       {/* Main Content with Sidebar */}
//       <Container fluid className="mt-4">
//         <Row>
//           {/* Left Sidebar */}
//           <Col
//             xs={2}
//             className={`bg-light p-3 sidebar ${isOpen ? 'open' : 'closed'}`}
//           >
//             <Collapse in={isOpen}>
//               <div>
//                 <Nav className="flex-column">
//                   <Nav.Link onClick={() => handleButtonClick('/UserPanel/carslist')} className="mb-2">
//                     <Button variant="primary" className="custom-button">
//                       View Cars
//                     </Button>
//                   </Nav.Link>
//                   <Nav.Link onClick={() => handleButtonClick('/UserPanel/my-bookings')} className="mb-2">
//                     <Button variant="primary" className="custom-button">
//                       My Bookings
//                     </Button>
//                   </Nav.Link>
//                   <Nav.Link onClick={() => handleButtonClick('/UserPanel/contact')} className="mb-2">
//                     <Button variant="primary" className="custom-button">
//                       Contact
//                     </Button>
//                   </Nav.Link>
//                   <Nav.Link className="mb-2">
//                     <Button variant="danger" className="custom-button" onClick={handleLogout}>
//                       Logout
//                     </Button>
//                   </Nav.Link>
//                 </Nav>
//               </div>
//             </Collapse>
//           </Col>
//           <Col xs={10}>
//             <Outlet /> {/* Renders the nested routes' components */}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default UserPanel;



import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/panel/assets/logo.svg"; // Adjust path if needed
import CarIcon from "../components/panel/assets/caricon.svg";
import Forum from "../components/panel/assets/Forum.svg";
import Calender from "../components/panel/assets/sceduled.svg";
import PowerOff from "../components/panel/assets/power-off-solid.svg";

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  height: 100vh;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: width 0.5s ease;
  overflow: hidden;
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
  padding: 2rem 0;
  width: 100%;
  height: calc(100% - 4rem);
  overflow-y: auto;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  &.active {
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
    top: ${(props) => (props.clicked ? "1.5rem" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2rem" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  padding: 1rem;
  overflow-y: auto;
  transition: margin-left 0.5s ease;
`;

const UserPanel = () => {
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
        <Button clicked={click} onClick={handleClick} />
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar onClick={handleClick}>
          <Item to="/UserPanel/carslist" onClick={() => setClick(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={CarIcon} alt="Cars" />
            <Text clicked={click}>View Cars</Text>
          </Item>
          <Item to="/UserPanel/my-bookings" onClick={() => setClick(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={Calender} alt="Bookings" />
            <Text clicked={click}>My Bookings</Text>
          </Item>
          <Item to="/UserPanel" onClick={() => setClick(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={CarIcon} alt="Quick" />
            <Text clicked={click}>Quick Book</Text>
          </Item>
          <Item to="/UserPanel/contact" onClick={() => setClick(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={Forum} alt="Contact" />
            <Text clicked={click}>Contact</Text>
          </Item>
          {/* <Item onClick={handleLogout} className={({ isActive }) => (isActive ? 'active' : '')}> */}
          <Item onClick={handleLogout} className={({ isActive }) => (isActive ? 'active' : '')}>
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

export default UserPanel;
