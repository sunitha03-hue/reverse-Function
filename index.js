function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}
console.log(reverse("KLKL"))

function reverse(str1) {
   return str1.split('').reverse().join('');
}

function isPalindrome(str1) {
   return reverse(str1) === str1;
}
console.log(reverse("Vigi"));