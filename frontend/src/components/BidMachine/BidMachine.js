import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/jobs";
import { getFactors } from "../../store/factors";
import "./bidMachine.css";

function BidMachine() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const jobs = Object.values(useSelector((state) => state.jobs));
  const factors = Object.values(useSelector((state) => state.factors))[0];

  const [fixtures, setFixtures] = useState(1);
  const [familyFriend, setFamilyFriend] = useState(false);
  const [familyFriendFactor, setFamilyFriendFactor] = useState(1);
  const [highEnd, setHighEnd] = useState(false);
  const [highEndFactor, setHighEndFactor] = useState(1);
  const [complicated, setComplicated] = useState(false);
  const [complicatedFactor, setComplicatedFactor] = useState(1);
  const [complicatedClient, setComplicatedClient] = useState(false);
  const [complicatedClientFactor, setComplicatedClientFactor] = useState(1);

  useEffect(() => {
    if (!user) return history.push("/");
    dispatch(getJobs(user.id));
  }, [dispatch, user, history]);

  useEffect(() => {
    if (!user) return history.push("/");
    dispatch(getFactors(user.id));
  }, [dispatch, user, history]);

  const formatToCurrency = (amount) => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const getMagicNumber = () => {
    let sum = 0;

    for (let job of jobs) {
      let temp = job.cost / job.fixtures;
      sum += temp;
    }

    return sum / jobs.length;
  };

  const toggleFamilyFriend = () => {
    setFamilyFriend(!familyFriend);
    let familyFriendButton = document.getElementById("family-friend-button");
    if (familyFriend) {
      familyFriendButton.innerText = "Apply";
      setFamilyFriendFactor(1);
    } else {
      familyFriendButton.innerText = "Remove";
      setFamilyFriendFactor(1 - factors.familyFriend / 100);
    }
  };

  const toggleHighEnd = () => {
    setHighEnd(!highEnd);
    let highEndButton = document.getElementById("high-end-button");
    if (highEnd) {
      highEndButton.innerText = "Apply";
      setHighEndFactor(1);
    } else {
      highEndButton.innerText = "Remove";
      setHighEndFactor(1 + factors.highEnd / 100);
    }
  };

  const toggleComplicated = () => {
    setComplicated(!complicated);
    let complicatedButton = document.getElementById("complicated-button");
    if (complicated) {
      complicatedButton.innerText = "Apply";
      setComplicatedFactor(1);
    } else {
      complicatedButton.innerText = "Remove";
      setComplicatedFactor(1 + factors.complicated / 100);
    }
  };

  const toggleComplicatedClient = () => {
    setComplicatedClient(!complicatedClient);
    let complicatedClientButton = document.getElementById(
      "complicated-client-button"
    );
    if (complicatedClient) {
      complicatedClientButton.innerText = "Apply";
      setComplicatedClientFactor(1);
    } else {
      complicatedClientButton.innerText = "Remove";
      setComplicatedClientFactor(1 + factors.complicatedClient / 100);
    }
  };

  return (
    <main>
      <h1>Welcome to the Bid Machine</h1>
      <div className="bidmachine-buttons">
        <button>Edit Job Factors</button>
      </div>
      <div className="main-bidmachine-container">
        <div className="bidmachine-container">
          <div>
            <label>Family/Friend?</label>
            <button id="family-friend-button" onClick={toggleFamilyFriend}>
              Apply
            </button>
            {familyFriend && factors && (
              <h3>{factors.familyFriend}% Discount Applied</h3>
            )}
            {!familyFriend && <h3>No Discount Applied</h3>}
            <label>High End Job</label>
            <button id="high-end-button" onClick={toggleHighEnd}>
              Apply
            </button>
            {highEnd && factors && <h3>{factors.highEnd}% Markup Applied</h3>}
            {!highEnd && <h3>No Markup Applied</h3>}
            <label>Complicated Job</label>
            <button id="complicated-button" onClick={toggleComplicated}>
              Apply
            </button>
            {complicated && factors && (
              <h3>{factors.complicated}% Markup Applied</h3>
            )}
            {!complicated && <h3>No Markup Applied</h3>}
            <label>Complicated Client?</label>
            <button id="complicated-client-button" onClick={toggleComplicatedClient}>
              Apply
            </button>
            {complicatedClient && factors && (
              <h3>{factors.complicatedClient}% Markup Applied</h3>
            )}
            {!complicatedClient && <h3>No Markup Applied</h3>}
          </div>
          <label>Number of Fixtures</label>
          <select onChange={(e) => setFixtures(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>
          {factors && (
            <h2>
              $
              {formatToCurrency(
                getMagicNumber() *
                  +fixtures *
                  familyFriendFactor *
                  highEndFactor *
                  complicatedFactor *
                  complicatedClientFactor
              )}
            </h2>
          )}
        </div>
      </div>
    </main>
  );
}

export default BidMachine;
