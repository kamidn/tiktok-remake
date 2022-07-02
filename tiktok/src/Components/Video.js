import React, { useState, useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);
	
	const handleVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return (
		<div className="video">
			<video
				onClick={handleVideoPress}
				className="video__player"
				loop
				ref={videoRef}
				src="https://v16m-default.tiktokcdn-us.com/3122592f826e20f831c5552ba6b7317f/62bfaf8c/video/tos/useast2a/tos-useast2a-pve-0068/7d5d78cbb6f7414a925a71a9b330818a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1662&bt=831&cs=0&ds=3&ft=eXWR6H-qMyq8Zqq-7we2NLpefl7Gb&mime_type=video_mp4&qs=0&rc=NzplNjYzNTo5NDY8PDk0ZUBpanB1bzs6Zm48ZDMzNzczM0BhYV5hYDUyX14xLWMuM2JfYSNzX3BxcjRfZi9gLS1kMTZzcw%3D%3D&l=2022070120374801000200773500202802748BD2">

			</video>

			<VideoFooter />
			<VideoSidebar />
		</div>
	);
}

export default Video;