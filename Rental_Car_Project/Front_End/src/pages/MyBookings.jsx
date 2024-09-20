import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('access');
        const user_id = localStorage.getItem('user_id');
        
        if (!user_id) {
          throw new Error('User ID not found');
        }

        const response = await axios.get(`http://127.0.0.1:8000/api/bookings/?user=${user_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('There was an error fetching the bookings!', error);
        setError('There was an error fetching your bookings.');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = (bookingId, status) => {
    if (status === 'canceled') {
      window.alert('Booking already cancelled');
      return;
    }

    // Navigate to the cancel booking page
    navigate(`/UserPanel/cancel-booking/${bookingId}`);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <Helmet title="My Bookings">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2>My Bookings</h2>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <Card key={booking.booking_id} className="mb-3">
                    <CardBody>
                      <CardTitle tag="h5">Booking ID: {booking.booking_id}</CardTitle>
                      <CardText>
                        <strong>Car ID:</strong> {booking.car}<br />
                        <strong>Booking Date:</strong> {booking.booking_date}<br />
                        <strong>Pickup Date:</strong> {booking.pickup_date}<br />
                        <strong>Return Date:</strong> {booking.return_date}<br />
                        <strong>Status: </strong> {booking.status}
                      </CardText>
                      <Button
                        color="danger"
                        onClick={() => handleCancelBooking(booking.booking_id, booking.status)}
                      >
                        Cancel Booking
                      </Button>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <p>You have no bookings yet.</p>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default MyBookings;
