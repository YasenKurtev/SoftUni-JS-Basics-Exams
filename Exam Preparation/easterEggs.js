function easterEggs(input) {

    let eggs = Number(input[0]);
    let index = 1;
    let color = input[index];
    index++;

    let counterRed = 0;
    let counterOrange = 0;
    let counterBlue = 0;
    let counterGreen = 0;
    let maxEggs = -9999;
    let colorOfMaxEggs = '';

    for (let i = 1; i <= eggs; i++) {
        switch (color) {
            case "red":
                counterRed++;
                if(counterRed > maxEggs){
                    maxEggs = counterRed;
                    colorOfMaxEggs = 'red'
                }
                break;
            case "orange":
                counterOrange++;
                if(counterOrange > maxEggs){
                    maxEggs = counterOrange;
                    colorOfMaxEggs = 'orange'
                }
                break;
            case "blue":
                counterBlue++;
                if(counterBlue > maxEggs){
                    maxEggs = counterBlue;
                    colorOfMaxEggs = 'blue'
                }
                break;
            case "green":
                counterGreen++;
                if(counterGreen > maxEggs){
                    maxEggs = counterGreen;
                    colorOfMaxEggs = 'green'
                }
                break;
        }
        color = input[index];
        index++;
    }

    console.log(`Red eggs: ${counterRed}`);
    console.log(`Orange eggs: ${counterOrange}`);
    console.log(`Blue eggs: ${counterBlue}`);
    console.log(`Green eggs: ${counterGreen}`);
    console.log(`Max eggs: ${maxEggs} -> ${colorOfMaxEggs}`);
    
}

easterEggs(['7',
    'orange',
    'blue',
    'green',
    'green',
    'blue',
    'red',
    'green',
    ])