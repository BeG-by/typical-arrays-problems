let isCorrect = (arr) => arr !== undefined && arr.length !== 0;
let sort = (arr) => arr.sort((a, b) => a - b);

exports.min = function min(array) {
    return isCorrect(array) ? sort(array)[0] : 0;
};

exports.max = function max(array) {
    return isCorrect(array) ? sort(array)[array.length - 1] : 0;
};

exports.avg = function avg(array) {
    return isCorrect(array) ? array.reduce((a, b) => a + b) / array.length : 0;
};
