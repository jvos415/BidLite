import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./splash.css";

function SplashPage() {
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const bidMachine = () => {
    history.push("/bidmachine");
  };

  const userJobs = () => {
    if (!user) history.push(`/`);
    history.push(`/jobs/${user.id}`);
  };

  return (
    <main>
      <div className="splash-container">
        <button
          onClick={() => bidMachine}
          type="button"
          className="splash-button"
        >
          Bid Machine
        </button>
        <button
          onClick={() => userJobs}
          type="button"
          className="splash-button"
        >
          Your Jobs
        </button>
      </div>
    </main>
  );
}

export default SplashPage;
