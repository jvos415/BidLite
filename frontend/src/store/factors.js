import { csrfFetch } from "./csrf";

/*********************** ACTIONS ******************************/

const LOAD = "factors/LOAD";
const CREATE_FACTORS = "factors/CREATE_FACTORS";
const UPDATE_FACTORS = "factors/UPDATE_FACTORS";

/********************** ACTION CREATORS **************************/

const loadAction = (factors) => ({
  type: LOAD,
  payload: factors
});

const createFactorsAction = (factors) => ({
  type: CREATE_FACTORS,
  payload: factors
});

const updateFactorsAction = (factors) => ({
  type: UPDATE_FACTORS,
  payload: factors
});

/************************ THUNKS ******************************/

export const getFactors = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/factors/${userId}`, {
    method: "GET"
  });

  if (response.ok) {
    const factors = await response.json();
    dispatch(loadAction(factors));
  }
};

export const createFactors = (username) => async (dispatch) => {
  const response = await csrfFetch(`/api/factors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(username),
  });

  if (response.ok) {
    const newFactors = await response.json();
    dispatch(createFactorsAction(newFactors));
    return newFactors;
  }
};

export const updateFactors = (factors) => async (dispatch) => {
  const response = await csrfFetch(`/api/factors`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(factors),
  });

  if (response.ok) {
    const updatedFactors = await response.json();
    dispatch(updateFactorsAction(updatedFactors));
    return updatedFactors;
  }
};

/************************ REDUCER **************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = {};
      action.payload.forEach((factors) => {
        newState[factors.id] = factors;
      });
      return newState;
    case CREATE_FACTORS:
        newState = { ...state };
        newState[action.payload.id] = action.payload;
        return newState;
    case UPDATE_FACTORS:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
