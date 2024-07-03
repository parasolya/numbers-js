import renderResults from './js/renderResults.js';

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  const fileLoadedCheckbox = document.getElementById('fileLoadedCheckbox');
  const fileInput = document.getElementById("fileInput");

  document.getElementById("uploadFileButton").addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      fileLoadedCheckbox.checked = true;
    }
  });

  document.getElementById("calculateButton").addEventListener("click", () => {
    showLoader();
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        const numbers = content
          .split("\n")
          .map(Number)
          .filter((n) => !isNaN(n));
        renderResults(numbers);
        hideLoader();
      };
      reader.readAsText(file);
    } else {
      alert("Please select a file first");
      hideLoader();
    }
  });

  function showLoader() {
    loader.style.display = 'block';
  }

  function hideLoader() {
    loader.style.display = 'none';
  }
});