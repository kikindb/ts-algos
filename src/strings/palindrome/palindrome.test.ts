import { describe, expect, test } from 'bun:test';
//import isPalindrome from './palindrome';

import { isPalindrome2 as isPalindrome } from './palindrome';

describe('isPalindrome', () => {
  test('returns true for a simple palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('is case insensitive', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('ignores spaces', () => {
    expect(isPalindrome('nurses run')).toBe(true);
  });

  test('ignores punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('returns true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('handles numeric palindromes', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('12345')).toBe(false);
  });

  test('handles mixed alphanumeric strings', () => {
    expect(isPalindrome('1A2B2A1')).toBe(true);
  });

  test('returns false for completely different characters', () => {
    expect(isPalindrome('abcdef')).toBe(false);
  });

  test('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
