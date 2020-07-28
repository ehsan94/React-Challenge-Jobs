import { createSelector } from "reselect";

const selectCart = (state) => state.job;

export const selectJobItems = createSelector(
  [selectCart],
  (job) => job.jobList
);




