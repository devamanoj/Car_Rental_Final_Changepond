// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarTypes from "../pages/CarTypes";
// import CarsList from "../pages/CarsList";
// import CarDetails from "../pages/CarDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";
// import SlidingAuth from "../pages/SignIn";
// import BecomeDriverForm from "../components/UI/BecomeDriverForm";
// import CarListing from "../pages/CarTypes";
// import CarForm from "../components/Admin/CarForm";
// import CarCard from "../pages/carcards";
// import Userdash from "../pages/userdashboard";
// import DriverTable from "../components/Admin/DriverTable";
// import UserTable from "../components/Admin/UserTable";
// import BookingTable from "../components/Admin/BookingTable";
// import ContactTable from "../components/Admin/ContactTable";
// import BookedCarPage from "../components/UI/BookedCarPage";
// import CancelBookingPage from "../components/UI/CancelBookingPage";
// import UserDashboard from "../pages/UserDashboard ";
// import AdminPanel from "../pages/AdminPanel";

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/DriverForm" element={<BecomeDriverForm />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/cars" element={<CarListing />} />
//       <Route path="/cars/:id" element={<CarDetails />} />
//       <Route path="/blogs" element={<Blog />} />
//       <Route path="/user" element={<Userdash />} />
//       <Route path="/blogs/:slug" element={<BlogDetails />} />
//       <Route path="/Signin" element={<SlidingAuth />} />
//       {/* Admin Panel Nested Routes */}
      
//       <Route path="/UserDashboard" element={<UserDashboard />}>
//           {/* Nested routes */}
//           <Route path="booked-car/:id" element={<BookedCarPage />} />
//           <Route path="cars-list" element={<CarsList />} />
//           <Route path="cancel-booking/:id" element={<DriverTable />} />
//         </Route>

//       <Route path="/AdminPanel" element={<AdminPanel />}>
//         <Route path="" element={<BookingTable />} />
//         <Route path="booking-table" element={<BookingTable />} />
//         <Route path="contact-table" element={<ContactTable />} />
//         <Route path="driver-table" element={<DriverTable />} />
//         <Route path="users" element={<UserTable />} />
//         <Route path="Car-Form" element={<CarForm />} />
//       </Route>

//       <Route path="/cancel-booking/:id" element={<CancelBookingPage />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Routers;


