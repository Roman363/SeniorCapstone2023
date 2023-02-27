import axios from 'axios';

const PAGE_URL =  "http://localhost:3000/NetworkStatistics";

class UserService {


    getData(){
        return axios.get(PAGE_URL);
    }






}