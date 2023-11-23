import { useNavigate, useParams } from "react-router-dom";
import "./ProfileList.css";
import { useEffect, useState } from "react";
import SERVER_URL from "../../config/SERVER_URL";
import axios from "axios";
function ProfileList() {
  const { district, bloodGroup } = useParams();
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("name");
  const [search, setSearch] = useState("");
  const [originalUsers, setOriginalUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(SERVER_URL + "/user/users/" + district + "/" + bloodGroup)
      .then((res) => {
        if (res.status === 200) {
          setUsers(res.data);
          setOriginalUsers(res.data);
        }
      });
  }, [district, bloodGroup]);
  useEffect(() => {
    if (search === "") {
      setUsers(originalUsers);
    } else {
      axios
        .get(SERVER_URL + `/user/users/search/${district}/${bloodGroup}?selected=${selected}&search=${search}`)
        .then((res) => {
       if(res.status === 200){
         setUsers(res.data)
       }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <>
      <div className="container">
        <div className="app">
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => navigate("/donar-search")}
          ></i>
          <div className="profile-list-container">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                name="select"
                id="select"
                onClick={(e) => setSelected(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="place">Place</option>
              </select>
            </div>
            <div className="table">
              <div className="table-header">
                <div className="header__item">
                  <a id="name" className="filter__link" href="#">
                    Name
                  </a>
                </div>
                <div className="header__item">
                  <a id="name" className="filter__link" href="#">
                    Place
                  </a>
                </div>
                <div className="header__item">
                  <a
                    id="wins"
                    className="filter__link filter__link--number"
                    href="#"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="table-content">
                {users.map((user) => (
                  <>
                    <div className="table-row">
                      <div className="table-data">{user.name}</div>
                      <div className="table-data">{user.place}</div>
                      <div className="table-data">
                        <button
                          onClick={() => navigate("/profile/" + user._id)}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileList;
