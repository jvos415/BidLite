import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/jobs";
import "./userJobs.css";

function UserJobs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const jobs = Object.values(useSelector((state) => state.jobs));

  useEffect(() => {
    if (!user) return history.push("/");
    dispatch(getJobs(user.id));
  }, [dispatch, user, history]);

  const addJobModal = () => {
    console.log("this is working");
  };

  return (
    <main>
      <div>
        <h1 className="your-jobs">Your Jobs</h1>
        <button className="add-job" onClick={addJobModal}>
          Add Job
        </button>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Job Title</h3>
              </th>
              <th>
                <h3>Job Description</h3>
              </th>
              <th>
                <h3>Fixture List</h3>
              </th>
              <th>
                <h3>No. Of Fixtures</h3>
              </th>
              <th>
                <h3>Job Cost</h3>
              </th>
              <th>
                <h3>Edit Job</h3>
              </th>
              <th>
                <h3>Delete Job</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => {
              return (
                <tr key={job.id}>
                  <td>{job.jobTitle}</td>
                  <td>{job.description}</td>
                  <td>{job.fixtureList}</td>
                  <td>{job.fixtures}</td>
                  <td>${job.cost}</td>
                  <td>
                    <button>Edit Job</button>
                  </td>
                  <td>
                    <button>Delete Job</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default UserJobs;
