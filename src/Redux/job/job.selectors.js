import { createSelector } from "reselect";

const selectJob = (state) => state.job;

export const selectJobItems = createSelector(
  [selectJob],
  (job) => job.jobList
);

export const selectModalHidden = createSelector(
  [selectJob],
  modal => modal.hidden
)



export const selectCurrentUser = createSelector(
  [selectJob],
  job => job.currentJob
);


export const selectCurrentJobDetail = createSelector(
  [selectJob],
  job => job.currentJobDetail
);




