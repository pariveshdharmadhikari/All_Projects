//action which call when user add the task
export const TodoAdd= task => {
    
    return{
        type:'TASK_ADD',
        payload: task
    };
}

//action which call when user deleete the task
export const TodoDelete=id=>{
    return{
        type:'TASK_DELETE',
        payload:id
    }
}

//action which call when user edit the task
export const TodoEdit=(id,data)=>{
    return{
        type:'TASK_EDIT',
        payload:{
            id:id,
            data:data
        }    
    }
}
