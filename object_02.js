// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {
    // key        value
    // ["8:30"] = "get up";
};

schedule["8:30"] = "get up";

function isEmply(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmply(schedule));