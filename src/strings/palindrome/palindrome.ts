export default function isPalindrome(str: String): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
  return cleaned === cleaned.split('').reverse().join('');
}

export function isPalindrome2(str: String) {
  const cleaned = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split(''); // Remove non-alphanumeric characters
  let low = 0;
  let high = str.length - 1;

  while (cleaned[low] === cleaned[high]) {
    if (cleaned[low] !== cleaned[high]) {
      return false;
    }
    low++;
    high--;
  }

  return true;
}
