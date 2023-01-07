import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { createFactors } from "../../store/factors";
import "./SignupForm.css";

function SignupForm({ setShowSignupModal, setShowLoginModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        setErrors([]);
        const res = await dispatch(
          sessionActions.signup({ email, username, password })
        );
        if (res.ok) {
          await dispatch(createFactors({username: username}));
          return setShowSignupModal(false);
        }
      } catch (res) {
        const data = await res.json();
        if (data && data.errors) {
          return setErrors(data.errors);
        }
      }
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const cancelSignup = () => {
    setShowSignupModal(false);
  };

  const showDaLogin = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <ul className="form-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <h2 className="modal-title">Sign Up</h2>
      <label className="modal-label">
        Email
      </label>
      <div className="modal-line-item">
        <span className="material-symbols-outlined goog-symbol">
          mail
        </span>
        <input
          className="modal-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Type your email"
        />
      </div>
      <label className="modal-label">
        Username
      </label>
      <div className="modal-line-item">
        <span class="material-symbols-outlined goog-symbol">
          account_circle
        </span>
        <input
          className="modal-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Type your username"
        />
      </div>
      <label className="modal-label">
        Password
      </label>
      <div className="modal-line-item">
        <span class="material-symbols-outlined goog-symbol">
          lock
        </span>
        <input
          className="modal-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Type your password"
        />
      </div>
      <label className="modal-label">
        Confirm Password
      </label>
      <div className="modal-line-item">
        <span class="material-symbols-outlined goog-symbol">
          lock
        </span>
        <input
          className="modal-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm your password"
        />
      </div>
      <button className="modal-main-button" type="submit">Sign Up</button>
      <button className="modal-cancel-button" onClick={cancelSignup} type="button">
        X
      </button>
      <button className="already-have-account" type="button" onClick={showDaLogin}>Already have an account?</button>
    </form>
  );
}

export default SignupForm;
