import {combineReducers} from 'redux';

//Reducers to perform action for selected song
const requestVideo= (requestedvideo = null,action) => {

    if(action.type === 'FETCH_VIDEO'){
        return action.payload;
    }
    return requestedvideo;
};

//it will make combine set of reducers
export default combineReducers({
    videos:requestVideo
});