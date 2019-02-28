import PostReducers from './PostReducers'
import UserReducers from './UserReducers'
import { combineReducers } from 'redux'


export default combineReducers({
    posts:PostReducers,
    users:UserReducers
});