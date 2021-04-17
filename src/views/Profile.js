import './Profile.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import profileimg from '../assets/profile.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



function Profile() {

    axios.defaults.baseURL = "http://localhost:3001";

    const { user } = useAuth0();
    const { email } = useParams();

    const [isOwnProfile, setIsOwnProfile] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
    axios.get('/users/' + user.email) //get email from auth0
            .then(res => {
                if (res.data != null) {
                    setUserInfo(res.data[0])

                }
                if (res.data.email == user.email) {
                    setIsOwnProfile(true);
                }
            })
            .catch(err => console.log(err));
    }, [email]);

    return (
    	<div id = "Profile">
            <div id = "Sidebar">
                <img src = {profileimg} id = "profileimg" />
                <p> Username:  {userInfo.username} </p>
                <p> Email: {user.email} </p>
                <p> Country: {userInfo.country} </p>
                <p> Instagram: {userInfo.insta} </p>
                <p> Contact #: {userInfo.contact} </p>
                <Link to = "/EditProfile"> Edit Profile </Link>
            </div>
    
    	
    	
    	</div>
    );
}

export default Profile;
    