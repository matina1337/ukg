import './Home.css';
import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
    	<div id = "Home">
    	<p id = "MessageHome"> Get started! Create a new program or load a saved project </p>
    	<div>
	    	<Link className = "Create" to = "/Dashboard"> + Create New Program </Link>
	    	<Link className = "Create"> Find Saved Program </Link>
    	</div>
    	
    	
    	</div>
    );
}

export default Home;
    