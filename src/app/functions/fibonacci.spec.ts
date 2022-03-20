import {isFib, makeFibonacciList} from './fibonacci';

describe('fibonacci functions', function () {

  it('makes n fibonacci', () => {
    const n = 10;
    expect(makeFibonacciList(n).length).toEqual(10);
    expect(makeFibonacciList(n)[0]).toEqual(0);
    expect(makeFibonacciList(n)[1]).toEqual(1);
    expect(makeFibonacciList(n).pop()).toEqual(34);
  });

  it('determines if number is in range of fibonacci', () => {
    const a = makeFibonacciList(10);
    expect(isFib(34, a)).toBeTrue();
    expect(isFib(4, a)).toBeFalse();
  });

});
