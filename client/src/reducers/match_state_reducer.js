const initial = {
    endMatch: false,
    wonPoints: 0,
    lostPoints: 0,
    allPoints: 0,
    allCheckedPlace: 0,
    wonSets: 0,
    lostSets: 0,
    allSets: 0,
    lastAction: false,
    lastBall: '',
    tableSite: 'down',
    playerSetsPoints: [],
    opponentSetsPoints: []
}

export default function matchState(state = initial, action){

    switch(action.type){
        case 'ADD_WON_POINT':
            return {
                ...state,
                wonPoints: state.wonPoints + 1,
                allPoints: state.allPoints + 1
            }
        case 'ADD_LOST_POINT':
            return {
                ...state,
                lostPoints: state.lostPoints + 1,
                allPoints: state.allPoints + 1
            }
        case 'ADD_CHECKED_PLACE':
            return {
                ...state,
                allCheckedPlace: state.allCheckedPlace + 1,
            }
        case 'RESET_WON_POINTS':
            return {
                ...state,
                wonPoints: 0
            }
        case 'RESET_LOST_POINTS':
            return {
                ...state,
                lostPoints: 0
        }
        case 'ADD_WON_SET':
            return {
                ...state,
                wonSets: state.wonSets + 1,
                allSets: state.allSets + 1
            }
        case 'ADD_LOST_SET':
            return {
                ...state,
                lostSets: state.lostSets + 1,
                allSets: state.allSets + 1,
            }
        case 'SET_LAST_ACTION':
            return {
                ...state,
                lastAction: action.value
            }
        case 'SET_LAST_BALL':
            return {
                ...state,
                lastBall: action.ball
            }
        case 'ADD_PLAYER_SETS_POINTS':
            //console.log(state.playerSetsPoints);
            state.playerSetsPoints.push(action.points);
            return {
                ...state,
                playerSetsPoints: state.playerSetsPoints
            }
        case 'ADD_OPPONENT_SETS_POINTS':
            //console.log(state.opponentSetsPoints);
            state.opponentSetsPoints.push(action.points);
            return {
                ...state,
                opponentSetsPoints: state.opponentSetsPoints
            }
        case 'SET_MATCH_STATE':
            return {
                ...state,
                endMatch: action.finish
            }
        case 'RESET_MATCH_STATE':

            state.playerSetsPoints.slice(0);
            state.opponentSetsPoints.slice(0);

            return {
                endMatch: false,
                wonPoints: 0,
                lostPoints: 0,
                allPoints: 0,
                allCheckedPlace: 0,
                wonSets: 0,
                lostSets: 0,
                allSets: 0,
                lastAction: false,
                lastBall: '',
                tableSite: 'down',
                playerSetsPoints: state.playerSetsPoints,
                opponentSetsPoints: state.opponentSetsPoints            
            }
        default:
            return state;
    }
}