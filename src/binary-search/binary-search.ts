export default function binarySearch(nums: number[], target: number) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = (low + high) / 2;

    if (nums[middle] < target) {
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

export function genericBinarySearch<T>(values: T[], target: T) {
  let low = 0;
  let high = values.length - 1;

  while (low <= high) {
    const middle = Math.trunc((low + high) / 2);

    if (values[middle] < target) {
      low = middle + 1;
    } else if (values[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
