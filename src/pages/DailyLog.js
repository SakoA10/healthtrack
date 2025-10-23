import { Link } from "react-router-dom";
import LogCard from "../components/LogCard";
import { logs } from "../data/logs";

function DailyLog() {
  return (
    <div className="container">
      <h2>Daily Logs</h2>
      {logs.map((log) => (
        <Link key={log.date} to={`/log/${log.date}`} style={{ textDecoration: "none", color: "inherit" }}>
          <LogCard log={log} />
        </Link>
      ))}
    </div>
  );
}

export default DailyLog;
