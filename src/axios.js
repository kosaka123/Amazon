import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-5bcf3.cloudfunctions.net/api", //the api (cloud function) url
});

export default instance;