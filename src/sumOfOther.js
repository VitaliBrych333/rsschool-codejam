module.exports = function sumOfOther(array) {
    let sum = 0;
    const length = array.length;
    for (let i = 0; i < length; i += 1) {
        sum += array[i];
    }
    return array.map((num) => {
        return sum - num;
    });
};
