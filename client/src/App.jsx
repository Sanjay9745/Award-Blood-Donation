import { Route, Routes } from "react-router-dom";
import "./App.css";
import DonarSearch from "./components/DonarSearch/DonarSearch";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import ProfileList from "./components/ProfileList/ProfileList";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/donar-search" element={<DonarSearch />} />
        <Route path="/profile-list/:district/:bloodGroup" element={<ProfileList />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<HomePage />} />

      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
