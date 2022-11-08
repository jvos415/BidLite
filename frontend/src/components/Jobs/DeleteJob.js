import React from "react";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../store/jobs";

function DeleteJob({ setShowDeleteJobModal, job }) {
  const dispatch = useDispatch();

  const deleteJobFunc = () => {
    dispatch(deleteJob(job));
    setShowDeleteJobModal(false);
  };

  return (
    <div>
      <h1>Are you sure you want to delete this Job?</h1>
      <button type="button" onClick={deleteJobFunc}>
        Delete Job
      </button>
      <button type="button" onClick={() => setShowDeleteJobModal(false)}>
        Cancel
      </button>
    </div>
  );
}

export default DeleteJob;
