import { useState } from "react";
import { Link } from "react-router";

const Register = () => {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    confirm_password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits"; 
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Passwords do not match";
    }
    if (!formData.role) {
      newErrors.role = "Please select your role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

     const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirm_password: formData.confirm_password,
      is_doctor: formData.role === "doctor",
      is_patient: formData.role === "patient",
    };

    try {
      const res = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registered successfully");
        // Optionally redirect to login
      } else {
        alert("Registration failed: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Error occurred. Please try again later.");
    }
  };


  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="/assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Register{" "}
                          {/* <Link to="/doctor-register">Are you a Doctor?</Link> */}
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                          {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                          {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                         <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input type="text" name="phone" maxLength={10} value={formData.phone} onChange={handleChange} className="form-control" />
                          {errors.email && <small className="text-danger">{errors.phone}</small>}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
                          {errors.password && <small className="text-danger">{errors.password}</small>}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} className="form-control" />
                          {errors.confirm_password && <small className="text-danger">{errors.confirm_password}</small>}
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Register as</label>
                        <div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              value="patient"
                              checked={formData.role === "patient"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label">Patient</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              value="doctor"
                              checked={formData.role === "doctor"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label">Doctor</label>
                          </div>
                        </div>
                        {errors.role && <small className="text-danger">{errors.role}</small>}
                      </div>

                        <button type="submit" className="btn btn-primary-gradient w-100">Sign Up</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
