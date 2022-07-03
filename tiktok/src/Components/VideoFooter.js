import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>@myname</h3>
				<p>This is some description</p>
				<div className="videoFooter__ticker">
					<MusicNoteIcon className="videoFooter__icon" />
					
				</div>
			</div>
			<img
				className="videoFooter__record"
				src="https://static.thenounproject.com/png/934821-200.png"
				alt=""
			/>
		</div>
	);
}

export default VideoFooter;
