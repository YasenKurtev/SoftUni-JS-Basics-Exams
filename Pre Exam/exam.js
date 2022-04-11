function exam(input) {

    let students = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let sumGrades = 0;

    for (let index = 1; index <= students; index++) {
        let grade = Number(input[index]);
        if (grade >= 5.00) {
            group1++;
            sumGrades += grade;
        } else if (grade >= 4 && grade <= 4.99) {
            group2++;
            sumGrades += grade;
        } else if (grade >= 3 && grade <= 3.99) {
            group3++;
            sumGrades += grade;
        } else if (grade < 3) {
            group4++;
            sumGrades += grade;
        }
    }

    let avg = sumGrades / students;
    console.log(`Top students: ${(group1 / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(group2 / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(group3 / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(group4 / students * 100).toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);
}

exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])
