import axios from "axios";

const BASE_URL = "http://localhost:3001";

export function getCommerces() {
  return axios
    .get(`${BASE_URL}/commerces/allcommerces`)
    .then(response => response.data);
}
