import JSONPlaceholder from '../apis/JSONPlaceholder';
import _ from 'lodash';

export const fetchPosts=()=>async (dispatch)=>{
        const promises = await JSONPlaceholder.get('/posts');
        dispatch({
            type:'FETCH_POST',
            payload:promises.data
        });
};


// 3 TYPES  OF FETCHING USER FROM API....


// NO. 1 ==>

// export const fetchUser=(id)=> async (dispatch)=>{
//     const promises = await JSONPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:promises.data
//     });
// };


//=====================================================================

// NO. 2 ==>

// export const fetchUser= function (id){
//     return async function (dispatch){
//     const promises = await JSONPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:promises.data
//     });
// }
// };

//======================================================================

// NO. 3 ( FOR DENIED MULTIPLE DUPLICATE REQUEST ) ==>

export const fetchUser= id=>dispatch=>{
    _fetchuser(id,dispatch);
};
    
const _fetchuser = _.memoize(async(id,dispatch)=>{
    const response = await JSONPlaceholder.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    });
});
