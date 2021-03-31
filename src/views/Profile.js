import './Profile.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import profileimg from '../assets/profile.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Profile() {

    const { user } = useAuth0();


    return (
    	<div id = "Profile">
            <div id = "Sidebar">
                <img src = {profileimg} id = "profileimg" />
                <p> Username: </p>
                <p> Email: {user.email} </p>
                <p> Country: </p>
                <p> Instagram: </p>
                <p> Contact: </p>
                <Link to = "/EditProfile"> Edit Profile </Link>
            </div>
    
    	
    	
    	</div>
    );
}

export default Profile;
    