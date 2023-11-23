import { useNavigate } from "react-router-dom";
import "./DonarSearch.css";
import { useState } from "react";
function DonarSearch() {
  const navigate = useNavigate();
  const [bloodGroup,setBloodGroup] = useState("");
  const [district,setDistrict] = useState("");
  function handleClick(){
    if(bloodGroup===""||district===""){
      return
    }
    navigate(`/profile-list/${district}/${bloodGroup}`)
  }
  return (
    <>
      <div className="container">
        <div className="app" style={{ background: `url('./home.png')` }}>
        <i className="fa-solid fa-chevron-left" onClick={()=>navigate("/")}></i>
          <div className="donar-search-header">
            <h1>Select the District</h1>
          </div>
          <div className="donar-search-body">
          <div className="input-container">
              <i className="fa-solid fa-droplet"></i>
              <select name="blood-group" id="blood-group" onChange={(e)=>setBloodGroup(e.target.value)}>
                <option
                  className="select-placeholder"
                  value=""
                  disabled
                  selected
                >
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="input-container">
              <i className="fa-solid fa-building"></i>

              <select name="kerala-district" id="kerala-district" onChange={(e)=>setDistrict(e.target.value)}>
                <option value="" disabled selected>
                  Select District
                </option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Idukki">Idukki</option>
                <option value="Kannur">Kannur</option>
                <option value="Kasaragod">Kasaragod</option>
                <option value="Kollam">Kollam</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Wayanad">Wayanad</option>
              </select>
            </div>
            <button onClick={handleClick}>Search For Donar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonarSearch;
