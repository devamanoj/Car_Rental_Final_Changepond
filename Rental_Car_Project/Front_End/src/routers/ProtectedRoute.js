// // ProtectedRoute.js
// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../pages/authContext"; // Ensure this hook is available and provides authentication status

// const ProtectedRoute = ({ element, ...rest }) => {
//   const { isAuthenticated, user } = useAuth(); // Adjust based on how authentication status is provided

//   // Customize this condition based on your authentication logic
//   const isAdminRoute = rest.path.startsWith("/AdminPanel");
//   const isUserRoute = rest.path.startsWith("/UserPanel");

//   // Check for admin or user authentication
//   if (isAdminRoute && !user?.isAdmin) {
//     return <Navigate to="/Signin" />
//   }
//   if (isUserRoute && !user?.isUser) {
//     return <Navigate to="/Signin" />;
//   }

//   return <Route {...rest} element={element} />;
// };

// export default ProtectedRoute;



// // ProtectedRoute.js
// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import Layout from '../components/Layout/Layout';


// const ProtectedRoute = () => {
//   const token = localStorage.getItem('accessToken'); // Adjust the key based on your storage

//   // You can add more complex validation for the token here if needed
//   if (!token) {
//     // Redirect to login page if not authenticated
//     return <Navigate to="/Signin" replace />;
//   }

//   // Rend<er the child routes if authenticated
// //   return <MainLayout/>;
//   return <Layout/>;
// };

// export default ProtectedRoute;


// ProtectedRoute.js





import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('access'); // Adjust the key based on your storage

  if (!token) {
    return <Navigate to="/signin" replace />; // Redirect if not authenticated
  }

  return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;
