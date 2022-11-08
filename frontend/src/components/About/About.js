import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h2>About BidLite</h2>
      <h3 className="about-blurb">
        BidLite is a web application designed to help small scale plumbers and
        electricians bid jobs within a matter of seconds.
      </h3>
      <h3 className="about-blurb">
        The first component of BidLite is a user's completed job list. When a
        job is completed, the user should input the ACTUAL COMPLETED JOB COST
        into the list. The user should NOT enter bid prices into the completed
        jobs list as that will create an inaccurate bid machine overtime.
      </h3>
      <h3 className="about-blurb">
        The second component of BidLite is the bid machine which uses all of the
        completed jobs in the completed job list to determine an average cost
        per fixture. This means that with each complete job list entry, the bid
        machine becomes more accurate. Lastly, there are factors that can be
        added to the bid machine to help users fine tune their bids for specific
        jobs in order to account for unique situations.
      </h3>
      <h2>Welcome to the BidLite community and happy bidding!</h2>
      <h3>
        Special thank you to Tyler Piña of{" "}
        <a
          href="https://www.pinaplumbing.com/"
          target="_blank"
          rel="noreferrer"
        >
          Piña plumbing
        </a>{" "}
        for the inspiration for creating this application and trouble shooting
        it throughout its genesis.
      </h3>
    </div>
  );
}

export default About;
