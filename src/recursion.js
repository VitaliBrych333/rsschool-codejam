module.exports = function recursion(tree, depth = 0) {
    if (depth === 0) this.array = [];
    let next = tree.left;

    if (this.array[depth] === undefined) this.array[depth] = [];
    this.array[depth].push(tree.value);

    if (next !== undefined) recursion(next, depth + 1);
    next = tree.right;
    if (next !== undefined) recursion(next, depth + 1);

    return this.array;
};
