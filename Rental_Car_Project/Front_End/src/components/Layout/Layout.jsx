// import React, { Fragment } from "react";
// import { Route } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Routers from "../../routers/Routers";
// import { AuthProvider } from '../../pages/authContext';

// const Layout = () => {
//   return (
    
//     <Fragment>
      
//       <Header />
//       <div>
//       <AuthProvider>
//         <Routers />
//       </AuthProvider>
//       </div>
//       <Footer />
//     </Fragment>
//   );
// };

// export default Layout;




// import React, { Fragment } from "react";
// import Routers from "../../routers/Routers";
// import { AuthProvider } from '../../pages/authContext';

// const Layout = () => {
//   return (
//     <Fragment>
//       <AuthProvider>
//         <Routers />
//       </AuthProvider>
//     </Fragment>
//   );
// };

// export default Layout;

// Layout.jsx



import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { AuthProvider } from '../../pages/authContext';

const Layout = () => {
  const location = useLocation();

  const hideHeaderFooter = location.pathname.includes('/AdminPanel') || location.pathname.includes('/UserPanel');

  return (
    <Fragment>
      {!hideHeaderFooter && <Header />}
      <div>
        <AuthProvider>
          <Routers />
          {/* <Outlet /> */}
        </AuthProvider>
        
          {/* <Routers /> */}
          {/* <Outlet /> */}
      </div>
      {!hideHeaderFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;


// Layout.js

// import React, { Fragment, useMemo } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const Layout = () => {
//   const location = useLocation();

//   const hideHeaderFooter = useMemo(() => (
//     location.pathname.includes('/admin-panel') || location.pathname.includes('/user-panel')
//   ), [location.pathname]);

//   return (
//     <Fragment>
//       {!hideHeaderFooter && <Header />}
//       <div>
//         <Outlet /> {/* Render child routes */}
//       </div>
//       {!hideHeaderFooter && <Footer />}
//     </Fragment>
//   );
// };

// export default Layout;
