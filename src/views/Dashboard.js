import './Dashboard.css';
import React from "react";
import Nutcracker from "./test.mp3";


function Dashboard() {
let audio = new Audio("./test.mp3")
const start = () => {
    audio.play()
}
    return (
    	<div id = "Dash">
    		<div id = "MovesList"> </div>
    		<div id = "Panel">
    			<div id = "Grid"> </div>
    			<div id = "Judges"> Judging Panel </div>
    			<audio src= {Nutcracker} controls = {true} id = "Music">
                    <source  type="audio/mp3"/>
                    Your browser does not support the audio tag.
                </audio>
    		</div>
    	</div>
    );
}

export default Dashboard;
    