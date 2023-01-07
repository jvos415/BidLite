import React, { useState } from "react";
import "./about.css";

function About({ setShowAboutModal }) {

  const cancelAbout = () => {
    setShowAboutModal(false);
  }

  return (
    <div className="about-parent-container">
      <h2 className="modal-title" >About</h2>
      <br />
      <div className="about-container">
        <h3 className="about-blurb">
          BidLite is a web application designed to help small scale plumbers bid
          jobs within a matter of seconds.
        </h3>
        <h3 className="about-blurb">
          The first component of BidLite is a user's job list. Jobs entered into
          this list should be the ACTUAL COMPLETED JOB COST and not the bid.
        </h3>
        <h3 className="about-blurb">
          The second component of BidLite is the bid machine which uses all
          completed jobs in a user's job list to determine an average cost per
          fixture. This means that with each completed job list entry, the bid
          machine becomes more accurate. Lastly, there are factors that can be
          added to the bid machine to help users fine tune their bids for unique
          situations.
        </h3>
        <h2 className="about-blurb-welcome">
          Welcome to the BidLite community and happy bidding!
        </h2>
        <h3 className="about-blurb-last">
          Special thank you to Tyler Piña of{" "}
          <a
            className="outside-link"
            href="https://www.pinaplumbing.com/"
            target="_blank"
            rel="noreferrer"
          >
            Piña Plumbing
          </a>{" "}
          for the inspiration for creating this application and trouble shooting
          it throughout its genesis.
        </h3>
      </div>
      <button className="modal-cancel-about-button" onClick={cancelAbout} type="button">X</button>
    </div>
  );
}

export default About;
