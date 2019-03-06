import _ from 'lodash';

export default(state=[],action)=>{
    switch(action.type)
    {
        case 'FETCH_USERS':
        return[...state,action.payload];

        case 'EDIT_STREAM':
        return{...state,[action.payload.id]:action.payload};

        case 'FETCH_STREAM':
        return{...state,[action.payload.id]:action.payload};

        case 'CREATE_USER':
        return{...state,[action.payload.id]:action.payload};

        case 'DELETE_STREAM':
        return _.omit(state,action.payload);
        
        default :
        return state

    }
}