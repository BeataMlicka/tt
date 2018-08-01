//check won sets conditions

export const checkWonSetCondition = (wonPoints, lostPoints) => {

    let currentPointsDifference = wonPoints - lostPoints;

    if((wonPoints >= 11) && (currentPointsDifference >= 2)){
        return 'wonSet';
    } else if((lostPoints >= 11) && (currentPointsDifference <= -2)){
        return 'lostSet';
    }else {
        return '';
    }
}

//checks won match conditions
export const checkWonMatchCondition = (wonSets, lostSets, setsLimit) => {

    if(wonSets === setsLimit){
        return 'wonMatch';
    }else if(lostSets === setsLimit){
        return 'lostMatch';
    }else {
        return '';
    }
}