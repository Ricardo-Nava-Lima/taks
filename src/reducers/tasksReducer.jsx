
export const tasksReducer = ( state = [], action ) => {
    switch( action.type ){

        case 'ADD_TASK':
            return [ ...state, action.payload ];

        case 'DELETE_TASK':
            return state.filter( task => task.id !== action.payload);

        case 'COMPLETE_TASK':
            return state.map( task => {
                if( task.id === action.payload ) return{
                    ...task,
                    done: !task.done
                }
                else return task;
            })

        default:
            return state
    }
}