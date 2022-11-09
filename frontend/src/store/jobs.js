import { csrfFetch } from "./csrf";

/*********************** ACTIONS **************************/

const LOAD = "jobs/LOAD";
const CREATE_JOB = "jobs/CREATE_JOB";
const UPDATE_JOB = "jobs/UPDATE_JOB";
const DELETE_JOB = "jobs/DELETE_JOB";

/********************** ACTION CREATORS **************************/

const loadAction = (jobs) => ({
  type: LOAD,
  payload: jobs,
});

const createJobAction = (job) => ({
  type: CREATE_JOB,
  payload: job,
});

const updateJobAction = (job) => ({
  type: UPDATE_JOB,
  payload: job,
});

const deleteJobAction = (jobId) => ({
  type: DELETE_JOB,
  payload: jobId,
});

/************************ THUNKS **************************/

export const getJobs = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/jobs/${userId}`, {
    method: "GET",
  });

  if (response.ok) {
    const jobs = await response.json();
    dispatch(loadAction(jobs));
  }
};

export const createJob = (job) => async (dispatch) => {
  const response = await csrfFetch(`/api/jobs/${job.userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });

  if (response.ok) {
    const newJob = await response.json();
    dispatch(createJobAction(newJob));
    return newJob;
  }
};

export const updateJob = (job) => async (dispatch) => {
  const response = await csrfFetch(`/api/jobs/${job.userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });

  if (response.ok) {
    const updatedJob = await response.json();
    dispatch(updateJobAction(updatedJob));
    return updatedJob;
  }
};

export const deleteJob = (job) => async (dispatch) => {
  const response = await csrfFetch(`/api/jobs/${job.userId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });

  if (response.ok) {
    const deleteJob = await response.json();
    dispatch(deleteJobAction(deleteJob.id));
    return deleteJob;
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
    case CREATE_JOB:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case UPDATE_JOB:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_JOB:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
