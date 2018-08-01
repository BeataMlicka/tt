const initial = {
    playerName: 'player',
    opponentName: 'opponent',
    eventName: 'match',
    date: '',
    serve: true,
    playerTableSide: 'lower',
    setsLimit: 3,
    kindOfTest: ''
}


export default function initialData(state = initial, action){

    switch(action.type){
        case 'SET_PLAYER_NAME':
            return {
                ...state,
                playerName: action.name
            }
        case 'SET_OPPONENT_NAME':
            return {
                ...state,
                opponentName: action.name
            }
        case 'SET_EVENT_NAME':
            return {
                ...state,
                eventName: action.name
            }
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }
        case 'SET_SERVE':
            return {
                ...state,
                serve: action.serve
            }        
        case 'SET_TABLE_SIDE':
            return {
                ...state,
                playerTableSide: action.side
            }
        case 'SET_NUMBER_OF_SETS':
            return {
                ...state,
                setsLimit: action.sets
            }
        case 'SET_KIND_OF_TEST':
            return {
                ...state,
                kindOfTest: action.test
            }
        case 'RESET_INITIAL_DATA':
            return {
                playerName: 'player',
                opponentName: 'opponent',
                eventName: 'match',
                date: '',
                serve: true,
                playerTableSide: 'lower',
                setsLimit: 3,
                kindOfTest: ''               
            }
        default:
            return state;
    }
}