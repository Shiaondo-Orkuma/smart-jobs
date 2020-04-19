import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import { Jobs } from "./Componets/Jobs";

const mockJobs = [
  { title: "SWE 1", company: "Google" },
  { title: "SWE 2", company: "Facebook" },
  { title: "SWE 3", company: "Apple" },
  { title: "SWE 4", company: "Amazon" },
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
