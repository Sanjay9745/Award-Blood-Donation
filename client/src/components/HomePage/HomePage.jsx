import { useNavigate } from "react-router-dom";
import "./HomePage.css";    
function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container">
        <div className="app" style={{background:`url('./child.png')`,backgroundSize:"cover"}}>
            <div className="home-header">
                <img src="./heart.jpeg" className="heart-img" />
            </div>
            <div className="home-body">
                <button onClick={()=>navigate("/register")}>Donate</button>
                <button onClick={()=>navigate("/donar-search")}>Request</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
