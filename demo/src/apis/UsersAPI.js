import axios from 'axios';
export default axios.create({
    baseURL:'http://183.182.84.84/restapi/wp-json/wp/v2/users/'
});