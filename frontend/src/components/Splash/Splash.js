import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "../modal/modal";
import SignupForm from "../SignupForm";
import "./splash.css";

function SplashPage() {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const [showSignupModal, setShowSignupModal] = useState(false);

  const bidMachine = () => {
    if (!user) return history.push(`/`);
    history.push("/bidmachine");
  };

  const userJobs = () => {
    if (!user) return history.push(`/`);
    history.push(`/jobs/${user.id}`);
  };

  const signupModalFunc = () => {
    setShowSignupModal(true);
  };

  return (
    <main>
      {user && (
          <div className="splash-container">
            <button
              onClick={() => bidMachine()}
              type="button"
              className="splash-button"
            >
            <span class="material-symbols-outlined">
              settings
            </span>
              Bid Machine
            </button>
            <button
              onClick={() => userJobs()}
              type="button"
              className="splash-button"
            >
            <span class="material-symbols-outlined">
              list_alt
            </span>
              My Jobs
            </button>
          </div>
      )}
      {!user && (
        <div className="not-logged-in-container">
          <div className="not-logged-in-left">
            <h1 className="welcome-left">Welcome to BidLite!</h1>
            <h3 className="about-blurb">
              BidLite is a web application designed to help small scale plumbers
              bid jobs within a matter of seconds.
            </h3>
            <h3 className="about-blurb">
              The first component of BidLite is a user's job list.
              Where a user can view all their jobs, edit a job and delete a
              job from the list if desired.
            </h3>
            <h3 className="about-blurb-about">
              The second component of BidLite is the bid machine which uses all
              completed jobs in a user's job list to determine an average cost per
              fixture. This means that with each completed job list entry, the bid
              machine becomes more accurate. BidLite will not be accurate until at least
              7 jobs have been added to the job list. Lastly, there are factors that can be
              added to the bid machine to help users fine tune their bids for unique
              situations.
            </h3>
            <h3 className="about-blurb">
              Welcome to the BidLite community and happy bidding!
            </h3>
            <h3 className="about-blurb">
              Special thank you to Tyler Piña of{" "}
              <a
                className="outside-link"
                href="https://www.pinaplumbing.com/"
                target="_blank"
                rel="noreferrer"
              >
                Piña Plumbing
              </a>{" "}
              for the inspiration for creating this application and trouble
              shooting it throughout its genesis.
            </h3>
          </div>
          <div className="not-logged-in-right">
            <h1 className="welcome-mobile">Welcome to BidLite!</h1>
            <h2 className="instructions">1. Sign up or Log in</h2>
            <h2 className="instructions">2. Create a new job</h2>
            <h2 className="instructions">3. Choose your features</h2>
            <h2 className="last-instruction">4. Create your bid</h2>
            <button id="green-button" onClick={signupModalFunc}>
              Start Bidding
            </button>
          </div>
        </div>
      )}
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignupForm setShowSignupModal={setShowSignupModal} />
        </Modal>
      )}
    </main>
  );
}

export default SplashPage;
