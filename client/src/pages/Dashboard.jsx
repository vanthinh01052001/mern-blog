import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/profile/DashProfile";
import DashPosts from "../components/post/DashPosts";
import DashUsers from "../components/user/DashUsers";
import DashComments from "../components/comment/DashComments";
import DashboardComp from "../components/dashboard/Dashboard";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* searchBar  */}
        <DashSidebar />
      </div>
      {/* profile  */}
      {tab === "profile" && <DashProfile />}
      {/* posts   */}
      {tab === "posts" && <DashPosts />}
      {/* users  */}
      {tab === "users" && <DashUsers />}
      {/* comments  */}
      {tab === "comments" && <DashComments />}
      {/* dashboard  */}
      {tab === "dashboard" && <DashboardComp />}
    </div>
  );
}
