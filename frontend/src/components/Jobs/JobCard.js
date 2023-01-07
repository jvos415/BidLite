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
        <td className="button-td">
          <button style={{ marginRight: "-15px" }} className="action-button" type="button" onClick={updateJobModalFunc}>
            <span className="material-symbols-outlined">
              edit
            </span>
          </button>
        </td>
        <td className="button-td">
          <button className="action-button" type="button" onClick={deleteJobModalFunc}>
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </td>
      </tr>
    </>
  );
}

export default JobCard;
