import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {

    getNameByEmail(email){
        return axios.get(API_URL + "/user/" + email);
    }

    login(user) {
        return axios.post(API_URL + "/login", user);
    }

    signup(user) {
        return axios.post(API_URL + "/signup", user);
    }

}

export default new UserService();