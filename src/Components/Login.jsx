import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");

  const handleLogin = () => {
    
    if (!password.trim()) {
      alert("Please enter password");
      return; 
    }
  if(!username.trim())
  {
    alert("please give username");
    return;
  }
   
    navigate("/home");
  };
  return (
    <div className="page">
      <div className="card">
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br></br>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
        <button onClick=/*{() => navigate("/home")}*/{handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;



