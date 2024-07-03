import main from './main.js'; 

function renderResults(numbers) {
  const result = document.querySelector('.result');
  result.innerHTML = ''; 
  const [maxValue, minValue, meanValue, medianValue, longestIncreasingSequenceValue, longestDecreasingSequenceValue, timeValue] = main(numbers);

  const min = document.createElement('p');
  const max = document.createElement('p');
  const mean = document.createElement('p');
  const median = document.createElement('p');
  const longestIncreasingSequence = document.createElement('p');
  const longestDecreasingSequence = document.createElement('p');
  const time = document.createElement('p');

  max.textContent = `Максимальне число в файлі: ${maxValue}`;
  min.textContent = `Мінімальне число в файлі: ${minValue}`;   
  mean.textContent = `Середнє значення: ${meanValue}`;
  median.textContent = `Медіана: ${medianValue}`;
  longestIncreasingSequence.textContent = `Найбільша зростаюча послідовність: ${longestIncreasingSequenceValue}`;
  longestDecreasingSequence.textContent = `Найбільша спадна послідовність: ${longestDecreasingSequenceValue}`;
  time.textContent = `Час обчислення: ${timeValue} мс`;

  result.appendChild(min);
  result.appendChild(max);
  result.appendChild(mean);
  result.appendChild(median);
  result.appendChild(longestIncreasingSequence);
  result.appendChild(longestDecreasingSequence);
  result.appendChild(time);
}

export default renderResults;