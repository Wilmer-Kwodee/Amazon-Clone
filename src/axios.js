import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-91ace/us-central1/api'
    // this link is from the terminal 
})

export default instance;