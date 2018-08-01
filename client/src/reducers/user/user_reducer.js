const initial = {
    // status: '',
    method: '',
    username: '',
    email: '',
    status: 404
}

export default function user(state = initial, action){

    
    switch(action.type){
        case 'SET_AUTH_METHOD':
            return {
                ...state,
                method: action.method
            };
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            };
        case 'SET_USER_EMAIL':
            return {
                ...state,
                email: action.email
            };
        case 'SET_USER_STATUS':
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
}