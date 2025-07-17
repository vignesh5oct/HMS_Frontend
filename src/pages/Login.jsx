import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const resData = await response.json();

      if (response.ok) {
        alert(resData.message || "Login successful!");
        // navigate("/dashboard");
      } else {
        alert(resData.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.\n" + error.message);
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
                          Login <span>Doccure</span>
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label">E-mail</label>
                          <input
                            type="text"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>

                        <div className="mb-3">
                          <div className="form-group-flex">
                            <label className="form-label">Password</label>
                            <a href="#" className="forgot-link">
                              Forgot password?
                            </a>
                          </div>
                          <div className="pass-group" style={{ position: "relative" }}>
                            <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control pass-input ${errors.password ? "is-invalid" : ""}`}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              style={{ paddingRight: "40px" }}
                            />
                            <span
                              className={`feather toggle-password-sub ${showPassword ? "feather-eye" : "feather-eye-off"}`}
                              onClick={() => setShowPassword(!showPassword)}
                              style={{
    position: "absolute",
    top: "50%",
    right: "15px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 2,
    height: "20px",  // keep consistent icon size
    width: "20px"
  }}
                            />
                            {errors.password && (
                              <div className="text-danger mt-1">{errors.password}</div>
                            )}
                          </div>
                        </div>

                        <div className="mb-3 form-check-box">
                          <div className="form-group-flex">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember"
                              />
                              <label className="form-check-label" htmlFor="remember">
                                Remember Me
                              </label>
                            </div>
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember1"
                              />
                              <label className="form-check-label" htmlFor="remember1">
                                Login with OTP
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <button className="btn btn-primary-gradient w-100" type="submit">
                            Sign in
                          </button>
                        </div>

                        <div className="login-or">
                          <span className="or-line"></span>
                          <span className="span-or">or</span>
                        </div>

                        <div className="social-login-btn">
                          <a href="#" className="btn w-100">
                            <img
                              src="/assets/img/icons/google-icon.svg"
                              alt="google-icon"
                            />
                            Sign in With Google
                          </a>
                          <a href="#" className="btn w-100">
                            <img
                              src="/assets/img/icons/facebook-icon.svg"
                              alt="fb-icon"
                            />
                            Sign in With Facebook
                          </a>
                        </div>

                        <div className="account-signup">
                          <p>
                            Don't have an account? <Link to="/register">Sign up</Link>
                          </p>
                        </div>
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

export default Login;
