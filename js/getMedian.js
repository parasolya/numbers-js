export default function getMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);

  const middle = Math.floor(sorted.length / 2);
  
  if (sorted.length % 2 === 0) {
      return [sorted[0], sorted[sorted.length - 1], (sorted[middle - 1] + sorted[middle]) / 2];
  } else {
      return [sorted[0], sorted[sorted.length - 1], sorted[middle]];
  }
  
}