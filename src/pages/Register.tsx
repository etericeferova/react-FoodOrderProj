import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: string[] = [];

    if (!formData.username) newErrors.push("Username is required.");
    if (!formData.password) newErrors.push("Password is required.");

    if (
      formData.username &&
      (formData.username.length < 3 || formData.username.length > 15)
    ) {
      newErrors.push("Username must be between 3 and 15 characters.");
    }

    if (formData.password && !validatePassword(formData.password)) {
      newErrors.push(
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one digit."
      );
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    const existingUser = localStorage.getItem(formData.username);
    if (existingUser) {
      newErrors.push("User already exists. Please choose another username.");
      setErrors(newErrors);
      return;
    }

    localStorage.setItem(formData.username, formData.password);

    setMessage("You are successfully registered!");
    setErrors([]);

    setFormData({ username: "", password: "" });

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="register-input"
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>

      {errors.length > 0 && (
        <ul className="error-list">
          {errors.map((error, index) => (
            <li key={index} className="error">
              {error}
            </li>
          ))}
        </ul>
      )}

      {message && <p className="success">{message}</p>}

      <p className="register-link">
        If you have an account, <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
