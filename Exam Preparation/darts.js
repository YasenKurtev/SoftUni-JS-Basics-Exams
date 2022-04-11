function darts(input) {

    let playerName = input[0];
    let startPoints = 301;
    let successful = 0;
    let unsuccessful = 0;
    index = 1;

    let field = input[index];
    index++;
    let score = Number(input[index]);
    index++;

    while (startPoints > 0) {
        if (field === "Retire") {
            break;
        }

        if (field === "Triple") {
            score *= 3;
        } else if (field === "Double") {
            score *= 2;
        }

        if (score <= startPoints) {
            startPoints -= score;
            successful++;
        } else {
            unsuccessful++;
        }
        field = input[index];
        index++;
        score = Number(input[index]);
        index++;
    }

    if(field === "Retire"){
        console.log(`${playerName} retired after ${unsuccessful} unsuccessful shots.`);
    }else{
        console.log(`${playerName} won the leg with ${successful} shots.`);
    }

}    

darts(['Michael van Gerwen',
    'Triple',
    '20',
    'Triple',
    '19',
    'Double',
    '10',
    'Single',
    '3',
    'Single',
    '1',
    'Triple',
    '20',
    'Triple',
    '20',
    'Double',
    '20',
])