document.getElementById("prompt").addEventListener("input", function () {
    updateSplitButtonStatus();
    updatePromptCharCount();
  });

  document.getElementById('split_length').addEventListener('input', updateSplitButtonStatus);

  function copyToClipboard(element) {
    const textArea = document.createElement("textarea");
    textArea.value = element.getAttribute("data-content");
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    element.classList.add("clicked");
  }

  function copyInstructions() {
    const instructionsButton = document.getElementById("copy-instructions-btn");
    const instructions = document.getElementById("instructions").textContent;
    const textArea = document.createElement("textarea");
    textArea.value = instructions;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    instructionsButton.classList.add("clicked");
  }

  function toggleCustomLength(select) {
    const customLengthInput = document.getElementById("split_length");
    if (select.value === "custom") {
      customLengthInput.style.display = "inline";
    } else {
      customLengthInput.value = select.value;
      customLengthInput.style.display = "none";
    }
  }

  function updateSplitButtonStatus() {
    const promptField = document.getElementById('prompt');
    const splitLength = document.getElementById('split_length');
    const splitBtn = document.getElementById('split-btn');
    const promptLength = promptField.value.trim().length;
    const splitLengthValue = parseInt(splitLength.value);

    if (promptLength === 0) {
        splitBtn.setAttribute('disabled', 'disabled');
        splitBtn.classList.add('disabled');
        splitBtn.textContent = 'Enter a prompt';
    } else if (isNaN(splitLengthValue) || splitLengthValue === 0) {
        splitBtn.setAttribute('disabled', 'disabled');
        splitBtn.classList.add('disabled');
        splitBtn.textContent = 'Enter the length for calculating';
    } else if (promptLength < splitLengthValue) {
        splitBtn.setAttribute('disabled', 'disabled');
        splitBtn.classList.add('disabled');
        splitBtn.textContent = 'Prompt is shorter than split length';
    } else {
        splitBtn.removeAttribute('disabled');
        splitBtn.classList.remove('disabled');
        splitBtn.textContent = `Split into ${Math.ceil(promptLength / splitLengthValue)} parts`;
    }
  }

  function updatePromptCharCount() {
    const promptField = document.getElementById("prompt");
    const charCount = document.getElementById("prompt-char-count");
    const promptLength = promptField.value.trim().length;
    charCount.textContent = promptLength;
  }

  updateSplitButtonStatus();