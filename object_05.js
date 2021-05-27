// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.reduce((accumulator, currentValue, index, array) => { 
    return accumulator + currentValue.salaries[Object.entries(array).filter(([key, value]) => value)];   
});


console.log(sum);


const f = [0, 1, 2, 3, 4];

const sum = f.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

console.log(sum);