import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/jobs";
import "./bidMachine.css";

function BidMachine() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const jobs = Object.values(useSelector((state) => state.jobs));

  const [factors, setFactors] = useState(false);
  const [fixtures, setFixtures] = useState(1);

  const toggleFactors = () => {
    setFactors(!factors);
  };

  useEffect(() => {
    if (!user) history.push("/");
    dispatch(getJobs(user.id));
  }, [dispatch, user, history]);


  const getMagicNumber = () => {
    let sum = 0;

    for (let job of jobs) {
      let temp = job.cost / job.fixtures;
      sum += temp;
    }

    return sum / jobs.length;
  };

  return (
    <main>
      <h1>Welcome to the Bid Machine</h1>
      <div className="bidmachine-buttons">
        {factors && (
          <button onClick={toggleFactors}>Turn Off Job Factors</button>
        )}
        {!factors && (
          <button onClick={toggleFactors}>Turn On Job Factors</button>
        )}
        <button>Edit Job Factors</button>
      </div>
      <div className="main-bidmachine-container">
        <div className="bidmachine-container">
          {factors && (
            <div>
              <label>Family/Friend?</label>
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>High End Job</label>
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Complicated Job</label>
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Dickhead?</label>
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          )}
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
          </select>
          <h2>{(getMagicNumber() * +fixtures).toFixed(2)}</h2>
        </div>
      </div>
    </main>
  );
}

export default BidMachine;
