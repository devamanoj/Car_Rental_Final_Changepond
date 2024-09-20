
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SlidingAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  // State for form data
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '', // Ensure confirmPassword is managed
    first_name: '',
    last_name: '',
  });

  const [signInData, setSignInData] = useState({
    username: '',  // Changed to username
    password: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    signUp: {},
    signIn: {},
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateSignUp = () => {
    const { username, email, password, confirmPassword, first_name, last_name } = signUpData;
    const newErrors = {};

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username) newErrors.username = 'Username is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must contain at least 1 capital letter, 1 small letter, 1 number, 1 special character, and be at least 8 characters long';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!first_name) newErrors.first_name = 'First Name is required';
    if (!last_name) newErrors.last_name = 'Last Name is required';

    setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateSignIn = () => {
    const { username, password } = signInData;
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (validateSignUp()) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/users/', signUpData);
        console.log('Sign Up Response:', response.data);
        
        // Clear form data
        setSignUpData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          first_name: '',
          last_name: '',
        });
        window.alert('User Register successfully!!')
        
        // Clear errors
        setErrors((prevErrors) => ({ ...prevErrors, signUp: {} }));
        
        // Toggle form view to Sign In
        toggleForm();
      } catch (error) {
        console.error('Sign Up Error:', error.response.data);
        setErrors((prevErrors) => ({ 
          ...prevErrors, 
          signUp: error.response.data 
        }));
      }
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (validateSignIn()) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/token/', signInData);
        if (response.status === 200) {
          const { access, refresh, user_id } = response.data;
          
          localStorage.setItem('refresh', refresh);
          localStorage.setItem('access', access);
          localStorage.setItem('user_id', user_id);

          const token = localStorage.getItem('access');
          const user = localStorage.getItem('user_id');
          const userDetailsResponse = await axios.get('http://127.0.0.1:8000/api/users/', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          // Clear form data
          setSignInData({
            username: '',
            password: '',
          });
          
          // Clear errors
          setErrors((prevErrors) => ({ ...prevErrors, signIn: {} }));

          if (user === '1') {
            navigate('/AdminPanel');  // Redirect to AdminPanel
          } else {
            navigate('/UserPanel');  // Redirect to UserPanel
          }
        } else {
          console.error('Unexpected response status:', response.status);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: { general: 'Unexpected response from the server.' }
          }));
        }
      } catch (error) {
        if (error.response) {
          console.error('Sign In Error:', error.response.data);
          
          if (error.response.status === 401) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              signIn: { general: 'Invalid username or password. Please try again.' }
            }));
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              signIn: error.response.data
            }));
          }
        } else if (error.request) {
          console.error('Sign In Error: No response received', error.request);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: { general: 'No response received from the server.' }
          }));
        } else {
          console.error('Sign In Error:', error.message);
          setErrors((prevErrors) => ({
            ...prevErrors,
            signIn: { general: error.message }
          }));
        }
      }
    }
  };



  return (
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f6f5f7',
        margin: 0,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
          position: 'relative',
          overflow: 'hidden',
          width: '768px',
          maxWidth: '100%',
          minHeight: '480px',
          transition: 'all 0.6s ease-in-out',
          display: 'flex',
        }}
        className={isSignIn ? '' : 'right-panel-active'}
      >
        {/* Sign Up Form */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            zIndex: isSignIn ? 1 : 2,
            opacity: isSignIn ? 0 : 1,
            pointerEvents: isSignIn ? 'none' : 'auto',
            transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
            transition: 'all 0.6s ease-in-out',
            background: '#fff',
            padding: '20px',
          }}
        >
<form
  onSubmit={handleSignUpSubmit}
  style={{
    textAlign: 'center',
    maxHeight: '400px', // Set a maximum height for the form container
    overflowY: 'auto', // Enable vertical scrolling
    padding: '20px',
  }}
