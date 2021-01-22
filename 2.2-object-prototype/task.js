"use strict"
// Task 1

String.prototype.isPalindrome = function() {
    if (this.toLowerCase().replace(/ /g, '') === this.toLowerCase().replace(/ /g, '').split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

function getAverageMark(marks) {
    let sumMarks = 0;
    let roundedAverage = 0;
    if (marks.length !== 0) {
        for (let i = 0; i < marks.length; i++) {
            sumMarks += marks[i]; // Сумарное значение оценок
        }

        roundedAverage = Math.round(sumMarks / marks.length); // Расчет округленного значния средней оценки
    }

    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = +(new Date());
    let diff = 0;
    let age = 0;
    let verdict = false;

    birthday = new Date(birthday.split('-')[0], birthday.split('-')[1], birthday.split('-')[2]);
    diff = now - (+birthday);
    age = diff / 365.25 / 24 / 3600 / 1000; //На лекции Владимир просил проверку на високосный год сделать попроще, поэтому предлагаю к каждому году добавить по 0,25 дня.

    if (age > 18) {
        verdict = true;
    }
    return verdict
}