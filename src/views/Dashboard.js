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
    		<div id = "Moves"> 
	    		<div id = "MovesList">
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    			<div id = "Move"> New Move </div>
	    		</div>

    			<button id = "AddMove"> + Add Move </button>


    		</div>
    		<div id = "Panel">
    			<div id = "Grid"> </div>
    			<div id = "Judges"> Judging Panel </div>
    			<div id = "MusicPanel">
    				<button id = "UploadMusic"> Upload Music </button>
	    			<audio src= {Nutcracker} controls = {true} id = "MusicPlayer">
	                    <source  type="audio/mp3"/>
	                    Your browser does not support the audio tag.
	                </audio>
                </div>
    		</div>
    	</div>
    );
}

export default Dashboard;
    