>
  <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>

  <input
    type="text"
    name="username"
    value={signUpData.username}
    onChange={handleSignUpChange}
    placeholder="Username"
    style={{ margin: '10px 0', padding: '10px', width: '80%' }}
  />
  {errors.signUp.username && <p style={{ color: 'red' }}>{errors.signUp.username}</p>}

  <input
    type="email"
    name="email"
    value={signUpData.email}
    onChange={handleSignUpChange}
    placeholder="Email"
    style={{ margin: '10px 0', padding: '10px', width: '80%' }}
  />
  {errors.signUp.email && <p style={{ color: 'red' }}>{errors.signUp.email}</p>}

  <input
    type="password"
    name="password"
    value={signUpData.password}
    onChange={handleSignUpChange}
    placeholder="Password"
    style={{ margin: '10px 0', padding: '10px', width: '80%' }}
  />
  {errors.signUp.password && <p style={{ color: 'red' }}>{errors.signUp.password}</p>}

  <input
    type="password"
    name="confirmPassword"
    value={signUpData.confirmPassword}
    onChange={handleSignUpChange}
    placeholder="Confirm Password"
    style={{ margin: '10px 0', padding: '10px', width: '80%' }}
  />
  {errors.signUp.confirmPassword && <p style={{ color: 'red' }}>{errors.signUp.confirmPassword}</p>}

  <input
    type="text"
    name="first_name"
    value={signUpData.first_name}
    onChange={handleSignUpChange}
    placeholder="First Name"
    style={{ margin: '10px 0', padding: '10px', width: '80%' }}
  />
  {errors.signUp.first_name && <p style={{ color: 'red' }}>{errors.signUp.first_name}</p>}

  <input
    type="text"
    name="last_name"
    value={signUpData.last_name}
    onChange={handleSignUpChange}
    placeholder="Last Name"
    style={{ margin: '10px 0', padding: '10px', width: '80%' }}
  />
  {errors.signUp.last_name && <p style={{ color: 'red' }}>{errors.signUp.last_name}</p>}

  <button
    type="submit"
    style={{
      borderRadius: '20px',
      backgroundColor: '#000d6b',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: 'bold',
      padding: '12px 45px',
      textTransform: 'uppercase',
      marginTop: '20px',
      border: 'none',
    }}
  >
    Sign Up
  </button>
</form>


          </div>
  
          {/* Sign In Form */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              zIndex: 2,
              opacity: isSignIn ? 1 : 0,
              pointerEvents: isSignIn ? 'auto' : 'none',
              transform: isSignIn ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 0.6s ease-in-out',
              background: '#fff',
              padding: '20px',
            }}
          >
            <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
              <h1 style={{ fontWeight: 'bold', margin: 0 }}>Sign In</h1>
              <input
                type="text"
                name="username"
                value={signInData.username}
                onChange={handleSignInChange}
                placeholder="Username"
                style={{ margin: '10px 0', padding: '10px', width: '80%' }}
              />
              {errors.signIn.username && <p style={{ color: 'red' }}>{errors.signIn.username}</p>}
              <input
                type="password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
                placeholder="Password"
                style={{ margin: '10px 0', padding: '10px', width: '80%' }}
              />
              {errors.signIn.password && <p style={{ color: 'red' }}>{errors.signIn.password}</p>}
              <button
                type="submit"
                style={{
                  borderRadius: '20px',
                  border: '1px solid #000d6b',
                  backgroundColor: '#000d6b',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '12px 45px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'transform 80ms ease-in',
                  marginTop: '20px',
                  border: 'none', // Remove border to avoid double border effect
                }}
              >
                Sign In
              </button>
              {errors.signIn.general && <p style={{ color: 'red' }}>{errors.signIn.general}</p>}
            </form>
          </div>
  
          {/* Side Panels */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '50%',
              height: '100%',
              overflow: 'hidden',
              zIndex: 100,
              transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.6s ease-in-out',
            }}
          >
            <div
              style={{
                // background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
                background: 'linear-gradient(to right,#000d6b, #00297a)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '0 0',
                color: '#ffffff',
                position: 'relative',
                left: '-100%',
                height: '100%',
                width: '200%',
                transform: isSignIn ? 'translateX(0)' : 'translateX(50%)',
                transition: 'transform 0.6s ease-in-out',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '0 40px',
                  textAlign: 'center',
                  top: 0,
                  height: '100%',
                  width: '50%',
                  transform: isSignIn ? 'translateX(-20%)' : 'translateX(0)',
                  transition: 'transform 0.6s ease-in-out',
                }}
              >
                <h1>Welcome Back!</h1>
                <p>To keep connected with us, please login with your personal info</p>
                <button
                  type="button"
                  onClick={toggleForm}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #ffffff',
                    backgroundColor: '#ffffff',
                    color: '#000d6b',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '12px 45px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'transform 80ms ease-in',
                  }}
                >
                  Sign In
                </button>
              </div>
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  padding: '0 40px',
                  textAlign: 'center',
                  top: 0,
                  height: '100%',
                  width: '50%',
                  right: 0,
                  transform: isSignIn ? 'translateX(0)' : 'translateX(20%)',
                  transition: 'transform 0.6s ease-in-out',
                }}
              >
                <h1>Hello, Friend!</h1>
                <p>Enter your details and start your journey with us</p>
                <button
                  type="button"
                  onClick={toggleForm}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #ffffff',
                    backgroundColor: '#ffffff',
                    color: '#000d6b',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '12px 45px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'transform 80ms ease-in',
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SlidingAuth;
  




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SlidingAuth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   // State for form data
//   const [signUpData, setSignUpData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '', // Ensure confirmPassword is managed
//     first_name: '',
//     last_name: '',
//   });

