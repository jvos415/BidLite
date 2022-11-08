import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateJob } from "../../store/jobs";
import "./addJobForm.css";

function UpdateJobForm({ setShowUpdateJobModal, job }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const id = job.id;
  const userId = user.id;

  const [jobTitle, setJobTitle] = useState(job.jobTitle);
  const [description, setDescription] = useState(job.description);
  const [fixtureList, setFixtureList] = useState(job.fixtureList);
  const [fixtures, setFixtures] = useState(job.fixtures);
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
      cost,
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
      <h2>Update Job</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <label>Job Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Fixture List</label>
        <input
          type="text"
          value={fixtureList}
          onChange={(e) => setFixtureList(e.target.value)}
        />
        <label>Fixtures</label>
        <input
          type="number"
          value={fixtures}
          onChange={(e) => setFixtures(e.target.value)}
        />
        <label>Cost</label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button type="submit">Update Job</button>
        <button onClick={cancelUpdateJob} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default UpdateJobForm;
