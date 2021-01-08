'use strict'

function getResult(a, b, c) {
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant === 0) {
        x.unshift((-b) / (2 * a));
    } else if (discriminant > 0) {
        x.unshift((-b - Math.sqrt(discriminant)) / (2 * a));
        x.unshift((-b + Math.sqrt(discriminant)) / (2 * a));
    } // код для задачи №1 писать здесь

    return x;
}

function getAverageMark(marks) {
    let firstMarks = marks.slice(0, 5);
    let sumMarks = 0;

    if (firstMarks.length > 0) {
        for (let i = 0; i < firstMarks.length; i++) {
            sumMarks += firstMarks[i];
        }
        if (marks.length > 5) {
            console.log('More then 5 marks!');
        }

        return (sumMarks / firstMarks.length);
    } else {
        return 0;
    }
}

function askDrink(name, dateOfBirthday) {
    if ((new Date()).getFullYear() - dateOfBirthday.getFullYear() >= 18) {
        return (`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    }
}