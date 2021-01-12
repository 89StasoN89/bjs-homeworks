"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let inputControl = '';
    let creditBody = 0;
    let payMonths = 0;
    let monthlyFee = 0;
    let totalPayments = 0;

    if ((date - new Date()) <= 0) {
        return (`Параметр "Срок ипотеки" содержит неправильное значение: ${date}`);
    } // Проверка правильности ввода даты окончания выплат

    inputControl = isFinite(parseInt(String(percent))) ? '' : 'percentFalse'; // Проверка параметра на корректный ввод и возможность преобразования строки в число
    if (inputControl === '') {
        inputControl = isFinite(parseInt(String(contribution))) ? '' : 'contributionFalse'; // Проверка параметра на корректный ввод и возможность преобразования строки в число
    }
    if (inputControl === '') {
        inputControl = isFinite(parseInt(String(amount))) ? '' : 'amountFalse'; // Проверка параметра на корректный ввод и возможность преобразования строки в число
    }

    switch (inputControl) {
        case 'percentFalse': // Ветвление на возврат данных о некорректном вводе
            return (`Параметр "Процентная ставка" содержит неправильное значение: ${percent}`);
            break;

        case 'contributionFalse':
            return (`Параметр "Начальный взнос" содержит неправильное значение: ${contribution}`);
            break;

        case 'amountFalse':
            return (`Параметр "Общая стоимость" содержит неправильное значение: ${amount}`);
            break;

        default: // Основная ветка программы
            creditBody = amount - contribution; // Вычисление тела кредита

            if (date.getDate() - ((new Date()).getDate()) >= 0) {
                payMonths = (date.getFullYear() - (new Date()).getFullYear()) * 12 + (date.getMonth() - (new Date()).getMonth());
            } else {
                payMonths = (date.getFullYear() - (new Date()).getFullYear()) * 12 + (date.getMonth() - (new Date()).getMonth() - 1);
            } //Вычисление количества полных месяцев

            monthlyFee = creditBody * (percent / 100 / 12 + percent / 100 / 12 / (Math.pow((1 + percent / 100 / 12), payMonths) - 1)); //Вычисление ежемесячного платежа S*(P+P/(((1+P)^n)-1))

            totalPayments = monthlyFee * payMonths; // Вычисление размера общей выплаты

            console.log(totalPayments.toFixed(2));

            return Number(totalPayments.toFixed(2)); // Функция возвращает значение общей выплаты

            break;
    }
}

function getGreeting(name) {
    let greeting = '';

    if (!name) {
        name = 'Аноним';
    }

    greeting = `Привет, мир! Меня зовут ${name}.`

    console.log(greeting);
    return greeting;
}