import './Profile.css';
import React from "react";
import { Link } from 'react-router-dom';
import profileimg from '../assets/profile.jpg';

function Profile() {
    return (
    	<div id = "Profile">
            <div id = "Sidebar">
                <img src = {profileimg} id = "profileimg" />
                <p> Username: </p>
                <p> Country: </p>
                <p> Instagram: </p>
                <p> Contact: </p>
                <Link to = "/EditProfile"> Edit Profile </Link>
            </div>
    
    	
    	
    	</div>
    );
}

export default Profile;
    