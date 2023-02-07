import axios from "axios";

export default axios.create({
  baseURL : "https://906d-106-214-0-199.in.ngrok.io/",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});
