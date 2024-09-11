import axios from "axios";

// FOR LOCAL USING JSON-SERVER
const BASE_URL = "http://localhost:3000";

export default axios.create({
  baseURL: BASE_URL,
});
