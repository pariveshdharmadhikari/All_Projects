import tasks from '../api/TaskAPI'
import axios from 'axios';


export const TodoAdd = task=> async (dispatch) => {
    await tasks.post('/tasks', {task});
    const response = await tasks.get('/tasks');
    dispatch({
        type: 'FETCH_TASKS',
        payload: response.data
    });
}

export const deleteTasks = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:3003/tasks/${id}`);
    const response = await tasks.get('/tasks');
    dispatch({
        type: 'FETCH_TASKS',
        payload: response.data
    });
}

export const editTask = (id,Values) => async (dispatch) => {
    await tasks.put(`/tasks/${id}`,Values);
    const response = await tasks.get('/tasks');
    dispatch({
        type: 'FETCH_TASKS',
        payload: response.data
    });
    
}

export const fetchTasks = () => async (dispatch) => {
    const response = await tasks.get('/tasks');
    dispatch({
        type: 'FETCH_TASKS',
        payload: response.data
    });
}