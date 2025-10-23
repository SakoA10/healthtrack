import React from "react";
import { useParams, Link } from "react-router-dom";
import { logs } from "../data/logs";

function DailyLogDetail() {
  const { date } = useParams();
  const log = logs.find(l => l.date === date);

  if (!log) {
    return (
      <div className="container">
        <h2>Log not found</h2>
        <Link to="/daily-log">Back to Daily Logs</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Log for {log.date}</h2>
      <p><strong>Meals:</strong></p>
      <ul>
        {log.meals.map((meal, i) => <li key={i}>{meal}</li>)}
      </ul>

      <p><strong>Exercises:</strong></p>
      <ul>
        {log.exercises.map((ex, i) => <li key={i}>{ex}</li>)}
      </ul>

      <p><strong>Water:</strong> {log.water}</p>
      <Link to="/daily-log">Back to Daily Logs</Link>
    </div>
  );
}

export default DailyLogDetail;
