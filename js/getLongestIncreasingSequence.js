export default function getLongestIncreasingSequence(numbers) {
  if (numbers.length === 0) return [];

  let maxLength = 1; 
  let currentLength = 1; 
  let startIndex = 0; 
  let tempStartIndex = 0; 

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > numbers[i - 1]) {
          currentLength++;
      } else {
          if (currentLength > maxLength) {
              maxLength = currentLength;
              startIndex = tempStartIndex;
          }
          currentLength = 1;
          tempStartIndex = i;
      }
  }

  if (currentLength > maxLength) {
      maxLength = currentLength;
      startIndex = tempStartIndex;
  }

  return numbers.slice(startIndex, startIndex + maxLength);
}