import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./splash.css";

function SplashPage() {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const bidMachine = () => {
    if (!user) return history.push(`/`);
    history.push("/bidmachine");
  };

  const userJobs = () => {
    if (!user) return history.push(`/`);
    history.push(`/jobs/${user.id}`);
  };

  return (
    <main>
      <h1 className="welcome">Welcome to BidLite 2.0!</h1>
      {user && (
        <div className="splash-container">
          <button
            onClick={() => bidMachine()}
            type="button"
            className="splash-button"
          >
            Bid Machine
          </button>
          <button
            onClick={() => userJobs()}
            type="button"
            className="splash-button"
          >
            Your Jobs
          </button>
        </div>
      )}
      {!user && (
        <div className="not-logged-in-container">
          <h2 className="not-logged-in-message">
            Log in, sign up with a new user or test out BidLite with the demo
            user to get started 😎
          </h2>
          <h3 className="about-blurb">
            BidLite is a web applicaiton designed to help small scale plumbers
            and electricians quickly bid jobs. There are two main components of
            BidLite, a user's completed job list and the bid machine. When a job
            is completed, the user should input the ACTUAL COMPLETED JOB COST.
            The user should NOT enter bid prices into the compelted jobs list.
          </h3>
          <h3 className="about-blurb">
            The bid machine uses all of the completed jobs in the completed job
            list to determine an average cost per fixture. This means that with
            each complete job list entry, the bid machine becomes more and more
            accurate. Lastly, there are factors that can be added to the bid
            machine to help users fine tune their bids for specific jobs in
            order to account for unique situations.
          </h3>
          <h2>Welcome to the BidLite community and happy bidding!</h2>
        </div>
      )}
    </main>
  );
}

export default SplashPage;
