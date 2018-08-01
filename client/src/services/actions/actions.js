import axios from 'axios';

export const signUp = (user) => {
    return function(dispatch){
        axios
            .post('users/signup', user)
            .then(res => dispatch({
                type: 'LOCAL_SIGNUP',
                payload: res.data.token
            }));
    };
};