import React, { useState } from "react";
import { Modal } from "../modal/modal";
import DeleteJob from "./DeleteJob";
import "./jobCard.css";

function JobCard({ job }) {
  const [showDeleteJobModal, setShowDeleteJobModal] = useState(false);

  const deleteJobModalFunc = () => {
    setShowDeleteJobModal(true);
  };

  const formatToCurrency = (amount) => {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <>
      {/* DELETE JOB MODAL */}
      {showDeleteJobModal && (
        <Modal onClose={() => setShowDeleteJobModal(false)}>
          <DeleteJob setShowDeleteJobModal={setShowDeleteJobModal} />
        </Modal>
      )}
      <tr key={job.id}>
        <td>{job.jobTitle}</td>
        <td>{job.description}</td>
        <td>{job.fixtureList}</td>
        <td className="fixtures-container">{job.fixtures}</td>
        <td>${formatToCurrency(job.cost)}</td>
        <td>
          <button>Edit Job</button>
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
