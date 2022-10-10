import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../../store/jobs";
import "./userJobs.css"

function UserJobs() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const jobs = Object.values(useSelector(state => state.jobs))

    useEffect(() => {
        if (!user) history.push("/")
        dispatch(getJobs(user.id))
    },[dispatch, user, history])

    return (
        <main>
            <div>
                <h1>Your Jobs</h1>
                {jobs.map(job => {
                    return <h3 key={job.id}>{job.jobTitle}</h3>
                })}
            </div>
        </main>
    )
}

export default UserJobs;