import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Components/Video.js";

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const response = await axios.get("/v2/posts");
			setVideos(response.data);

			return requestAnimationFrame;
		}

		fetchPosts();
	}, []);

	return (
		<div className="app">
			<div className="app__videos">
				{videos.map(({url, channel, description, song, likes, messages, shares}) => (
					<Video
						url={url}
						channel={channel}
						description={description}
						song={song}
						likes={likes}
						messages={messages}
						shares={shares}
					/>
				))};
			</div>
		</div>
	);
}

export default App;
