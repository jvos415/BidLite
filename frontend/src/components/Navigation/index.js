import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../modal/modal";
import * as sessionActions from "../../store/session";
import About from "../About/About";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const loginModalFunc = () => {
    setShowLoginModal(true);
  };

  const signupModalFunc = () => {
    setShowSignupModal(true);
  };

  const demoUserFunc = () => {
    const credential = "Demo-lition";
    const password = "password";
    return dispatch(sessionActions.login({ credential, password }));
  };

  const aboutModalFunc = () => {
    setShowAboutModal(true);
  };

  const goHome = () => {
    history.push("/");
  };

  const jobsButtonFunc = () => {
    history.push(`/jobs/${sessionUser.id}`);
  };

  const bidMachineButtonFunc = () => {
    history.push(`/bidmachine`);
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <button onClick={goHome}>Home</button>
        <button onClick={jobsButtonFunc}>All Jobs</button>
        <button onClick={bidMachineButtonFunc}>Bid Machine</button>
        <ProfileButton user={sessionUser} />
        <button onClick={aboutModalFunc}>About</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button onClick={demoUserFunc}>Demo User</button>
        <button onClick={loginModalFunc}>Log In</button>
        <button onClick={signupModalFunc}>Sign Up</button>
      </>
    );
  }

  return (
    <div>
      <div className="nav-bar-right">{isLoaded && sessionLinks}</div>
      {showAboutModal && (
        <Modal onClose={() => setShowAboutModal(false)}>
          <About setShowAboutModal={setShowAboutModal} />
        </Modal>
      )}
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm setShowLoginModal={setShowLoginModal} />
        </Modal>
      )}
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignupForm setShowSignupModal={setShowSignupModal} />
        </Modal>
      )}
    </div>
  );
}

export default Navigation;
