import getMean from './getMean.js';
import getLongestIncreasingSequence from './getLongestIncreasingSequence.js';
import getLongestDecreasingSequence from './getLongestDecreasingSequence.js';
import getMedian from './getMedian.js';

export default function main(numbers) {
  const startTime = new Date();

  if (numbers.length === 0) {
    console.log("Файл порожній або не містить чисел.");
    return;
  }

  const mean = getMean(numbers);
  const [min, max, median] = getMedian(numbers);
  const longestIncreasingSequence = getLongestIncreasingSequence(numbers);
  const longestDecreasingSequence = getLongestDecreasingSequence(numbers);

  const endTime = new Date();
  const time = endTime - startTime;

  return [max, min, mean, median, longestIncreasingSequence, longestDecreasingSequence, time];
}