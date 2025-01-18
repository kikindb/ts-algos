import { describe, it, expect } from 'bun:test';
import binarySearch, { genericBinarySearch } from './binary-search';

describe('Binary Search Tests', () => {
  const test1 = [1, 2, 3, 5, 7, 11, 14];
  it('should return -1 if target not found', () => {
    expect(binarySearch(test1, 4)).toBe(-1);
    expect(binarySearch(test1, 0)).toBe(-1);
    expect(binarySearch(test1, -100)).toBe(-1);
    expect(binarySearch(test1, 17)).toBe(-1);
  });

  it('should return valid position', () => {
    expect(binarySearch(test1, 14)).toBe(6);
    expect(binarySearch(test1, 1)).toBe(0);
    expect(binarySearch(test1, 2)).toBe(1);
    expect(binarySearch(test1, 3)).toBe(2);
    expect(binarySearch(test1, 11)).toBe(5);
  });
});

describe('Generic Binary Search Tests', () => {
  it('should work with strings', () => {
    expect(genericBinarySearch(['a', 'd', 'f', 'g', 'j'], 'g')).toBe(3);
    expect(genericBinarySearch(['a', 'c', 'd', 'h', 'k', 'l', 'z'], 'a')).toBe(
      0
    );
    expect(genericBinarySearch(['a', 'c', 'd', 'h', 'k', 'l', 'z'], 'c')).toBe(
      1
    );
    expect(genericBinarySearch(['a', 'c', 'd', 'h', 'k', 'l', 'z'], 'k')).toBe(
      4
    );
  });
});
