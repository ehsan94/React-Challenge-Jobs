import {JobActionTypes} from './job.types';


export const setCurrentJobs = job => ({
    type: JobActionTypes.JOB_LIST,
    payload: job
});

export const addNewJob = job => ({
    type: JobActionTypes.ADD_JOB,
    payload: job
});