import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./addJobForm.css";

function AddJobForm({ setShowAddJobModal }) {
  const user = useSelector((state) => state.session.user);

  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fixtureList, setFixtureList] = useState("");
  const [fixtures, setFixtures] = useState("");
  const [cost, setCost] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = () => {
    // Handle submit
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setErrors([]);
  //     try {
  //       const res = await dispatch(sessionActions.login({ credential, password }))
  //       if (res.ok) return setShowLoginModal(false);
  //     } catch (res) {
  //       const data = await res.json();
  //         if(data && data.errors) {
  //           setErrors(data.errors);
  //         }
  //     }
  //   }

  const cancelAddJob = () => {
    setShowAddJobModal(false);
  };

  return (
    <div>
      <h2>Add a Job</h2>
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
        <button type="submit">Add Job</button>
        <button onClick={cancelAddJob} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddJobForm;
