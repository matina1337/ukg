import './Dashboard.css';
import React, { useState } from "react";
import Nutcracker from "./test.mp3";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';


export default function Dashboard() {

let audio = new Audio("./test.mp3") //playing audio
const start = () => {
    audio.play()

}

const [isOpen, setIsOpen] = useState(false); // modal
function toggleModal() {
    setIsOpen(!isOpen);
 }



    return (
    	<div id = "Dash">
    		<div id = "Moves"> 
	    		<div id = "MovesList">
	    			<div id = "MoveCont">
		    			<div id = "Move"> Move 1 </div>

		    			<button onClick = {toggleModal}> + </button>
		    			      <Modal
						        isOpen={isOpen}
						        onRequestClose={toggleModal}
						        contentLabel="My dialog"
						        className="mymodal"
						        overlayClassName="myoverlay"
						        closeTimeoutMS={500}
						      >
						      	<div id = "Modal_head">
							      	<div id = "Modal_title">Move 1</div>
							        <button id = "Close_modal" onClick={toggleModal}>x</button>
							    </div>

								<select name="type" class="Select">
									<option value="default">Type</option>
								  <option value="jump">Jump</option>
								  <option value="spin">Spin</option>
								  <option value="choreo">Choreography</option>
								</select>

								<div id = "jump">

									<select name="jump" class="Select">
										<option value="default">Jump</option>
									  <option value="sal">Salchow</option>
									  <option value="toe">Toe Loop</option>
									  <option value="loop">Loop</option>
									  <option value="flip">Flip</option>
									  <option value="lutz">Lutz</option>
									  <option value="axel">Axel</option>
									</select>

									<select name="rotations" class="Select">
										<option value="default">#</option>
									  <option value="sal">1</option>
									  <option value="toe">2</option>
									  <option value="loop">3</option>
									  <option value="flip">4</option>
									</select>

								</div>

								<input type="text" className = "Time" placeholder = "Minutes"></input>
								<input type="text" className = "Time" placeholder = "Seconds"></input>


						      </Modal>
	    			</div>

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
    