import {JobActionTypes} from './job.types';


export const setCurrentJobs = job => ({
    type: JobActionTypes.JOB_LIST,
    payload: job
});

export const addNewJob = job => ({
    type: JobActionTypes.ADD_JOB,
    payload: job
});

export const toggleModalHidden = () => ({
    type: JobActionTypes.TOGGLE_HIDDEN
  });


export const setCurrentUser = _id => ({
    type:JobActionTypes.SELECT_ITEM,
    payload:_id
});

export const removeCurrentJob = _id => ({
    type:JobActionTypes.REMOVE_ITEM,
    payload:_id
});

export const setCurrentJobDetail = _id => ({
    type:JobActionTypes.SELECT_JOB_DETAIL,
    payload:_id
});