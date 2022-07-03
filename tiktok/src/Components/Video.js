import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

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
				className="video__player"
				onClick={handleVideoPress}
				loop
				ref={videoRef}
				src="https://v16m-webapp.tiktokcdn-us.com/abf5c1d995f5df944701cbe87048f9d7/62c224c2/video/tos/useast2a/tos-useast2a-ve-0068c003/c89bd021836547f2a2c76f3923eba2d1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1224&bt=612&cs=0&ds=3&ft=ebtHKH-qMyq8ZkrZ6we2NE0yfl7Gb&mime_type=video_mp4&qs=0&rc=Mzc1ZjRpNjo3OjU7PDg8NUBpam5zPDo6ZnZmPDMzNzczM0AxLzYuYDQyXjQxNmFeM2EvYSNvZGVlcjRvaF9gLS1kMTZzcw%3D%3D&l=2022070317223301000400500600304700444D35"
			></video>
			<VideoFooter />
			<VideoSidebar />
		</div>
	);
}

export default Video;
