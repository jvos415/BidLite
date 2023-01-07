import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createJob } from "../../store/jobs";
import "./addJobForm.css";

function AddJobForm({ setShowAddJobModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fixtureList, setFixtureList] = useState("");
  const [fixtures, setFixtures] = useState("");
  const [estimate, setEstimate] = useState("");
  const [cost, setCost] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const userId = user.id

    const job = {
      userId,
      jobTitle,
      description,
      fixtureList,
      fixtures,
      estimate,
      cost
    };

    try {
      const newJob = await dispatch(createJob(job));
      if (newJob) return setShowAddJobModal(false);
    } catch (res) {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    }
  };

  const cancelAddJob = () => {
    setShowAddJobModal(false);
  };

  return (
    <div>
      <form className="add-job-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <h2 className="modal-title">Add a Job</h2>
        <label className="modal-label">Job Title</label>
        <div className="modal-line-item">
          <input
            className="add-job-input"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            placeholder="Add Job Title"
          />
        </div>
        <label className="modal-label">Job Description</label>
        <textarea
          className="add-job-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Job Description"
        />
        <label className="modal-label">Fixture List</label>
        <textarea
          className="add-job-description"
          value={fixtureList}
          onChange={(e) => setFixtureList(e.target.value)}
          placeholder="Add your fixtures, separated by a comma"
        />
        <label className="modal-label"># of Fixtures</label>
        <div className="modal-line-item">
          <input
            className="add-job-input"
            type="number"
            value={fixtures}
            onChange={(e) => setFixtures(e.target.value)}
            placeholder="Enter the number of fixtures"
          />
        </div>
        <label className="modal-label">Estimated Cost</label>
        <div className="modal-line-item">
          <span className="dollar-symbol">$</span>
          <input
            className="add-job-input"
            type="number"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
            placeholder="Enter the value estimated to completed this job"
          />
        </div>
        <label className="modal-label">Actual Cost</label>
        <div className="modal-line-item">
          <span className="dollar-symbol">$</span>
          <input
            className="add-job-input"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Enter actual job cost"
          />
        </div>
        <button className="modal-main-button" type="submit">Add Job</button>
        <button className="modal-cancel-button" onClick={cancelAddJob} type="button">
          X
        </button>
      </form>
    </div>
  );
}

export default AddJobForm;