// final functional 


  // import React from "react";
  // import { Routes, Route, Navigate } from "react-router-dom";
  // import Home from "../pages/Home";
  // import About from "../pages/About";
  // import CarTypes from "../pages/CarTypes";
  // import CarsList from "../pages/CarsList";
  // import CarDetails from "../pages/CarDetails";
  // import Blog from "../pages/Blog";
  // import BlogDetails from "../pages/BlogDetails";
  // import NotFound from "../pages/NotFound";
  // import Contact from "../pages/Contact";
  // import SlidingAuth from "../pages/SignIn";
  // import BecomeDriverForm from "../components/UI/BecomeDriverForm";
  // import CarListing from "../pages/CarTypes";
  // import CarForm from "../components/Admin/CarForm";
  // // import CarForm from "../pages/CarForm";
  // import CarCard from "../pages/carcards";  // Ensure the correct path and filename
  // // import Userdash from "../pages/UserDashboard";  // Ensure correct naming and path
  // import DriverTable from "../components/Admin/DriverTable";
  // import UserTable from "../components/Admin/UserTable";
  // import BookingTable from "../components/Admin/BookingTable";
  // import ContactTable from "../components/Admin/ContactTable";
  // import BookedCarPage from "../components/UI/BookedCarPage";
  // import CancelBookingPage from "../components/UI/CancelBookingPage";
  // import AdminPanel from "../pages/AdminPanel";
  // import UserPanel from "../pages/UserPanel";
  // import FindCar from "../components/UI/FindCarForm";
  // import MyBookings from "../pages/MyBookings";
  // import ProtectedRoute from "./ProtectedRoute";

  // const Routers = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Navigate to="/home" />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="/DriverForm" element={<BecomeDriverForm />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/cars" element={<CarListing />} />
  //       <Route path="/blogs" element={<Blog />} />
  //       <Route path="/blogs/:slug" element={<BlogDetails />} />
  //       <Route path="/Signin" element={<SlidingAuth />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/findcar" element={<FindCar />} />
  //       {/* <Route path="carslist" element={<CarsList />} /> */}

  //       <Route path="/UserPanel" element={<UserPanel />}>
  //   <Route path="cars/:id" element={<CarDetails />} />
  //   <Route path="booked-car/:booking_id" element={<BookedCarPage />} />
  //   <Route path="carslist" element={<CarsList />} />
  //   <Route path="my-bookings" element={<MyBookings />} />
  //   <Route path="contact" element={<Contact />} />
  //   <Route path="cancel-booking/:id" element={<CancelBookingPage />} />
    
  // </Route>

  //       {/* Admin Panel Nested Routes */}
  //       <Route path="/AdminPanel" element={<AdminPanel />}>
  //         <Route path="" element={<BookingTable />} />
  //         <Route path="booking-table" element={<BookingTable />} />
  //         <Route path="contact-table" element={<ContactTable />} />
  //         <Route path="driver-table" element={<DriverTable />} />
  //         <Route path="users" element={<UserTable />} />
  //         <Route path="car-form" element={<CarForm />} />
  //       </Route>

  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   );
  // };

  // export default Routers;


  import React from "react";
  import { Routes, Route, Navigate } from "react-router-dom";
  import Home from "../pages/Home";
  import About from "../pages/About";
  import CarTypes from "../pages/CarTypes";
  import CarsList from "../pages/CarsList";
  import CarDetails from "../pages/CarDetails";
  import Blog from "../pages/Blog";
  import BlogDetails from "../pages/BlogDetails";
  import NotFound from "../pages/NotFound";
  import Contact from "../pages/Contact";
  import SlidingAuth from "../pages/SignIn";
  import BecomeDriverForm from "../components/UI/BecomeDriverForm";
  import CarListing from "../pages/CarTypes";
  import CarForm from "../components/Admin/CarForm";
  // import CarForm from "../pages/CarForm";
  import CarCard from "../pages/carcards";  // Ensure the correct path and filename
  // import Userdash from "../pages/UserDashboard";  // Ensure correct naming and path
  import DriverTable from "../components/Admin/DriverTable";
  import UserTable from "../components/Admin/UserTable";
  import BookingTable from "../components/Admin/BookingTable";
  import ContactTable from "../components/Admin/ContactTable";
  import BookedCarPage from "../components/UI/BookedCarPage";
  import CancelBookingPage from "../components/UI/CancelBookingPage";
  import AdminPanel from "../pages/AdminPanel";
  import UserPanel from "../pages/UserPanel";
  import FindCar from "../components/UI/FindCarForm";
  import MyBookings from "../pages/MyBookings";
  import ProtectedRoute from "./ProtectedRoute";
  import AdminSidebar from "../pages/adminpanelsample";
  import UserPanelDash from "../pages/UserPanelDash";
  import DriverApplication from "../components/Admin/DriverApplication"







  const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<AdminSidebar />} /> */}
        <Route path="/driver-form" element={<BecomeDriverForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/signin" element={<SlidingAuth />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/findcar" element={<FindCar />} />
        {/* <Route path="/userdriver" element={<FindCar />} /> */}

  
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/UserPanel" element={<UserPanel />}>
            <Route path="cars/:id" element={<CarDetails />} />
            <Route path="" element={<UserPanelDash />} />
            <Route path="booked-car/:booking_id" element={<BookedCarPage />} />
            <Route path="carslist" element={<CarsList />} />
            <Route path="my-bookings" element={<MyBookings />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cancel-booking/:id" element={<CancelBookingPage />} />
          </Route>
          
          {/* Admin Panel Nested Routes */}
          <Route path="/AdminPanel" element={<AdminPanel />}>
          {/* <Route path="/AdminPanel" element={<AdminSidebar />}> */}
            <Route path="" element={<BookingTable />} />
            <Route path="booking-table" element={<BookingTable />} />
            <Route path="contact-table" element={<ContactTable />} />
            <Route path="driver-table" element={<DriverTable />} />
            <Route path="driver-application" element={<DriverApplication />} />
            <Route path="users" element={<UserTable />} />
            <Route path="car-form" element={<CarForm />} />
          </Route>
        </Route>
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default Routers;

  // import React from 'react';
  // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
  // import Home from '../pages/Home';
  // import About from '../pages/About';
  // import CarListing from '../pages/CarTypes';
  // import CarDetails from '../pages/CarDetails';
  // import Blog from '../pages/Blog';
  // import BlogDetails from '../pages/BlogDetails';
  // import NotFound from '../pages/NotFound';
  // import Contact from '../pages/Contact';
  // import SlidingAuth from '../pages/SignIn';
  // import BecomeDriverForm from '../components/UI/BecomeDriverForm';
  // import CarForm from '../components/Admin/CarForm';
  // import DriverTable from '../components/Admin/DriverTable';
  // import UserTable from '../components/Admin/UserTable';
  // import BookingTable from '../components/Admin/BookingTable';
  // import ContactTable from '../components/Admin/ContactTable';
  // import BookedCarPage from '../components/UI/BookedCarPage';
  // import CancelBookingPage from '../components/UI/CancelBookingPage';
  // import AdminPanel from '../pages/AdminPanel';
  // import UserPanel from '../pages/UserPanel';
  // import FindCar from '../components/UI/FindCarForm';
  // import MyBookings from '../pages/MyBookings';
  // import ProtectedRoute from './ProtectedRoute';
  // import Layout from '../components/Layout/Layout';
  
  // const Routers = () => (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Navigate to="/home" />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/DriverForm" element={<BecomeDriverForm />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/cars" element={<CarListing />} />
  //         <Route path="/blogs" element={<Blog />} />
  //         <Route path="/blogs/:slug" element={<BlogDetails />} />
  //         <Route path="/Signin" element={<SlidingAuth />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/findcar" element={<FindCar />} />
          
  //         <Route element={<ProtectedRoute />}>
  //           <Route path="/UserPanel" element={<UserPanel />}>
  //             <Route path="cars/:id" element={<CarDetails />} />
  //             <Route path="booked-car/:booking_id" element={<BookedCarPage />} />
  //             <Route path="carslist" element={<CarListing />} />
  //             <Route path="my-bookings" element={<MyBookings />} />
  //             <Route path="contact" element={<Contact />} />
  //             <Route path="cancel-booking/:id" element={<CancelBookingPage />} />
  //           </Route>
  //           <Route path="/AdminPanel" element={<AdminPanel />}>
  //             <Route index element={<BookingTable />} />
  //             <Route path="booking-table" element={<BookingTable />} />
  //             <Route path="contact-table" element={<ContactTable />} />
  //             <Route path="driver-table" element={<DriverTable />} />
  //             <Route path="users" element={<UserTable />} />
  //             <Route path="car-form" element={<CarForm />} />
  //           </Route>
  //         </Route>
  //         <Route path="*" element={<NotFound />} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
  
  // export default Routers;
  


























// // Routers.js
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import CarListing from "../pages/CarTypes";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import Contact from "../pages/Contact";
// import SlidingAuth from "../pages/SignIn";
// import BecomeDriverForm from "../components/UI/BecomeDriverForm";
// import CarDetails from "../pages/CarDetails";
// import CarsList from "../pages/CarsList";
// import BookedCarPage from "../components/UI/BookedCarPage";
// import CancelBookingPage from "../components/UI/CancelBookingPage";
// import AdminPanel from "../pages/AdminPanel";
// import UserPanel from "../pages/UserPanel";
// import FindCar from "../components/UI/FindCarForm";
// import MyBookings from "../pages/MyBookings";
// import NotFound from "../pages/NotFound";
// import ProtectedRoute from "./ProtectedRoute";
// import CarForm from "../components/Admin/CarForm";
// import DriverTable from "../components/Admin/DriverTable";
// import UserTable from "../components/Admin/UserTable";
// import BookingTable from "../components/Admin/BookingTable";
// import ContactTable from "../components/Admin/ContactTable";

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/DriverForm" element={<BecomeDriverForm />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/cars" element={<CarListing />} />
//       <Route path="/blogs" element={<Blog />} />
//       <Route path="/blogs/:slug" element={<BlogDetails />} />
//       <Route path="/Signin" element={<SlidingAuth />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/findcar" element={<FindCar />} />
//       <Route path="/UserPanel" element={<ProtectedRoute element={<UserPanel />}/>}>
//         <Route path="cars/:id" element={<CarDetails />} />
//         <Route path="booked-car/:booking_id" element={<BookedCarPage />} />
//         <Route path="carslist" element={<CarsList />} />
//         <Route path="my-bookings" element={<MyBookings />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="cancel-booking/:id" element={<CancelBookingPage />} />
//       </Route>
//       <Route path="/AdminPanel" element={<ProtectedRoute element={<AdminPanel />}/>}>
//         <Route path="" element={<BookingTable />} />
//         <Route path="booking-table" element={<BookingTable />} />
//         <Route path="contact-table" element={<ContactTable />} />
//         <Route path="driver-table" element={<DriverTable />} />
//         <Route path="users" element={<UserTable />} />
//         <Route path="car-form" element={<CarForm />} />
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Routers;
