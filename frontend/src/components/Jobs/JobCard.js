import React, { useState } from "react";
import { Modal } from "../modal/modal";
import UpdateJobForm from "./UpdateJobForm";
import DeleteJob from "./DeleteJob";
import "./jobCard.css";

function JobCard({ job }) {
  const [showDeleteJobModal, setShowDeleteJobModal] = useState(false);
  const [showUpdateJobModal, setShowUpdateJobModal] = useState(false);

  const updateJobModalFunc = () => {
    setShowUpdateJobModal(true);
  };

  const deleteJobModalFunc = () => {
    setShowDeleteJobModal(true);
  };

  const formatToCurrency = (amount) => {
    amount = +amount;
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <>

    {/* UPDATE JOB MODAL */}
    {showUpdateJobModal && (
        <Modal onClose={() => setShowUpdateJobModal(false)}>
          <UpdateJobForm job={job} setShowUpdateJobModal={setShowUpdateJobModal} />
        </Modal>
      )}

      {/* DELETE JOB MODAL */}
      {showDeleteJobModal && (
        <Modal onClose={() => setShowDeleteJobModal(false)}>
          <DeleteJob job={job} setShowDeleteJobModal={setShowDeleteJobModal} />
        </Modal>
      )}

      <tr key={job.id}>
        <td>{job.jobTitle}</td>
        <td>{job.description}</td>
        <td>{job.fixtureList}</td>
        <td className="fixtures-container">{job.fixtures}</td>
        <td>${formatToCurrency(job.estimate)}</td>
        <td>${formatToCurrency(job.cost)}</td>
        <td>
          <button type="button" onClick={updateJobModalFunc}>Edit Job</button>
        </td>
        <td>
          <button type="button" onClick={deleteJobModalFunc}>
            Delete Job
          </button>
        </td>
      </tr>
    </>
  );
}

export default JobCard;
