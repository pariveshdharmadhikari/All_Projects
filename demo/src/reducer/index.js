import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './UserReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';
export default combineReducers(
    {
        users:UserReducer,
        form:formReducer,
        toastr: toastrReducer
    }
)