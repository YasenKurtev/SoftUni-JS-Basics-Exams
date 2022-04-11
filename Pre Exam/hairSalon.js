function hairSalon(input){

    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let sumDay = 0;

    while(command !== "closed"){
        if(command === "haircut"){
            command = input[index];
            index++;
            if(command === "mens"){
                sumDay += 15;
            }else if(command === "ladies"){
                sumDay += 20;
            }else if(command === "kids"){
                sumDay += 10;
            }
        }else if(command === "color"){
            command = input[index];
            index++;
            if(command === "touch up"){
                sumDay += 20;
            }else if(command === "full color"){
                sumDay += 30;
            }
        }
        command = input[index];
        index++;
        
        if(sumDay >= target){
            break;
        }
        if(command === "closed"){
            break;
        }
    }
    
    let diff = Math.abs(target - sumDay);
    if(sumDay >= target){
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${sumDay}lv.`);
    }else{
        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${sumDay}lv.`);
    }

}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
