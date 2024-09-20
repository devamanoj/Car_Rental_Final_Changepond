import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

// import "../../styles/vehicle-card.css"; // Add styles if needed

const VehicleCard = (props) => {
  const { imgURL,type, description, examples } = props.item;

  return (
    <Col lg="4" md="6" sm="12" className="mb-4">
      <Card className="vehicle__card">
        <CardBody>
          <div className="car__img">
            <img src={imgURL} alt="" className="w-100" />
          </div>
          <h5 className="vehicle__type">{type}</h5>
          <p className="vehicle__description">{description}</p>
          <p className="vehicle__examples">
            <strong>Examples: </strong>{examples}
          </p>
          <button >
            <Link to="/carslist">
             Book
            </Link>
          </button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VehicleCard;
