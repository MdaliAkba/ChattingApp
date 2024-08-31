import { useSelector } from "react-redux";
import { BsCloudUpload } from "react-icons/bs";
import UserList from "./UserList";
import FrientRequest from "./FriendRequest";
import BlockedUsers from "./BlockedUsers";
import Friend from "./Friend";
import MyGroup from "./MyGroup";
import GroupList from "./GroupList";
import { FaHome } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { IoCreateSharp } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";



const Header = () => {

   // const navigate = useNavigate()
   const data = useSelector((state) => state);
   console.log(data);
   
   // useEffect(() => {
   //    if (!data){
   //       navigate('/')
   //    }
   // },[])

    return (
        <div id="header">
           <div className="main">
        <div className="left">
            <div className="img ">
           <img src={data?.photoURL} alt="" />
            <div className="upload_icon">
               <BsCloudUpload></BsCloudUpload>
            </div>
            
            </div>
            <div className="profilename"><h1>ALI AKBAR</h1></div>
            <div className="profile_icons">
               <ul>
                  <li><FaHome /></li>    
                  <li><FaRocketchat /></li>
                  <li> <CgDetailsMore /></li>
                  <li><IoCreateSharp /></li>
                  <li><MdNotificationsActive /></li>
                  <li><RiUserSettingsFill /></li>
               </ul>
            </div>
            <div className="logout_icons">
               <ul>
                  <li><GrLogout /></li>
               </ul>
               </div>
        </div>
        <div className="right">
           <div className="item"><GroupList></GroupList></div>
           <div className="item"><Friend></Friend></div>
           <div className="item"><UserList></UserList></div>
           <div className="item"><FrientRequest></FrientRequest></div>
           <div className="item"><MyGroup></MyGroup></div>
           <div className="item"><BlockedUsers></BlockedUsers></div>
        </div>
           </div>
        </div>
    );
};

export default Header;