//   const [signInData, setSignInData] = useState({
//     username: '',  // Changed to username
//     password: '',
//   });

//   // State for validation errors
//   const [errors, setErrors] = useState({
//     signUp: {},
//     signIn: {},
//   });

//   const navigate = useNavigate();

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const validateSignUp = () => {
//     const { username, email, password, confirmPassword, first_name, last_name } = signUpData;
//     const newErrors = {};

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!username) newErrors.username = 'Username is required';
//     if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';

//     if (!password) {
//       newErrors.password = 'Password is required';
//     } else if (!passwordRegex.test(password)) {
//       newErrors.password = 'Password must contain at least 1 capital letter, 1 small letter, 1 number, 1 special character, and be at least 8 characters long';
//     }

//     if (!confirmPassword) {
//       newErrors.confirmPassword = 'Confirm Password is required';
//     } else if (password !== confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!first_name) newErrors.first_name = 'First Name is required';
//     if (!last_name) newErrors.last_name = 'Last Name is required';

//     setErrors((prevErrors) => ({ ...prevErrors, signUp: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateSignIn = () => {
//     const { username, password } = signInData;
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors((prevErrors) => ({ ...prevErrors, signIn: newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignUp()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/users/', signUpData);
//         console.log('Sign Up Response:', response.data);
//         toggleForm();  // Switch to Sign In form
//       } catch (error) {
//         console.error('Sign Up Error:', error.response.data);
//         setErrors((prevErrors) => ({ 
//           ...prevErrors, 
//           signUp: error.response.data
//         }));
//       }
//     }
//   };

//   const handleSignInSubmit = async (e) => {
//     e.preventDefault();
//     if (validateSignIn()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/token/', signInData);
//         if (response.status === 200) {
//           const { access, refresh, user_id } = response.data;
          
//           localStorage.setItem('refresh', refresh);
//           localStorage.setItem('access', access);
//           localStorage.setItem('user_id', user_id);

//           const user = localStorage.getItem('user_id');
//           if (user === '1') {
//             navigate('/AdminPanel');  // Redirect to AdminPanel
//           } else {
//             navigate('/UserPanel');  // Redirect to UserPanel
//           }
//         } else {
//           console.error('Unexpected response status:', response.status);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: { general: 'Unexpected response from the server.' }
//           }));
//         }
//       } catch (error) {
//         if (error.response) {
//           console.error('Sign In Error:', error.response.data);
          
//           if (error.response.status === 401) {
//             setErrors((prevErrors) => ({
//               ...prevErrors,
//               signIn: { general: 'Invalid username or password. Please try again.' }
//             }));
//           } else {
//             setErrors((prevErrors) => ({
//               ...prevErrors,
//               signIn: error.response.data
//             }));
//           }
//         } else if (error.request) {
//           console.error('Sign In Error: No response received', error.request);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: { general: 'No response received from the server.' }
//           }));
//         } else {
//           console.error('Sign In Error:', error.message);
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             signIn: { general: error.message }
//           }));
//         }
//       }
//     }
//   };

//   return (
// <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f0f0' }}>
//   <div style={{ width: '768px', height: '480px', position: 'relative', background: '#fff', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}>
    
//     {/* Sign Up Form */}
//     <div
//       style={{
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         width: '50%',
//         height: '100%',
//         zIndex: isSignIn ? 1 : 2,
//         opacity: isSignIn ? 0 : 1,
//         pointerEvents: isSignIn ? 'none' : 'auto',
//         transform: isSignIn ? 'translateX(100%)' : 'translateX(0)',
//         transition: 'all 0.6s ease-in-out',
//         background: '#fff',
//         padding: '20px',
//       }}
//     >
//       <form onSubmit={handleSignUpSubmit} style={{ textAlign: 'center' }}>
//         <h1 style={{ fontWeight: 'bold', margin: 0 }}>Create Account</h1>
//         <input
//           type="text"
//           placeholder="First Name"
//           style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//         />
//         <button
//           type="submit"
//           style={{
//             margin: '20px 0',
//             padding: '12px 45px',
//             border: 'none',
//             background: '#000d6b',
//             color: '#fff',
//             fontSize: '12px',
//             fontWeight: 'bold',
//             letterSpacing: '1px',
//             textTransform: 'uppercase',
//             transition: 'transform 80ms ease-in',
//           }}
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>

//     {/* Sign In Form */}
//     <div
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '50%',
//         height: '100%',
//         zIndex: isSignIn ? 2 : 1,
//         opacity: isSignIn ? 1 : 0,
//         pointerEvents: isSignIn ? 'auto' : 'none',
//         transform: isSignIn ? 'translateX(0)' : 'translateX(-100%)',
//         transition: 'all 0.6s ease-in-out',
//         background: '#fff',
//         padding: '20px',
//       }}
//     >
//       <form onSubmit={handleSignInSubmit} style={{ textAlign: 'center' }}>
//         <h1 style={{ fontWeight: 'bold', margin: 0 }}>Sign In</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           style={{ margin: '10px 0', padding: '10px', width: '80%' }}
//         />
//         <button
//           type="submit"
//           style={{
//             margin: '20px 0',
//             padding: '12px 45px',
//             border: 'none',
//             background: '#000d6b',
//             color: '#fff',
//             fontSize: '12px',
//             fontWeight: 'bold',
//             letterSpacing: '1px',
//             textTransform: 'uppercase',
//             transition: 'transform 80ms ease-in',
//           }}
//         >
//           Sign In
//         </button>
//       </form>
//     </div>

//     {/* Overlay */}
//     <div
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: '50%',
//         width: '50%',
//         height: '100%',
//         background: 'linear-gradient(to right, #000d6b, #00297a)',
//         zIndex: 100,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         padding: '20px',
//         boxSizing: 'border-box',
//       }}
//     >
//       <div style={{ textAlign: 'center' }}>
//         <h1 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
//           {isSignIn ? 'Welcome Back!' : 'Hello, Friend!'}
//         </h1>
//         <p>
//           {isSignIn
//             ? 'To keep connected with us please login with your personal info'
//             : 'Enter your personal details and start your journey with us'}
//         </p>
//         <button
//           onClick={toggleForm}
//           style={{
//             marginTop: '20px',
//             padding: '12px 45px',
//             border: '1px solid #fff',
//             background: 'none',
//             color: '#fff',
//             fontSize: '12px',
//             fontWeight: 'bold',
//             letterSpacing: '1px',
//             textTransform: 'uppercase',
//             transition: 'transform 80ms ease-in',
//           }}
//         >
//           {isSignIn ? 'Sign Up' : 'Sign In'}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default SlidingAuth;