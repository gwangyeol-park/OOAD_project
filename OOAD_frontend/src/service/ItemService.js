import axios from "axios"

const API_URL = 'http://localhost:8080/items';

class ItemService {

    postItem(item) {
        return axios.post(API_URL, item);
    }

    getItems() {
        return axios.get(API_URL);
    }

    getItemById(id) {
        return axios.get(API_URL + "/" + id);
    }

    updateItem(item){
        console.log(item);
        return axios.put(API_URL + "/" + item.id, item, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
}

export default new ItemService();