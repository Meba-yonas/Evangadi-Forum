import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://evangadi-forum-id1y.onrender.com" + "/api",
});

export default axiosBaseURL;
export const axiosImageURL = "https://evangadi-forum-id1y.onrender.com";
