import React from "react";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../store/jobs";
import "./deleteJob.css";

function DeleteJob({ setShowDeleteJobModal, job }) {
  const dispatch = useDispatch();

  const deleteJobFunc = () => {
    dispatch(deleteJob(job));
    setShowDeleteJobModal(false);
  };

  return (
    <div className="delete-job-modal-container">
      <h1>Are you sure you want to delete this Job?</h1>
      <div className="delete-buttons-container">
        <button type="button" onClick={deleteJobFunc}>
          Delete Job
        </button>
        <button type="button" onClick={() => setShowDeleteJobModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteJob;
