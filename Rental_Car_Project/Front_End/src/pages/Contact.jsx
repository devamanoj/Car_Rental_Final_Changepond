// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Your Name" type="text" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input placeholder="Email" type="email" />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea"
//                   ></textarea>
//                 </FormGroup>

//                 <button className=" contact__btn" type="submit">
//                   Send Message
//                 </button>
//               </Form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   123 ZindaBazar, Sylhet, Bangladesh
//                 </p>
//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+88683896366</p>
//                 </div>

//                 <div className=" d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">example@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className=" d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i class={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import axios from "axios";

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/contacts/", {
//         name,
//         email,
//         message,
//       });
//       setResponseMessage(response.data.message);
//     } catch (error) {
//       setResponseMessage("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form onSubmit={handleSubmit}>
//                 <FormGroup className="contact__form">
//                   <Input
//                     placeholder="Your Name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input
//                     placeholder="Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     required
//                   ></textarea>
//                 </FormGroup>

//                 <button className="contact__btn" type="submit">
//                   Send Message
//                 </button>
//               </Form>
//               {/* {responseMessage && (
//                 <p className="response__message">{responseMessage}</p>
//               )} */}
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   123 Changepond, Siruseri, Chennai
//                 </p>
//                 <div className="d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+9876543210</p>
//                 </div>

//                 <div className="d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">example@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className="d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i className={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;


//fina;l
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import axios from "axios";

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};
//     if (!name.trim()) errors.name = "Name is required";
//     if (!email.trim()) errors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
//     if (!message.trim()) errors.message = "Message is required";

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/contacts/", {
//         name,
//         email,
//         message,
//       });
//       setResponseMessage(response.data.message);
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       setResponseMessage("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form onSubmit={handleSubmit}>
//                 <FormGroup className="contact__form">
//                   <Input
//                     placeholder="Your Name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     invalid={!!errors.name}
//                   />
//                   {errors.name && <p className="text-danger">{errors.name}</p>}
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input
//                     placeholder="Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     invalid={!!errors.email}
//                   />
//                   {errors.email && <p className="text-danger">{errors.email}</p>}
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     invalid={!!errors.message}
//                   ></textarea>
//                   {errors.message && <p className="text-danger">{errors.message}</p>}
//                 </FormGroup>

//                 <button className="contact__btn" type="submit">
//                   Send Message
//                 </button>

//                 {/* {responseMessage && <p className="response__message">{responseMessage}</p>} */}
//               </Form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   123 Changepond, Siruseri, Chennai
//                 </p>
//                 <div className="d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+9876543210</p>
//                 </div>

//                 <div className="d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">example@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className="d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i className={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import axios from "axios";

// import "../styles/contact.css";

// const socialLinks = [
//   {
//     url: "#",
//     icon: "ri-facebook-line",
//   },
//   {
//     url: "#",
//     icon: "ri-instagram-line",
//   },
//   {
//     url: "#",
//     icon: "ri-linkedin-line",
//   },
//   {
//     url: "#",
//     icon: "ri-twitter-line",
//   },
// ];

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};
//     if (!name.trim()) errors.name = "Name is required";
//     if (!email.trim()) errors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
//     if (!message.trim()) errors.message = "Message is required";

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/contacts/", {
//         name,
//         email,
//         message,
//       });
//       setResponseMessage(response.data.message);
//       setName("");
//       setEmail("");
//       setMessage("");
//       window.alert('Thanks for you feedback')
//     } catch (error) {
//       setResponseMessage("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <Helmet title="Contact">
//       <CommonSection title="Contact" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="7" md="7">
//               <h6 className="fw-bold mb-4">Get In Touch</h6>

//               <Form onSubmit={handleSubmit}>
//                 <FormGroup className="contact__form">
//                   <Input
//                     placeholder="Your Name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     invalid={!!errors.name}
//                   />
//                   {errors.name && <p className="text-danger">{errors.name}</p>}
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <Input
//                     placeholder="Email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     invalid={!!errors.email}
//                   />
//                   {errors.email && <p className="text-danger">{errors.email}</p>}
//                 </FormGroup>
//                 <FormGroup className="contact__form">
//                   <textarea
//                     rows="5"
//                     placeholder="Message"
//                     className="textarea"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     invalid={!!errors.message}
//                   ></textarea>
//                   {errors.message && <p className="text-danger">{errors.message}</p>}
//                 </FormGroup>

//                 <button className="contact__btn" type="submit">
//                   Send Message
//                 </button>

//                 {/* {responseMessage && <p className="response__message">{responseMessage}</p>} */}
//               </Form>
//             </Col>

//             <Col lg="5" md="5">
//               <div className="contact__info">
//                 <h6 className="fw-bold">Contact Information</h6>
//                 <p className="section__description mb-0">
//                   123 Changepond, Siruseri, Chennai
//                 </p>
//                 <div className="d-flex align-items-center gap-2">
//                   <h6 className="fs-6 mb-0">Phone:</h6>
//                   <p className="section__description mb-0">+9876543210</p>
//                 </div>

//                 <div className="d-flex align-items-center gap-2">
//                   <h6 className="mb-0 fs-6">Email:</h6>
//                   <p className="section__description mb-0">example@gmail.com</p>
//                 </div>

//                 <h6 className="fw-bold mt-4">Follow Us</h6>

//                 <div className="d-flex align-items-center gap-4 mt-3">
//                   {socialLinks.map((item, index) => (
//                     <Link
//                       to={item.url}
//                       key={index}
//                       className="social__link-icon"
//                     >
//                       <i className={item.icon}></i>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios";

import "../styles/contact.css";

const socialLinks = [
  { url: "#", icon: "ri-facebook-line" },
  { url: "#", icon: "ri-instagram-line" },
  { url: "#", icon: "ri-linkedin-line" },
  { url: "#", icon: "ri-twitter-line" },
];

const Contact = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Improved email validation function
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) errors.name = "name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!validateEmail(email)) errors.email = "Valid email is required";
    if (!message.trim()) errors.message = "Message is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/contacts/", {
        name,
        email,
        message,
      });
      setResponseMessage(response.data.message);
      setUsername("");
      setEmail("");
      setMessage("");
      window.alert('Thanks for your feedback');
      
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
      
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    value={name}
                    onChange={(e) => setUsername(e.target.value)}
                    invalid={!!errors.username}
                  />
                  {errors.username && <p className="text-danger">{errors.username}</p>}
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Provide Your Feedback"
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    invalid={!!errors.message}
                  ></textarea>
                  {errors.message && <p className="text-danger">{errors.message}</p>}
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Send Message
                </button>

                {/* {responseMessage && <p className="response__message">{responseMessage}</p>} */}
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  123 Changepond, Siruseri, Chennai
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+9876543210</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">example@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url} key={index} className="social__link-icon">
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
