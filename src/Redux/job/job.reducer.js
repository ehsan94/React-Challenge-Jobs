import {JobActionTypes} from './job.types';
import addItemToList from './job.utils'

const INITIAL_STATE = {
  jobList : []
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JobActionTypes.JOB_LIST:
            return{
                ...state,
                jobList: action.payload
            }

    case JobActionTypes.ADD_JOB:
      // make a copy of the existing array
      let jobList = state.jobList.slice();
      console.log("i am here");
      jobList.push(action.payload)
        return { ...state, 
          jobList: [...state.jobList, {...action.payload}]
        };
    default:
      return state;
  }
};

export default jobReducer;
