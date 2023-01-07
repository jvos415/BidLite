import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ setShowLoginModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      const res = await dispatch(sessionActions.login({ credential, password }))
      if (res.ok) return setShowLoginModal(false);
    } catch (res) {
      const data = await res.json();
        if(data && data.errors) {
          setErrors(data.errors);
        }
    }
  }

  const cancelLogin = () => {
    setShowLoginModal(false);
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h2 className="modal-title">Log In</h2>
      <label className="modal-label">
        Username or Email
      </label>
      <div className="modal-line-item">
        <span class="material-symbols-outlined goog-symbol">
          account_circle
        </span>
        <input
          className="modal-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          placeholder="Type your username or email"
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
      <button className="modal-main-button" type="submit">Log In</button>
      <button className="modal-cancel-button" onClick={cancelLogin} type="button">X</button>
    </form>
  );
}

export default LoginForm;
