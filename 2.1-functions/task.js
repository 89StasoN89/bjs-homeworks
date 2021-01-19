"use strict"

// Задание 2.1

function getSolutions(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let solution = { D: discriminant, roots: [] };

    if (discriminant >= 0) {
        if (discriminant === 0) {
            solution.roots.unshift((-b) / 2 / a);
        } else { // Проверка на количество корней в уравнении     
            solution.roots.unshift((-b - Math.sqrt(discriminant)) / (2 * a));
            solution.roots.unshift((-b + Math.sqrt(discriminant)) / (2 * a));
        }
    } // Проверка на наличие корней в уравнении

    return solution; // Возвращаемый функцией объект
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    let rootMessage = 'Уравнение не имеет вещественных корней';

    if (result.D >= 0) {
        if (result.D === 0) {
            rootMessage = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
        } else {
            rootMessage = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
        }
    }

    return console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${result.D}\n ${rootMessage}`);
}

// Задание 2.2

function getAverageScore(data) {
    let avgMarks = new Object;
    let sumAvgMarks = 0;

    avgMarks.average = 0; // В случае пустого массива оценок, функция возвращает среднее значение 0

    if (Object.keys(data).length != 0) {
        for (let prop in data) {
            avgMarks[prop] = getAverageMark(data[prop]);
            sumAvgMarks += avgMarks[prop];
        } //Переносит в новый объект предметы и средние оценки по ним

        avgMarks.average = sumAvgMarks / (Object.keys(avgMarks).length - 1); // Добавляет свойство average и среднее значение по оценок по всем предметам
    }

    return avgMarks;
}

function getAverageMark(marks) {
    let sumMarks = 0;
    if (marks.length > 0) {
        for (let i = 0; i < marks.length; i++) {
            sumMarks += marks[i];
        }
        return sumMarks / marks.length; // Считает среднюю оценку по предмету в случае ненулевых вводных данных
    } else {
        return 0;
    }
}

// Задание 2.3

function getPersonData(secretData) {
    let pirateData = new Object(); // Объектб содержащий данные пирата

    pirateData.firstName = getDecodedValue(secretData['aaa']); // Добавляет имя пирата
    pirateData.lastName = getDecodedValue(secretData['bbb']); // Добавляет фамилию пирата

    return pirateData;
}

function getDecodedValue(secret) {

    if (secret === 0) {
        return 'Родриго';
    }

    if (secret === 1) {
        return 'Эмильо'
    }
} // Функция расшифровывает значение шифра 0 и 1