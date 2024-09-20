import React, { useState } from "react";
import { NavLink, Routes, Route, useLocation, Outlet, useNavigate } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// SVG Imports
import logo from "../components/panel/assets/logo.svg";
import Home from "../components/panel/assets/home-solid.svg";
import Team from "../components/panel/assets/social.svg";
import Calender from "../components/panel/assets/sceduled.svg";
import Projects from "../components/panel/assets/starred.svg";
import Documents from "../components/panel/assets/draft.svg";
import PowerOff from "../components/panel/assets/power-off-solid.svg";

// Page Components
import DriverTable from "../components/Admin/DriverTable";
import UserTable from "../components/Admin/UserTable";
import BookingTable from "../components/Admin/BookingTable";
import ContactTable from "../components/Admin/ContactTable";
import CarForm from "../components/Admin/CarForm";

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
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
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
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

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
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
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const MainContent = styled.div`
  margin-left: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  flex: 1;
  transition: margin-left 0.5s ease;
`;


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;



const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;



const Sidebar = () => {



const navigate = useNavigate();

const handleNavigation = (path) => {
navigate(path); // Navigate to different sections of the admin panel
    };
  

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  const location = useLocation();




  const handleLogout = () => {
    // Remove JWT token or session data
     const isConfirmed = window.confirm('Are you sure you want to log out?');
  
    if (isConfirmed) {
      // Logic for logout
      localStorage.removeItem('access'); // Example for JWT stored in localStorage
      localStorage.removeItem('refresh');
      localStorage.removeItem('user_id');
      console.log('Logged out');
      navigate('/signin'); // Redirect to Sign In page
    } else {
      console.log('Logout canceled');
    }
  };


  return (


    <Container>
      {/* <Row>
      <Col xs={1}> */}
      <Button clicked={click} onClick={() => handleClick()}>
        
      </Button>
      <SidebarContainer clicked={click}>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click} onClick={() => handleClick()}
            
            
            >
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/AdminPanel/booking-table"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Bookings</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/AdminPanel/contact-table"
          >
            <img src={Team} alt="Team" />
            <Text clicked={click}>Contact</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/AdminPanel/driver-table"
          >
            <img src={Calender} alt="Calender" />
            <Text clicked={click}>Drivers</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/AdminPanel/users"
          >
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>User</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/AdminPanel/car-form"
          >
            <img src={Projects} alt="CarForm" />
            <Text clicked={click}>CarForm</Text>
          </Item>
          <Item
            onClick={handleLogout} 
            activeClassName="active"
            to="/logout"
          >
            <img src={PowerOff} alt="Logout" />
            <Text clicked={click}>Logout</Text>
          </Item>
        </SlickBar>

      </SidebarContainer>
      {/* </Col> */}
      {/* <Col xs={10} className="d-flex flex-column"> */}
      <div className="flex-grow-1 p-3">
            <Outlet /> 
          </div>
      
      {/* </Col>
    </Row> */}
    </Container>

  );
};

export default Sidebar;


