import React from "react";
import { logs } from "../data/logs";
import ProgressChart from "../components/ProgressChart";

function Progress() {
  return (
    <div className="container">
      <h2>Weekly Progress</h2>
      <ProgressChart logs={logs} />

      <h3>Daily Summary</h3>
      {logs.map((log) => (
        <div key={log.date} className="log-card">
          <h4>{log.date}</h4>
          <p>Meals: {log.meals.length}</p>
          <p>Exercises: {log.exercises.length}</p>
          <p>Water: {log.water}</p>
        </div>
      ))}
    </div>
  );
}

export default Progress;
