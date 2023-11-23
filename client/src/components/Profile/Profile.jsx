import {  useNavigate, useParams } from "react-router-dom";
import "./Profile.css"
import { useEffect, useState } from "react";
import axios from "axios";
import SERVER_URL from "../../config/SERVER_URL";
function Profile() {
  const {id} = useParams()
  const navigate = useNavigate();
  const [user,setUser] = useState()
  useEffect(()=>{
    axios.get(SERVER_URL+"/user/single-user/"+id).then((response)=>{
      setUser(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      <div className="container">
        <div className="app">
        <i className="fa-solid fa-chevron-left" onClick={()=>navigate(`/profile-list/${user?.district}/${user?.blood_group}`)}></i>
          <div className="profile-container">
            <div className="profile-body">
              <div className="profile-name profile-details">
                <p>Name :</p>
                <p>{user?.name}</p>
              </div>
              <div className="profile-place profile-details">
                <p>Place :</p>
                <p>{user?.place}</p>
              </div>
              <div className="profile-phone-number profile-details">
                <p>Phone Number :</p>
                <p>{user?.phone_number}</p>
              </div>
              <div className="profile-blood-group profile-details">
                <p>Blood Group :</p>
                <p>{user?.blood_group}</p>
              </div>
              <div className="profile-district profile-details">
                <p>District :</p>
                <p>{user?.district}</p>
              </div>
            <div className="profile-footer">
              <a href={`tel:${user?.phone_number}`} target="blank"><button className="profile-edit-btn">Call</button></a>  
              <a href={`https://wa.me/91${user?.phone_number}`} target="blank"> <button className="profile-delete-btn">Message</button></a>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
