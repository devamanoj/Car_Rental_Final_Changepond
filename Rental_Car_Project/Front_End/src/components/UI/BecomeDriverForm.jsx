import React, { useState, useEffect } from 'react';
// import './BecomeDriverForm.css'; // Import custom styles

const BecomeDriverForm = ({ refreshTable, driverToUpdate, clearDriverToUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license: '',
    vehicle_model: '',
    vehicle_year: '',
  });

  const [errors, setErrors] = useState({});

  // Populate form fields for updating
  useEffect(() => {
    if (driverToUpdate) {
      setFormData({
        name: driverToUpdate.name,
        email: driverToUpdate.email,
        phone: driverToUpdate.phone,
        license: driverToUpdate.license,
        vehicle_model: driverToUpdate.vehicle_model,
        vehicle_year: driverToUpdate.vehicle_year,
      });
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        license: '',
        vehicle_model: '',
        vehicle_year: '',
      });
    }
  }, [driverToUpdate]);

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    const { name, email, phone, license, vehicle_model, vehicle_year } = formData;

    if (!name) newErrors.name = 'Full Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!phone) newErrors.phone = 'Phone Number is required.';
    if (!license) newErrors.license = "Driver's License Number is required.";
    if (!vehicle_model) newErrors.vehicle_model = 'Vehicle Model is required.';
    if (!vehicle_year) {
      newErrors.vehicle_year = 'Vehicle Year is required.';
    } else if (!/^\d{4}$/.test(vehicle_year)) {
      newErrors.vehicle_year = 'Vehicle Year must be a 4-digit number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const method = driverToUpdate ? 'PUT' : 'POST';
        const url = driverToUpdate
          ? `http://127.0.0.1:8000/driver/drivers/${driverToUpdate.id}/`
          : 'http://127.0.0.1:8000/driver/userdrivers/';

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const responseData = await response.json();

          if (response.ok) {
            alert(driverToUpdate ? 'Driver updated successfully!' : 'Driver registration successful!-Our team will contact you soon!!');
            setFormData({
              name: '',
              email: '',
              phone: '',
              license: '',
              vehicle_model: '',
              vehicle_year: '',
            });
            // refreshTable(); // Notify DriverTable to refresh
            // clearDriverToUpdate(); // Clear driverToUpdate state
          } 
          // else {
          //   console.log('Error:', responseData);
          //   alert(`Error: ${JSON.stringify(responseData.errors)}`);
          // }
        } else {
          const errorText = await response.text();
          console.error('Error:', errorText);
          alert('Error: Server returned non-JSON response.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{driverToUpdate ? 'Update Driver' : 'Become a Driver'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 position-relative">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'border-danger' : ''}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={errors.name || 'Enter your full name'}
          />
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'border-danger' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={errors.email || 'Enter your email'}
          />
        </div>

        <div className="mb-3 position-relative">
  <label htmlFor="phone" className="form-label">Phone Number</label>
  <input
    type="tel"
    className={`form-control ${errors.phone ? 'border-danger' : ''}`}
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      const phone = e.target.value;

      // Set the form data
      setFormData((prevData) => ({
        ...prevData,
        phone: phone,
      }));

      // Inline validation logic
      const phoneRegex = /^[0-9]{10,15}$/; // Validates 10-15 digits

      if (!phoneRegex.test(phone)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: 'Please enter a valid phone number (10-15 digits).',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: '',
        }));
      }
    }}
    placeholder={errors.phone || 'Enter your phone number'}
  />
  {errors.phone && (
    <div className="text-danger" style={{ fontSize: '0.875em' }}>
      {errors.phone}
    </div>
  )}
</div>


        <div className="mb-3 position-relative">
          <label htmlFor="license" className="form-label">Driver's License Number</label>
          <input
            type="text"
            className={`form-control ${errors.license ? 'border-danger' : ''}`}
            id="license"
            name="license"
            value={formData.license}
            onChange={handleChange}
            placeholder={errors.license || "Enter your driver's license number"}
          />
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="vehicle_model" className="form-label">Vehicle Model</label>
          <input
            type="text"
            className={`form-control ${errors.vehicle_model ? 'border-danger' : ''}`}
            id="vehicle_model"
            name="vehicle_model"
            value={formData.vehicle_model}
            onChange={handleChange}
            placeholder={errors.vehicle_model || 'Enter your vehicle model'}
          />
        </div>

              <div className="mb-3 position-relative">
        <label htmlFor="vehicle_year" className="form-label">Vehicle Year</label>
        <input
          type="number"
          className={`form-control ${errors.vehicle_year ? 'border-danger' : ''}`}
          id="vehicle_year"
          name="vehicle_year"
          value={formData.vehicle_year}
          onChange={(e) => {
            const year = parseInt(e.target.value, 10);
            const currentYear = new Date().getFullYear();

            setFormData((prevData) => ({
              ...prevData,
              vehicle_year: e.target.value,
            }));

            // Inline validation logic
            if (isNaN(year) || year < 1900 || year > currentYear) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                vehicle_year: `Please enter a valid year between 1900 and ${currentYear}`,
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                vehicle_year: '',
              }));
            }
          }}
          placeholder={errors.vehicle_year || 'Enter your vehicle year'}
        />
        {errors.vehicle_year && (
          <div className="text-danger">{errors.vehicle_year}</div>
        )}
      </div>
        <button type="submit" className="btn btn-primary">{driverToUpdate ? 'Update' : 'Submit'}</button>
      </form>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default BecomeDriverForm;
