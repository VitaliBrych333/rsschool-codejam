module.exports = function make(a) {
    return function one(b, c, d) {
        return function two(e) {
            return function free(sum) {
                return [a, b, c, d, e].reduce(sum, 0);
            };
        };
    };
};
