import React from "react";
import "./App.css";
import Video from "./Components/Video.js";

function App() {
  return (
    <div className="app">
			<div className="app__videos">
				<Video />
				<Video />
			</div>
			{/* App Container*/}
			{/* <Video /> */ }
    </div>
  );
}

export default App;
