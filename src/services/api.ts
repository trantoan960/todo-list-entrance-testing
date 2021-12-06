import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "https://todo-list-entrance-testing-api.herokuapp.com/api/v1",
});
