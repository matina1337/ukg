import './Profile.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import profileimg from '../assets/profile.jpg';
import { useAuth0 } from '@auth0/auth0-react';
//import axios from 'axios';

function Profile() {

    const { user } = useAuth0();
    const { email } = useParams();
    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const [userInfo, setUserInfo] = useState([])

    // getUser = () => {
    //     axios.get('/api')
    //         .then(() => {
    //             console.log('Got user');
    //         })
    //         .catch(() => {
    //             console.log('User not found');
    //         });
    // }

    return (
    	<div id = "Profile">
            <div id = "Sidebar">
                <img src = {profileimg} id = "profileimg" />
                <p> Username: </p>
                <p> Email: </p>
                <p> Country: </p>
                <p> Instagram: </p>
                <p> Contact: </p>
                <Link to = "/EditProfile"> Edit Profile </Link>
            </div>
    
    	
    	
    	</div>
    );
}

export default Profile;
    