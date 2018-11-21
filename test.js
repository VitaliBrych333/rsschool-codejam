/* eslint-disable */
const assert = require('assert');

const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');

describe('sumOfOther', () => {
  it('1', () => {
    const sum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });

  it('2', () => {
    const sum = sumOfOther([-6, -10, -42, 14]);
    assert.deepEqual(sum, [-38, -34, -2, -58]);
  });

  it('3', () => {
    const sum = sumOfOther([21, 13, -4, 10]);
    assert.deepEqual(sum, [19, 27, 44, 30]);
  });

  it('4', () => {
    const sum = sumOfOther([-20, -3, -12, -1]);
    assert.deepEqual(sum, [-16, -33, -24, -35]);
  });
});

describe('make', () => {
  const sum = (a, b) => a + b;

  it('1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });

  it('2', () => {
    const result = make(10)(20, 30, 600)(10)(sum);
    assert.deepEqual(result, 670);
  });

  it('3', () => {
    const result = make(1)(5, 8, 11)(12)(sum);
    assert.deepEqual(result, 37);
  });

  it('4', () => {
    const result = make(25)(3, 1, 66)(4)(sum);
    assert.deepEqual(result, 99);
  });

  it('5', () => {
    const result = make(6)(67, 5, 312)(1)(sum);
    assert.deepEqual(result, 391);
  });
});

describe('recursion', () => {
  it('1', () => {
    const tree = recursion({ "value": 100, "left": { "value": 90, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 120, "left": { "value": 110 }, "right": { "value": 130 } } });
    assert.deepEqual(tree, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const tree = recursion({ "value": 255, "left": { "value": 200, "left": { "value": 170 }, "right": { "value": 205 } }, "right": { "value": 277, "left": { "value": 155 }, "right": { "value": 278 } } });
    assert.deepEqual(tree, [[255], [200, 277], [170, 205, 155, 278]]);
  });

  it('3', () => {
    const tree = recursion({ "value": 77, "left": { "value": 65, "left": { "value": 43 }, "right": { "value": 68 } }, "right": { "value": 89, "left": { "value": 85 }, "right": { "value": 90 } } });
    assert.deepEqual(tree, [[77], [65, 89], [43, 68, 85, 90]]);
  });

  it('4', () => {
    const tree = recursion({ "value": "seven", "left": { "value": "five", "left": { "value": "four" }, "right": { "value": "six" } }, "right": { "value": "nine", "left": { "value": "eigth" }, "right": { "value": "ten" } } });
    assert.deepEqual(tree, [["seven"], ["five", "nine"], ["four", "six", "eigth", "ten"]]);
  });
});
  