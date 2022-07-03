import axios from "axios";

const instance = axios.create ({
	baseURL: "https://dnguyen-tiktok-backend.herokuapp.com/"
});

export default instance;