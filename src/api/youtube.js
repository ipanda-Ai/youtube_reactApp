import axios from "axios";

const KEY = "AIzaSyADU4gc60BYQ6rL6dRC3En9ns4ETA4d4VA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
