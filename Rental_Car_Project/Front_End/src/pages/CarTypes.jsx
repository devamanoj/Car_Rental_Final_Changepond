// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import CarItem from "../components/UI/CarItem";
// import VehicleCard from "../components/UI/CarTypes";
// import carData from "../assets/data/carData";
// import vehicles from "../assets/data/carTypesData";

// const CarListing = () => {
//   return (
//     <Helmet title="Cars">
//       <CommonSection title="Car Listing" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className=" d-flex align-items-center gap-3 mb-5">
//                 {/* <span className=" d-flex align-items-center gap-2">
//                   <i class="ri-sort-asc"></i> Sort By
//                 </span> */}

//                 {/* <select>
//                   <option>Select</option>
//                   <option value="low">Low to High</option>
//                   <option value="high">High to Low</option>
//                 </select> */}
//               </div>
//             </Col>

//             {/* {carData.map((item) => (
//               <CarItem item={item} key={item.id} />
//             ))} */}

//             {/* Render VehicleCard for each vehicle */}
//             {vehicles.map((item) => (
//               <VehicleCard item={item} key={item.id} />
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default CarListing;