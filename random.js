function generatePassword() {
  const lengthInput = document.getElementById('length');
  const length = lengthInput.value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSpecialChars = document.getElementById('specialChars').checked;

  if (length < 6 || length > 20) {
    alert("Password length must be between 6 and 20 characters.");
    return;
  }

  const newPassword = generateRandomPassword(length, includeUppercase, includeNumbers, includeSpecialChars);

  document.getElementById('generatedPassword').value = newPassword;
}


function generateRandomPassword(length, includeUppercase, includeNumbers, includeSpecialChars) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+{}[]|:;"<>,.?/~`';

  let allCharacters = lowercaseLetters;

  if (includeUppercase) {
    allCharacters += uppercaseLetters;
  }

  if (includeNumbers) {
    allCharacters += numbers;
  }

  if (includeSpecialChars) {
    allCharacters += specialCharacters;
  }

  if (!includeUppercase && !includeNumbers && !includeSpecialChars) {
    allCharacters += uppercaseLetters + numbers + specialCharacters;
  }

  let password = '';

  password += getRandomCharacter(uppercaseLetters, includeUppercase);
  password += getRandomCharacter(numbers, includeNumbers);
  password += getRandomCharacter(specialCharacters, includeSpecialChars);

  for (let i = password.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }
  return password;
}

function getRandomCharacter(characterSet, shouldInclude) {
  return shouldInclude ? characterSet.charAt(Math.floor(Math.random() * characterSet.length)) : '';
}
