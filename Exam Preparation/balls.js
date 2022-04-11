function balls(input) {

    let num = Number(input[0]);
    let index = 1;
    let color = input[index];
    index++;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let other = 0;
    let divides = 0;
    let points = 0;

    for (let i = 1; i <= num; i++) {
        switch (color) {
            case "red":
                points += 5;
                redBalls++;
                break;
            case "orange":
                points += 10;
                orangeBalls++;
                break;
            case "yellow":
                points += 15;
                yellowBalls++;
                break;
            case "white":
                points += 20;
                whiteBalls++;
                break;
            case "black":
                Math.floor(points /= 2);
                divides++;
                break;
            default:
                other++;
                break;
        }
        color = input[index];
        index++;
    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${divides}`);

}

balls([5,
    'red',
    'red',
    'ddd',
    'ddd',
    'ddd'
    ])