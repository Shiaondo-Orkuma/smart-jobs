import React from "react";
import { Typography } from "@material-ui/core";
import "../App.css";

export const Job = ({ job }) => (
  <div className={"job"}>
    <p>{job.title}</p>
    <p>{job.company}</p>
  </div>
);
