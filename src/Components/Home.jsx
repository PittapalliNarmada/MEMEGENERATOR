import { useState } from "react";
import { useNavigate } from "react-router-dom";
import memeImg from "../image.png";

function Home() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const navigate = useNavigate();

  const generateMeme = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );
    const data = await res.json();
    setSetup(data[0].setup);
    setPunchline(data[0].punchline);
  };

  return (
    <div className="page">
      <div className="card">
        <h1>MEME GENERATION</h1>
        <img src={memeImg}  className="home-image" /><br></br>

        {setup && <p className="text1">{setup}</p>}
        {punchline && <p className="text2">{punchline}</p>}

        <button onClick={generateMeme}>Generate</button>
        <br /><br />
        <button onClick={() => navigate("/dashboard")}>Logout</button>
      </div>
    </div>
  );
}

export default Home;


