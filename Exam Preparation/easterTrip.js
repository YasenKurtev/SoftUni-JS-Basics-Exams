function easterTrip(input) {

    let destination = input[0];
    let date = input[1];
    let nights = Number(input[2]);

    let priceForOneNight = 0;

    if (destination === "France") {
        switch (date) {
            case "21-23": priceForOneNight = 30; break;
            case "24-27": priceForOneNight = 35; break;
            case "28-31": priceForOneNight = 40; break;
        }
    } else if (destination === "Italy") {
        switch (date) {
            case "21-23": priceForOneNight = 28; break;
            case "24-27": priceForOneNight = 32; break;
            case "28-31": priceForOneNight = 39; break;
        }
    } else if (destination === "Germany") {
        switch (date) {
            case "21-23": priceForOneNight = 32; break;
            case "24-27": priceForOneNight = 37; break;
            case "28-31": priceForOneNight = 43; break;
        }
    }

    let totalPrice = nights * priceForOneNight;

    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`)

}

easterTrip(['Germany',
    '24-27',
    '5'
    ])