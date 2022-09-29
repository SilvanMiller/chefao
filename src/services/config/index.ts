import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    }
});



// export default baseUrl
