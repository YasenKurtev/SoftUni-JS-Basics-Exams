function bestPlayer(input) {
    let index = 0;
    let name = input[index];
    index++;
    let goals = Number(input[index]);
    index++;
    let maxGoals = 0;
    let bestPlayer = '';

    while (name !== "END") {
        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = name;
        }
        if (maxGoals >= 10) {
            break;
        }
        name = input[index];
        index++;
        goals = Number(input[index]);
        index++;
    }

    console.log(`${bestPlayer} is the best player!`);
    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }

}

bestPlayer(['Neymar',
    '2',
    'Ronaldo',
    '1',
    'Messi',
    '3',
    'END'
])