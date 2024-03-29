import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../modal/modal";
import { getJobs } from "../../store/jobs";
import { getFactors } from "../../store/factors";
import FactorForm from "../FactorForm/FactorForm";
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
  const [showEditFactorsModal, setShowEditFactorsModal] = useState(false);

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

  const editFactorsModalFunc = () => {
    setShowEditFactorsModal(true);
  };

  const toggleFamilyFriend = () => {
    setFamilyFriend(!familyFriend);
    let familyFriendButton = document.getElementById("family-friend-button");
    let familyFriendSlider = document.getElementById("family-friend-slider");
    if (familyFriend) {
      familyFriendButton.classList.remove("active");
      familyFriendSlider.classList.remove("active-slider");
      setFamilyFriendFactor(1);
    } else {
      familyFriendButton.classList.add("active");
      familyFriendSlider.classList.add("active-slider");
      setFamilyFriendFactor(1 - factors.familyFriend / 100);
    }
  };

  const toggleHighEnd = () => {
    setHighEnd(!highEnd);
    let highEndButton = document.getElementById("high-end-button");
    let highEndSlider = document.getElementById("high-end-slider");
    if (highEnd) {
      highEndButton.classList.remove("active");
      highEndSlider.classList.remove("active-slider");
      setHighEndFactor(1);
    } else {
      highEndButton.classList.add("active");
      highEndSlider.classList.add("active-slider");
      setHighEndFactor(1 + factors.highEnd / 100);
    }
  };

  const toggleComplicated = () => {
    setComplicated(!complicated);
    let complicatedButton = document.getElementById("complicated-button");
    let complicatedSlider = document.getElementById("complicated-slider");
    if (complicated) {
      complicatedButton.classList.remove("active");
      complicatedSlider.classList.remove("active-slider");
      setComplicatedFactor(1);
    } else {
      complicatedButton.classList.add("active");
      complicatedSlider.classList.add("active-slider");
      setComplicatedFactor(1 + factors.complicated / 100);
    }
  };

  const toggleComplicatedClient = () => {
    setComplicatedClient(!complicatedClient);
    let complicatedClientButton = document.getElementById("complicated-client-button");
    let complicatedClientSlider = document.getElementById("complicated-client-slider");
    if (complicatedClient) {
      complicatedClientButton.classList.remove("active");
      complicatedClientSlider.classList.remove("active-slider");
      setComplicatedClientFactor(1);
    } else {
      complicatedClientButton.classList.add("active");
      complicatedClientSlider.classList.add("active-slider");
      setComplicatedClientFactor(1 + factors.complicatedClient / 100);
    }
  };

  return (
    <main>
      <div className="bid-machine-parent">
        <div className="bidmachine-buttons">
          <button id="edit-job-factors-button" type="button" onClick={editFactorsModalFunc}>
            Edit Job Factors
          </button>
        </div>
        {showEditFactorsModal && (
          <Modal onClose={() => setShowEditFactorsModal(false)}>
            <FactorForm setShowEditFactorsModal={setShowEditFactorsModal} />
          </Modal>
        )}
        <div className="main-bidmachine-container">
          <div className="bidmachine-container">
              <div className="factor-line-item">
                <label id="family-friend-label">Family/Friend</label>
                <button id="family-friend-button" onClick={toggleFamilyFriend}>
                  <div id="family-friend-slider"></div>
                </button>
                {familyFriend && factors && (
                  <h3 className="applied">{factors.familyFriend}% Discount Applied</h3>
                )}
                {!familyFriend && <h3 className="not-applied">Not Applied</h3>}
              </div>
              <div className="factor-line-item">
                <label id="high-end-label">High End Job</label>
                <button id="high-end-button" onClick={toggleHighEnd}>
                  <div id="high-end-slider"></div>
                </button>
                {highEnd && factors && <h3 className="applied">{factors.highEnd}% Markup Applied</h3>}
                {!highEnd && <h3 className="not-applied">Not Applied</h3>}
              </div>
              <div className="factor-line-item">
                <label id="complicated-job-label">Complicated Job</label>
                <button id="complicated-button" onClick={toggleComplicated}>
                  <div id="complicated-slider"></div>
                </button>
                {complicated && factors && (
                  <h3 className="applied">{factors.complicated}% Markup Applied</h3>
                )}
                {!complicated && <h3 className="not-applied">Not Applied</h3>}
              </div>
              <div className="factor-line-item">
                <label id="complicated-client-label">Complicated Client</label>
                <button
                  id="complicated-client-button"
                  onClick={toggleComplicatedClient}
                >
                  <div id="complicated-client-slider"></div>
                </button>
                {complicatedClient && factors && (
                  <h3 className="applied">{factors.complicatedClient}% Markup Applied</h3>
                )}
                {!complicatedClient && <h3 className="not-applied">Not Applied</h3>}
              </div>
            <div className="factor-line-item">
              <label id="number-of-fixtures-label">Number of Fixtures</label>
              <div className="selector-container">
                <select className="selector" onChange={(e) => setFixtures(e.target.value)}>
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
                <div id="selector-line">|</div>
              </div>
              <div id="space-filler"></div>
            </div>
            {factors && jobs.length > 0 && (
              <div className="factor-line-item-last">
                <h2 className="bid-amount">
                  Bid Amount: 
                </h2>
                <h2 className="bid-price">
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
              </div>
            )}
            {jobs.length === 0 && (
              <h2>
                There is no data for the Bid Machine to use! Enter at least one job on the "Your Jobs" page.
              </h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default BidMachine;
