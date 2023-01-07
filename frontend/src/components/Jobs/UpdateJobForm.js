import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateJob } from "../../store/jobs";
import "./updateJobForm.css";

function UpdateJobForm({ setShowUpdateJobModal, job }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const id = job.id;
  const userId = user.id;

  const [jobTitle, setJobTitle] = useState(job.jobTitle);
  const [description, setDescription] = useState(job.description);
  const [fixtureList, setFixtureList] = useState(job.fixtureList);
  const [fixtures, setFixtures] = useState(job.fixtures);
  const [estimate, setEstimate] = useState(job.estimate);
  const [cost, setCost] = useState(job.cost);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const job = {
      id,
      userId,
      jobTitle,
      description,
      fixtureList,
      fixtures,
      estimate,
      cost
    };

    try {
      const newJob = await dispatch(updateJob(job));
      if (newJob) return setShowUpdateJobModal(false);
    } catch (res) {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    }
  };

  const cancelUpdateJob = () => {
    setShowUpdateJobModal(false);
  };

  return (
    <div>
      <form className="edit-job-form" onSubmit={handleSubmit}>
        <ul className="form-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
        </ul>
        <h2 className="modal-title">Update Job</h2>
        <label className="modal-label">Job Title</label>
        <div className="modal-line-item">
          <input
            className="edit-job-input"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            placeholder="Add Job Title"
          />
        </div>
        <label className="modal-label">Job Description</label>
        <textarea
          className="edit-job-description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Job Description"
        />
        <label className="modal-label">Fixture List</label>
        <input
          className="edit-job-description"
          type="text"
          value={fixtureList}
          onChange={(e) => setFixtureList(e.target.value)}
          placeholder="Add your fixtures, separated by a comma"
        />
        <label className="modal-label"># of Fixtures</label>
        <div className="modal-line-item">
          <input
            className="edit-job-input"
            type="number"
            value={fixtures}
            onChange={(e) => setFixtures(e.target.value)}
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
        <button className="modal-main-button" type="submit">Save Changes</button>
        <button className="modal-cancel-button" onClick={cancelUpdateJob} type="button">
          X
        </button>
      </form>
    </div>
  );
}

export default UpdateJobForm;
