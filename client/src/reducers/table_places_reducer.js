const initialState = [

    { id: 'shortBh', 
      results: { won: [], lost: [] }},
    { id: 'shortMid', 
      results: { won: [], lost: [] }},
    { id: 'shortFh', 
      results: { won: [], lost: [] }},
    { id: 'longBh', 
      results: { won: [], lost: [] }},
    { id: 'longMid', 
      results: { won: [], lost: [] }},
    { id: 'longFh', 
      results: { won: [], lost: [] }},
]

export default function tablePlaces(state = initialState, action){

    switch(action.type){

        case 'ADD_WON_PLACE':
        
            const wonItem = state.map(item => {
                if(item.id === action.place){

                    item.results.won.push(action.ball);
                    //console.log('item inside ', item);
                    return {
                        ...item,
                        results: {
                            ...item.results,
                            won: item.results.won
                        }
                    }
                }
                return item
            })
            return wonItem;

        case 'ADD_LOST_PLACE':

            const lostItem = state.map(item => {
                if(item.id === action.place){
                    // console.log('item inside ', item);
                    item.results.lost.push(action.ball);

                    return {
                        ...item,
                        results: {
                            ...item.results,
                            lost: item.results.lost
                        }
                    }
                }
                return item
            })
            return lostItem;
        
        case 'RESET_TABLE_PLACES': 

            state[0].results.won.slice(0);
            state[0].results.lost.slice(0);    
            state[1].results.won.slice(0);
            state[1].results.lost.slice(0);
            state[2].results.won.slice(0);
            state[2].results.lost.slice(0);
            state[3].results.won.slice(0);
            state[3].results.lost.slice(0);
            state[4].results.won.slice(0);
            state[4].results.lost.slice(0);
            state[5].results.won.slice(0);
            state[5].results.lost.slice(0);   

            const newTab = state.map(item => {
                    return {
                        ...state,
                        results: {
                            won: item.results.won,
                            lost: item.results.lost
                        }
                    }
            })
            // console.log('update item', updateItem);
            // console.log('state', state);
            return newTab;
        default:
            return state;
    }
}