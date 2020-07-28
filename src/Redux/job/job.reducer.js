import { JobActionTypes } from "./job.types";

const INITIAL_STATE = {
  jobList: [],
  currentJob : null
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JobActionTypes.JOB_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    case JobActionTypes.ADD_JOB:
      // make a copy of the existing array
      let jobList = state.jobList.slice();
      jobList.push(action.payload);
      return { ...state, jobList: [...state.jobList, { ...action.payload }] };
    case JobActionTypes.TOGGLE_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case JobActionTypes.SELECT_ITEM:
      return {
        ...state,
        currentJob: action.payload,
      };

      case JobActionTypes.REMOVE_ITEM:
        console.log("Here is the payload "+action.payload);
        let jobList2 = state.jobList.slice();
      return {
        ...state,
        jobList :  jobList2.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default jobReducer;
