import React from "react";
import './deleteJob.css';

function DeleteJob({ setShowDeleteJobModal }) {

    return (
        <div>
            <h1>Are you sure you want to delete this Job?</h1>
            <button>Delete Job</button>
            <button type="button" onClick={() => setShowDeleteJobModal(false)}>Cancel</button>
        </div>
    )
}

export default DeleteJob;