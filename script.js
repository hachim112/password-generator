const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const digitsCheckbox = document.getElementById('digits');
    const specialCheckbox = document.getElementById('special');
    const lengthInput = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const passwordInput = document.getElementById('password-input');
    const copyButton = document.getElementById('copy-button');
    const generateButton = document.getElementById('generate-button');

    function generatePassword() {
      let characters = '';
      if (lowercaseCheckbox.checked) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
      }
      if (uppercaseCheckbox.checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if (digitsCheckbox.checked) {
        characters += '0123456789';
      }
      if (specialCheckbox.checked) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      }

      if (characters.length === 0) {
        passwordInput.value = '';
        return;
      }

      const length = parseInt(lengthInput.value);
      let password = '';
      for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
      passwordInput.value = password;
    }

    lengthInput.addEventListener('input', () => {
      lengthValue.textContent = lengthInput.value;
      generatePassword();
    });

    copyButton.addEventListener('click', () => {
      passwordInput.select();
      document.execCommand('copy');
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 1000);
    });

    generateButton.addEventListener('click', generatePassword);

    generatePassword();
