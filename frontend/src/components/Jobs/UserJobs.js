import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/jobs";
import { Modal } from "../modal/modal";
import JobCard from "./JobCard";
import AddJobForm from "./AddJobForm";

import "./userJobs.css";

function UserJobs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const jobs = Object.values(useSelector((state) => state.jobs));

  const [showAddJobModal, setShowAddJobModal] = useState(false);

  useEffect(() => {
    if (!user) return history.push("/");
    dispatch(getJobs(user.id));
  }, [dispatch, user, history]);

  const addJobModalFunc = () => {
    setShowAddJobModal(true);
  };

  return (
    <main>
      <div>
        <h1 className="your-jobs">Your Jobs</h1>
        <button className="add-job" onClick={addJobModalFunc}>
          Add Job
        </button>

        {/* ADD JOB MODAL */}
        {showAddJobModal && (
          <Modal onClose={() => setShowAddJobModal(false)}>
            <AddJobForm setShowAddJobModal={setShowAddJobModal} />
          </Modal>
        )}

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
              return <JobCard key={job.id} job={job} />;
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default UserJobs;
