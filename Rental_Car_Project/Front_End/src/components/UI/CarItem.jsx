// import React from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../../styles/car-item.css";

// const CarItem = (props) => {
//   const { imgUrl, model, carName, automatic, speed, price } = props.item;

//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={imgUrl} alt="" className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{carName}</h4>
//           <h6 className="rent__price text-center mt-">
//             ${price}.00 <span>/ Day</span>
//           </h6>

//           <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-car-line"></i> {model}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-settings-2-line"></i> {automatic}
//             </span>
//             <span className=" d-flex align-items-center gap-1">
//               <i class="ri-timer-flash-line"></i> {speed}
//             </span>
//           </div>

//           <button className=" w-50 car__item-btn car__btn-rent">
//             <Link to={`/cars/${carName}`}>Rent</Link>
//           </button>

//           <button className=" w-50 car__item-btn car__btn-details">
//             <Link to={`/cars/${carName}`}>Details</Link>
//           </button>
//         </div>
//       </div>
//     </Col>
//   );
// };

// export default CarItem;



//Final backup

// import React from "react";
// import { Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../../styles/car-item.css";
// import { Outlet } from 'react-router-dom';

// const CarItem = ({ item }) => {
//   const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available, car_id } = item;

//   return (
//     <Col lg="4" md="4" sm="6" className="mb-5">
//       <div className="car__item">
//         <div className="car__img">
//           <img src={img_url} alt={car_name} className="w-100" />
//         </div>

//         <div className="car__item-content mt-4">
//           <h4 className="section__title text-center">{car_name}</h4>
//           <h6 className="rent__price text-center mt-">
//             ${price} <span>/ Day</span>
//           </h6>

//           <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
//             <span className="d-flex align-items-center gap-1">
//               <i className="ri-car-line"></i> {seat_type}
//             </span>
//             <span className="d-flex align-items-center gap-1">
//               <i className="ri-settings-2-line"></i> {automatic ? 'Automatic' : 'Manual'}
//             </span>
//             <span className="d-flex align-items-center gap-1">
//               <i className="ri-timer-flash-line"></i> {speed} km/h
//             </span>
//           </div>

//           <button className="w-50 car__item-btn car__btn-rent">
//             <Link to={`/UserPanel/cars/${car_id}`}>Rent</Link>
//           </button>

//           <button className="w-50 car__item-btn car__btn-details">
//             <Link to={`/UserPanel/cars/${car_id}`}>Details</Link>
//           </button>
//           <Col xs={10}>
//             <Outlet /> {/* Renders the nested routes' components */}
//           </Col>
//         </div>
//       </div>
//     </Col>
//   );
// };

// export default CarItem;



import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { Outlet } from 'react-router-dom';

const CarItem = ({ item }) => {
  const { img_url, car_name, description, automatic, speed, price, seat_type, brand, rating, is_available, car_id } = item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item shadow-sm hover-effect">
        <div className="car__img">
          <img src={img_url} alt={car_name} className="w-100 img-hover-zoom" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{car_name}</h4>
          <h6 className="rent__price text-center mt-">
            ${price} <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {seat_type}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {automatic ? 'Automatic' : 'Manual'}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed} km/h
            </span>
          </div>

          <div className="d-flex">
            <button className="w-50 car__item-btn car__btn-rent">
              <Link to={`/UserPanel/cars/${car_id}`}>Rent</Link>
            </button>

            <button className="w-50 car__item-btn car__btn-details">
              <Link to={`/UserPanel/cars/${car_id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
      <Col xs={10}>
        <Outlet /> {/* Renders the nested routes' components */}
      </Col>
    </Col>
  );
};

export default CarItem;
