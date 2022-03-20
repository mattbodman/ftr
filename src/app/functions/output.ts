/*
Counts the number of times a number appears in an array of numbers
 */
export function countEntries(n: number, a: number[]): number {
  return a.filter(i => i === n).length;
}

/*
Converts an array of numbers into a string containing each number and each number's "frequency" in the array
 */
export function calcResults(entries: number[]): string {
  let outputResults: string[] = [];
  for (const n of new Set(entries)) {
    outputResults.push(`${n}:${countEntries(n, entries)}`);
  }
  return outputResults.join(', ');
}
