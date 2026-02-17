
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <h1>Dashboard</h1>
        <p>You are logged out</p>
        <button onClick={() => navigate("/")}>Login</button>
      </div>
    </div>
  );
}

export default Dashboard;

