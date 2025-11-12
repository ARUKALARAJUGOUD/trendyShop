import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth, googleProvider, facebookProvider, githubProvider } from "../firebase";
import "../css/Auth.css";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");
  const [resetMsg, setResetMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      if (formData.remember) localStorage.setItem("remember", "true");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) return setError("Please enter your email first!");
    await sendPasswordResetEmail(auth, formData.email);
    setResetMsg("Password reset email sent!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        {error && <p className="error-msg">{error}</p>}
        {resetMsg && <p className="success-msg">{resetMsg}</p>}

        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="btn-primary">Login</button>
        </form>

        <p className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</p>

        <div className="social-login">
          <p>Or login with</p>
          <div className="social-buttons">
            <button onClick={() => handleSocialLogin(googleProvider)} className="social-btn google">
              <FaGoogle /> Google
            </button>
            <button onClick={() => handleSocialLogin(facebookProvider)} className="social-btn facebook">
              <FaFacebook /> Facebook
            </button>
            <button onClick={() => handleSocialLogin(githubProvider)} className="social-btn github">
              <FaGithub /> GitHub
            </button>
          </div>
        </div>

        <p className="redirect-text">
          New here? <span onClick={() => navigate("/signup")}>Create Account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
