import {combineReducers} from 'redux';


const TodoItem = (state=[],action)=>{
   

    switch(action.type)
    {
        case 'FETCH_TASKS':
        return {...state,task:action.payload};
        
        default :
        return state

    }
}

//it will make combine set of reducers
export default combineReducers({
    tasks:TodoItem
});