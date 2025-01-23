export function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciMemo(
  n: number,
  memo: { [key: number]: number } = {}
): number {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(100)); // 55

export function fibonacciWithMap(
  n: number,
  memo: Map<number, number> = new Map()
): number {
  if (memo.has(n)) {
    return memo.get(n)!;
  }

  if (n <= 1) {
    return n;
  }

  const result = fibonacciWithMap(n - 1, memo) + fibonacciWithMap(n - 2, memo);
  memo.set(n, result);
  return result;
}

console.time('fibonacciMemo');
console.log(fibonacciMemo(100)); // 55
console.timeEnd('fibonacciMemo end');

console.time('fibonacciWithMap');
console.log(fibonacciWithMap(100)); // 55
console.timeEnd('fibonacciWithMap end');
