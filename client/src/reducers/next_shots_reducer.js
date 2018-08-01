const initialState = [

    { id: 'firstBall', 
      results: { won: 0, lost: 0 }},
    { id: 'secondBall', 
      results: { won: 0, lost: 0 }},
    { id: 'thirdBall', 
      results: { won: 0, lost: 0 }},
    { id: 'fourthBall', 
      results: { won: 0, lost: 0 }},
    { id: 'fifthBall', 
      results: { won: 0, lost: 0 }},
    { id: 'sixthBall', 
      results: { won: 0, lost: 0 }},
    { id: 'seventhBall', 
      results: { won: 0, lost: 0 }},
    { id: 'eighthBall', 
      results: { won: 0, lost: 0 }},
    { id: 'empty', 
      results: { won: 0, lost: 0 } }
]


export default function nextShots(state = initialState, action){

    switch(action.type){
        case 'ADD_WON_BALL':
            
            // console.log(state[0].results.won);
            // console.log(action.ball);
            const wonItem = state.map(item => {
                //console.log(item);
                if(item.id === action.ball){
                    //console.log('item inside ', item);
                    return {
                        ...item,
                        results: {
                            ...item.results,
                            won: item.results.won + 1
                        }
                    }
                }
                return item
            })
            // console.log('update item', wonItem);
            // console.log('state', state);
            return wonItem

        case 'ADD_LOST_BALL':
            //console.log(state[0].results.lost);
            
            const lostItem = state.map(item => {
                if(item.id === action.ball){
                    //console.log('item inside' , item);
                    return {
                        ...item,
                        results: {
                            ...item.results,
                            lost: item.results.lost + 1
                        }
                    }
                }
                return item
            })
            // console.log('update item', updateItem);
            // console.log('state', state);
            return lostItem;    
        default:
            return state;
    }
}