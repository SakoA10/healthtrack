import React from "react";

function LogCard({ log }) {
  return (
    <div className="log-card">
      <h3>{log.date}</h3>
      <p><strong>Meals:</strong> {log.meals.join(", ")}</p>
      <p><strong>Exercises:</strong> {log.exercises.join(", ")}</p>
      <p><strong>Water:</strong> {log.water}</p>
    </div>
  );
}

export default LogCard;
