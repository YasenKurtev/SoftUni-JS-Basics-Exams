function deerOfSanta(input){

    let daysGone = Number(input[0]);
    let foodLeft = Number(input[1]);
    let firstDeerFoodPerDay = Number(input[2]);
    let secondDeerFoodPerDay = Number(input[3]);
    let thirdDeerFoodPerDay = Number(input[4]);

    let totalFoodFirstDeer = daysGone * firstDeerFoodPerDay;
    let totalFoodSecondDeer = daysGone * secondDeerFoodPerDay;
    let totalFoodThirdDeer = daysGone * thirdDeerFoodPerDay;

    let totalFoodNeeded = totalFoodFirstDeer + totalFoodSecondDeer +totalFoodThirdDeer;

    let diff = Math.abs(foodLeft - totalFoodNeeded);

    if (foodLeft >= totalFoodNeeded){
        console.log(`${Math.floor(diff)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

deerOfSanta(['2',
    '10',
    '1',
    '1',
    '2'
    ])