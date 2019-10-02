import axios from 'axios';

const apiHost = "//localhost:3333";

export const GET_SMURF_LIST_START   = "GET_SMURF_LIST_START";
export const GET_SMURF_LIST_SUCCESS = "GET_SMURF_LIST_SUCCESS";
export const GET_SMURF_LIST_FAIL    = "GET_SMURF_LIST_FAIL";

export const ADDING_SMURF_START   = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAIL    = "ADDING_SMURF_FAIL";

export const EDITING_SMURF_START   = "EDITING_SMURF_START";
export const EDITING_SMURF_SUCCESS = "EDITING_SMURF_SUCCESS";
export const EDITING_SMURF_FAIL    = "EDITING_SMURF_FAIL";

export const getSmurfList = () => dispatch => {
  dispatch({ type: GET_SMURF_LIST_START });
  return axios.get(`${apiHost}/smurfs`)
    .then( res => {
      setTimeout(() => {dispatch({ type: GET_SMURF_LIST_SUCCESS, payload: res.data })}, 1000);
    })
    .catch( err => {
      dispatch({ type: GET_SMURF_LIST_FAIL, payload: err.response });
    });
};

export const addSmurfToList = ( smurfInfo ) => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  return axios.post(`${apiHost}/smurfs`, smurfInfo)
    .then( res => {
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data });
      return true;
    })
    .catch( err => {
      dispatch({ type: ADDING_SMURF_FAIL, payload: err.response.data.Error})
    });
};

export const editSmurf = ( smurfInfo ) => dispatch => {
  dispatch({ type: EDITING_SMURF_START });
  return axios.put(`${apiHost}/smurfs/${smurfInfo.id}`, smurfInfo)
    .then( res => {
      dispatch({ type: EDITING_SMURF_SUCCESS, payload: res.data });
      return true;
    })
    .catch( err => {
      dispatch({ type: EDITING_SMURF_FAIL, payload: err.response.data.Error})
    });
};