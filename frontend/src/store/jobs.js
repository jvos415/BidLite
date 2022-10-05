import { csrfFetch } from "./csrf";

/*********************** ACTIONS **************************/

const LOAD = "jobs/LOAD";
const CREATE_JOB = "jobs/CREATE_JOB";
const UPDATE_JOB = "jobs/UPDATE_JOB";
const DELETE_JOB = "jobs/DELETE_JOB";

/********************** ACTION CREATORS **************************/

const loadAction = (jobs) => ({
    type: LOAD,
    payload: jobs
});

const createJobAction = (job) => ({
    type: CREATE_JOB,
    payload: job
});

const updateJobAction = (job) => ({
    type: UPDATE_JOB,
    payload: job
});

const deleteJobAction = (jobId) => ({
    type: DELETE_JOB,
    payload: jobId
});


/************************ THUNKS **************************/

export const getJobs = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/jobs/${userId}`, {
        method: "GET"
    })

    if (response.ok) {
        const jobs = await response.json();
        dispatch(loadAction(jobs));
    }
};

/************************ REDUCER **************************/

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = {};
            action.payload.forEach((job) => {
            newState[job.id] = job;
            });
            return newState;
        default:
            return state;
    }      
};