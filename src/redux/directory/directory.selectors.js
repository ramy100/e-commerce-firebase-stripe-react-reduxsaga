import { createSelector } from "reselect";

const selectdirectories = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectdirectories],
  (directory) => directory.sections
);
