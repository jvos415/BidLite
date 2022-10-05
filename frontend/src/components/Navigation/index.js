import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../modal/modal';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import ProfileButton from './ProfileButton';

import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  const loginModalFunc = () => {
    setShowLoginModal(true);
  };

  const signupModalFunc = () => {
    setShowSignupModal(true);
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button onClick={loginModalFunc}>Log In</button>
        <button onClick={signupModalFunc}>Sign Up</button>
      </>
    );
  }

  return (
    <div>
      <div className='nav-bar-right'>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </div>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm setShowLoginModal={setShowLoginModal}/>
        </Modal>
      )}
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignupForm setShowSignupModal={setShowSignupModal}/>
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
