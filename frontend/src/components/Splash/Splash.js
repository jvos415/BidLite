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
            Log in, sign up with a new user or test out BidLite with the demo user to get
            started 😎
          </h2>
        </div>
      )}
    </main>
  );
}

export default SplashPage;
