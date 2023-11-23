import axios from "axios";
import "./RegisterPage.css";
import SERVER_URL from "../../config/SERVER_URL";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function RegisterPage() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const navigate = useNavigate();
  function handleRegister(){
    //validate data
    if(name===""||place===""||phoneNumber===""||bloodGroup===""||district===""){
      toast.error("Please Fill All The Fields")
      return
    }
    axios.post(SERVER_URL+"/user/register",{
      name:name,
      place:place,
      phone_number:phoneNumber,
      blood_group:bloodGroup,
      district:district
    }).then((response)=>{
      if(response.status===200){
        toast.success("Registered Successfully")
      }else{
        toast.error("User Already Exist")
      }
    }).catch((err)=>{
      console.log(err);
      toast.error("User Already Exist")
    })
  }
  return (
    <>
      <div className="container">
        <div className="app" style={{ background: `url('./home.png')` }}>
        <i className="fa-solid fa-chevron-left" onClick={()=>navigate("/")}></i>
          <div className="register-form">
            <div className="input-container">
              <label htmlFor="name">
                <i className="fa-solid fa-user"></i>
              </label>
              <input type="text" name="name" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="input-container">
              <label htmlFor="place">
                <i className="fa-solid fa-location-dot"></i>
              </label>
              <input type="text" name="place" id="place" placeholder="Place" onChange={(e)=>setPlace(e.target.value)}/>
            </div>
            <div className="input-container">
              <label htmlFor="phone_number">
                <i className="fa-solid fa-phone"></i>
              </label>
              <input
                type="number"
                name="phone_number"
                id="phone_number"
                placeholder="Phone Number"
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
            </div>
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
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
