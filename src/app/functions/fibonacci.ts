/*
Creates an array of numbers per the Fibonacci sequence to the length specified
 */
export function makeFibonacciList(quantityRequired: number): number[] {
  const fibNumbers: number[] = [];
  let n1 = 0, n2 = 1, next;
  for (let i = 1; i <= quantityRequired; i++) {
    fibNumbers.push(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  return fibNumbers;
}

/*
Determines whether a number is in an array of (Fibonacci) numbers
 */
export function isFib(n: number, array: number[]): boolean {
  return array.indexOf(n) !== -1;
}
