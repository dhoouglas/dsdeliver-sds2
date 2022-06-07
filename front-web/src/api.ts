import axios from "axios";
import { OrderPayload } from "./Orders/types";

const API_URL="http://localhost:8080";
const mapboxToken="pk.eyJ1IjoiZGhvb3VnbGFzIiwiYSI6ImNsM3diaGd0azJ0enUza2w4MWF0OGx2M3QifQ.f54kuA2-ht-wWZ0K-72uOQ";

//const API_URL = process.env.REACT_APP_API_URL;
//const mapboxToken = process.env.REACT_APP_ACESS_TOKEN_MAP_BOX;

export function fetchProducts (){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios (`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload);
}
