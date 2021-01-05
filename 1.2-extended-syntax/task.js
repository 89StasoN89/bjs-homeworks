function getResult(a, b, c) {
    'use strict'
    let x = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        x = [];
    } else if (discriminant === 0) {
        x.unshift((-b) / (2 * a));
    } else {
        x.unshift((-b - Math.pow(discriminant, 1 / 2)) / (2 * a));
        x.unshift((-b + Math.pow(discriminant, 1 / 2)) / (2 * a));
    } // код для задачи №1 писать здесь

    return x;
}

function getAverageMark(marks) {
    'use strict'
    let firstMarks = [];
    let avgMark = 0;
    let sumMarks = 0;

    if (marks.length === 0) {
        avgMark = 0;
    } else {
        if (marks.length > 5) {
            firstMarks = marks.slice(0, 5);
            console.log('More then 5 marks!'); // код для задачи №2 писать здесь
        } else {
            firstMarks = marks;
        }

        for (let i = 0; i < firstMarks.length; i++) {
            sumMarks += firstMarks[i];
        }
        avgMark = sumMarks / firstMarks.length;
    }

    return avgMark;
}

function askDrink(name, dateOfBirthday) {
    let message = '';
    let todayDate = new Date();
    let age = todayDate.getFullYear() - dateOfBirthday.getFullYear();

    if (age >= 18) {
        message = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }

    return message;
}