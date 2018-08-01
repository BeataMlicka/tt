import axios from 'axios';
import { GOOGLE_AUTH } from './types';


export const googleAuth = () => {
    return function(dispatch){
        axios
            .get('api/current_user')
            .then(res => dispatch({
                type: GOOGLE_AUTH,
                payload: res.data
            }));
    };
};

export const signIn = (user) => {
    return function(dispatch){
        axios
            .post('users/signin', user)
            .then(res => dispatch({
                type: 'LOCAL_SIGNIN',
                payload: res.data.token
            }));
    };
};

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


export const localAuth = (token) => {
    return function(dispatch){
        axios
            .get('users/access', { headers: { 'Authorization': `${token}` } })
            .then(res => dispatch({
                type: 'SET_USER_STATUS',
                payload: res.status
            }));
    };
};

export const setAuthMethod = (method) => { return { type: 'SET_AUTH_METHOD', method } }

//user data actions
export const setUsername = (username) => { return { type: 'SET_USERNAME', username } }
export const setUserEmail = (email) => { return { type: 'SET_USER_EMAIL', email } }

//Match initial data

export const setPlayerName = (name) => { return { type: 'SET_PLAYER_NAME', name } }
export const setOpponentName = (name) => { return { type: 'SET_OPPONENT_NAME', name } }
export const setEventName = (name) => { return { type: 'SET_EVENT_NAME', name } }
export const setServe = (serve) => { return { type: 'SET_SERVE', serve } }
export const setTableSide = (side) => { return { type: 'SET_TABLE_SIDE' } }
export const setNumberOfSets = (sets) => { return { type: 'SET_NUMBER_OF_SETS', sets } }
export const setDate = (date) => { return { type: 'SET_DATE', date } }
export const setKindOfTest = (test) => { return { type: 'SET_KIND_OF_TEST', test } }
export const resetMatchState = () => { return { type: 'RESET_MATCH_STATE'} }

//Match data

export const addWonPoint = () => { return { type: 'ADD_WON_POINT' } }
export const addLostPoint = () => { return { type: 'ADD_LOST_POINT' } }

export const resetWonPoints = () => { return { type: 'RESET_WON_POINTS' } }
export const resetLostPoints = () => { return { type: 'RESET_LOST_POINTS' } }

export const addWonSet = () => { return { type: 'ADD_WON_SET' } }
export const addLostSet = () => { return { type: 'ADD_LOST_SET' } }

export const setLastAction = (value) => { return { type: 'SET_LAST_ACTION', value } }
export const setLastBall = (ball) => { return { type: 'SET_LAST_BALL', ball } }

export const addPlayersSetsPoints = (points) => { return { type: 'ADD_PLAYER_SETS_POINTS', points } }
export const addOpponentSetsPoints = (points) => { return { type: 'ADD_OPPONENT_SETS_POINTS', points } }

export const addCheckedPlace = () => { return { type: 'ADD_CHECKED_PLACE' } }

export const resetInitialData = () => { return { type: 'RESET_INITIAL_DATA'} }

//Balls actions

export const addWonBall = (ball) => { return { type: 'ADD_WON_BALL', ball } }
export const addLostBall = (ball) => { return { type: 'ADD_LOST_BALL', ball } }


//Where the ball falls

export const addWonPlace = (place, ball) => { return { type: 'ADD_WON_PLACE', place, ball } }
export const addLostPlace = (place, ball) => { return { type: 'ADD_LOST_PLACE', place, ball } }

export const resetTablePlaces = () => { return { type: 'RESET_TABLE_PLACES'} }
