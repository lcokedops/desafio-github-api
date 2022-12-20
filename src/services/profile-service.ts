import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findByName(name: string) {
    return axios.get(`https://api.github.com/users/${name}`);
}
