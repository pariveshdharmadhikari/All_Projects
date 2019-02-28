import {combineReducers} from 'redux';

//Reducers to perform action for selected song
const TodoItem= (task=[],action) => {
    switch(action.type)
    {
        
        //case Task_ADD which will add task to task array.
        case 'TASK_ADD':
            
            return [...task, action.payload];
        
        //case Task_DELETE which will delete task from existing task array.    
        case 'TASK_DELETE':
            task.splice(action.payload,1) ;
            return [...task];

        //case Task_EDIT which will Edit task in existing task array according to selected id.    
        case 'TASK_EDIT':
            task.splice(action.payload.id,1,action.payload.data);
            return [...task];
        
            //default case
        default:
            return task;
    }
    
};


//it will make combine set of reducers
export default combineReducers({
    tasks:TodoItem
});