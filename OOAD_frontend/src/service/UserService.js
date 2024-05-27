import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {

    login(user) {
        return axios.post(API_URL + "/login", user);
    }

}

export default new UserService();