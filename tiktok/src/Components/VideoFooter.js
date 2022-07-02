import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>@dnguyen</h3>
				<p>Some descriptions</p>
				<div className="videoFooter__ticker">
					
				</div>
			</div>
			<img
				className="videoFooter__record"
				src=""
				alt=""
			/>
		</div>
	);
}

export default VideoFooter;