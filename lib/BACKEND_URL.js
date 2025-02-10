// const BACKEND_URL = "http://3.109.121.71:5000/api"
const BACKEND_URL = "http://localhost:5000/api";
export default BACKEND_URL;
export const token = localStorage.getItem("accessToken").replace(/^"|"$/g, "");
