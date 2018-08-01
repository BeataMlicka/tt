
export const calculatePointsPercentage = (allPoints, points) => {

    const result = Math.round((points * 100) / allPoints);
    if(result){
        return `${result}%`;
    }else {
        return '';
    }
}

export const countElements = (array, element) => {
    
    let amount = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] === element){
            amount ++;
        }
    }

    return amount;
}

export const calculateTableAreasResults = (ball, wonArray, lostArray) => {
    
    var wonBall = countElements(wonArray, ball);
    var lostBall = countElements(lostArray, ball);
    var allBall = wonBall + lostBall;
    var wonPercent = calculatePointsPercentage(allBall, wonBall);
    var lostPercent = calculatePointsPercentage(allBall, lostBall);

    var results = `${wonBall}/${allBall} (${wonPercent})${'\n'}${lostBall}/${allBall} (${lostPercent})`;

    return results;
}