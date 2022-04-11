function finalCompetition(input) {

    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let prize = 0;

    switch (place) {
        case "Bulgaria":
            prize = points * dancers;
            if(season === "summer"){
                prize = prize * 0.95;
            }else if(season === "winter"){
                prize = prize * 0.92;
            }
            break;
        case "Abroad":
            prize = dancers * points * 1.50;
            if(season === "summer"){
                prize = prize * 0.90;
            }else if(season === "winter"){
                prize = prize * 0.85;
            }
            break;
    }

    let donation = prize * 0.75;
    let sumAfterDonation = prize - donation;
    let moneyForEachDancer = sumAfterDonation / dancers;

    console.log(`Charity - ${donation.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForEachDancer.toFixed(2)}`);

}

finalCompetition(['1',
    '89.5',
    'summer',
    'Abroad'
    ])