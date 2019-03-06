import axios from 'axios';

export const createUser = (formvalues,callBackResponse )  => async (dispatch) => {

    var headers = {
        'Content-Type': 'application/json',
    }

    const response = await axios.post('http://183.182.84.84/restapi/wp-json/wp/v2/users/register', formvalues,{headers:headers});
    console.log(response,'action');
        callBackResponse(response);
        dispatch({
            type: 'CREATE_USER',
            payload: response
        });
        
}

export const login = (formvalues,callBackResponse) => async (dispatch) => {
    var headers = {
        'Content-Type': 'application/json',
    }
    const response = await axios.post('http://183.182.84.84/restapi/wp-json/jwt-auth/v1/token', formvalues,{headers:headers});
        console.log(response);
        callBackResponse(response);
        dispatch({
            type: 'CREATE_USER',
            payload: response
        });
}