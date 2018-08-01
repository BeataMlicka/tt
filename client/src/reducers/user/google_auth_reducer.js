import { GOOGLE_AUTH } from '../../actions/types';

export default function (state = null, action){

    switch(action.type){

        case GOOGLE_AUTH:
             return action.payload || false;
        default:
            return state;
    }
}
