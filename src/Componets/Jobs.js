import React from "react";
import { Typography } from "@material-ui/core";
import { Job } from "./Job";

export const Jobs = ({ jobs }) => (
  <div className="jobs">
    <Typography variant="h1">Entry Leve Jobs</Typography>
    {jobs.map((job) => (
      <Job job={job} />
    ))}
  </div>
);
