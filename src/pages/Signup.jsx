import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider, githubProvider } from "../firebase";
import "../css/Auth.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const SignupPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSignup}>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <div className="social-login">
          <p>Or sign up with</p>
          <div className="social-buttons">
            <button onClick={() => handleSocialSignup(googleProvider)} className="social-btn google">
              <FaGoogle /> Google
            </button>
            <button onClick={() => handleSocialSignup(facebookProvider)} className="social-btn facebook">
              <FaFacebook /> Facebook
            </button>
            <button onClick={() => handleSocialSignup(githubProvider)} className="social-btn github">
              <FaGithub /> GitHub
            </button>
          </div>
        </div>

        <p className="redirect-text">
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
