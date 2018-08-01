export default function (state = null, action){

    switch(action.type){

        case 'LOCAL_SIGNIN':
            return action.payload || false;
        case 'LOCAL_SIGNUP':
            console.log('ACTION - ', action.payload);
            return action.payload || false;
        default:
            return state;
    }
}
