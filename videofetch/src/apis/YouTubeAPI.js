import axios from 'axios'

const KEY = 'AIzaSyBJJMDMRx9VnKuL_AZmCMMtsntiqvc_PQc';  

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params :{
        part:'snippet',
        maxResults:8,
        key : KEY,
       
    }
});