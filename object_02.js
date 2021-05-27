// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};
schedule["8:30"] = "get up";

// console.log(schedule);

// console.log('key' in schedule);


function isEmply(obj) {
    for (key in obj) {
        if ('key' in ) {
            console.log('Ключ присутствует');
        } else {
            console.log('Данного ключа нет');
        }
}}

isEmply(schedule);