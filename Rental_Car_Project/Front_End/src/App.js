// App.js
import Layout from "./components/Layout/Layout";
import AdminSidebar from "./pages/adminpanelsample";


function App() {
  return <Layout />;
  // return <AdminSidebar />;
  
}

export default App;


// App.js

// // import { AuthProvider } from "./pages/authContext";

// function App() {
//   return (
//     <AuthProvider>
//       <Layout />
//     </AuthProvider>
//   );
// }

// export default App;




// App.js

// import React, { useState, useEffect } from 'react';
// import Layout from "./components/Layout/Layout";
// import Routers from "./routers/Routers";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check for authentication status in local storage
//     const token = localStorage.getItem('access');
//     setIsAuthenticated(!!token);
//   }, []);

//   return (
//     <Layout>
//       <Routers isAuthenticated={isAuthenticated} />
//     </Layout>
//   );
// }

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import CarListing from './pages/CarTypes';
// import CarDetails from './pages/CarDetails';
// import Blog from './pages/Blog';
// import BlogDetails from './pages/BlogDetails';
// import NotFound from './pages/NotFound';
// import Contact from './pages/Contact';
// import SlidingAuth from './pages/SignIn';
// import BecomeDriverForm from './components/UI/BecomeDriverForm';
// import DriverTable from './components/Admin/DriverTable';
// import UserTable from './components/Admin/UserTable';
// import BookingTable from './components/Admin/BookingTable';
// import ContactTable from './components/Admin/ContactTable';
// import BookedCarPage from './components/UI/BookedCarPage';
// import CancelBookingPage from './components/UI/CancelBookingPage';
// import AdminPanel from './pages/AdminPanel';
// import UserPanel from './pages/UserPanel';
// import FindCar from './components/UI/FindCarForm';
// import MyBookings from './pages/MyBookings';
// import ProtectedRoute from './routers/ProtectedRoute';
// import CarForm from './components/Admin/CarForm';
// import Layout from './components/Layout/Layout'; // Assuming you have a Layout component to wrap your pages

// const App = () => (
//   <Router>
//     <Layout>
//       <Routes>


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
//       </Routes>
//     </Layout>
//   </Router>
// );

// export default App;




// App.js

// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import CarListing from './pages/CarTypes';
// import CarDetails from './pages/CarDetails';
// import Blog from './pages/Blog';
// import BlogDetails from './pages/BlogDetails';
// import NotFound from './pages/NotFound';
// import Contact from './pages/Contact';
// import SlidingAuth from './pages/SignIn';
// import BecomeDriverForm from './components/UI/BecomeDriverForm';
// import DriverTable from './components/Admin/DriverTable';
// import UserTable from './components/Admin/UserTable';
// import BookingTable from './components/Admin/BookingTable';
// import ContactTable from './components/Admin/ContactTable';
// import BookedCarPage from './components/UI/BookedCarPage';
// import CancelBookingPage from './components/UI/CancelBookingPage';
// import AdminPanel from './pages/AdminPanel';
// import UserPanel from './pages/UserPanel';
// import FindCar from './components/UI/FindCarForm';
// import MyBookings from './pages/MyBookings';
// import ProtectedRoute from './routers/ProtectedRoute';
// import CarForm from './components/Admin/CarForm';
// import Layout from './components/Layout/Layout';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "cars", element: <CarListing /> },
//       { path: "blogs", element: <Blog /> },
//       { path: "blogs/:slug", element: <BlogDetails /> },
//       { path: "signin", element: <SlidingAuth /> },
//       { path: "contact", element: <Contact /> },
//       { path: "findcar", element: <FindCar /> },
//       { path: "driver-form", element: <BecomeDriverForm /> },
//       {
//         element: <ProtectedRoute />,
//         children: [
//           { path: "user-panel", element: <UserPanel /> },
//           { path: "cars/:id", element: <CarDetails /> },
//           { path: "booked-car/:booking_id", element: <BookedCarPage /> },
//           { path: "my-bookings", element: <MyBookings /> },
//           { path: "cancel-booking/:id", element: <CancelBookingPage /> },
//           {
//             path: "admin-panel",
//             element: <AdminPanel />,
//             children: [
//               { path: "booking-table", element: <BookingTable /> },
//               { path: "contact-table", element: <ContactTable /> },
//               { path: "driver-table", element: <DriverTable /> },
//               { path: "users", element: <UserTable /> },
//               { path: "car-form", element: <CarForm /> },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   { path: "*", element: <NotFound /> }, // Catch-all route for 404 errors
// ]);

// const App = () => <RouterProvider router={router} />;

// export default App;

