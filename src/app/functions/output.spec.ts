import {calcResults, countEntries} from './output';

describe('Output functions', () => {
  it('should calculate results and return them as a string', () => {
    expect(calcResults([1, 1, 2, 3, 3, 3, 3])).toEqual('1:2, 2:1, 3:4');
  });

  it('count numbers in an array of numbers', () => {
    const entries = [1, 1, 1, 2, 3, 3];
    expect(countEntries(6, entries)).toEqual(0);
    expect(countEntries(1, entries)).toEqual(3);
    expect(countEntries(2, entries)).toEqual(1);
    expect(countEntries(3, entries)).toEqual(2);
  })
})
