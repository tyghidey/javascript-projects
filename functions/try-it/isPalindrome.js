function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   console.log(str)
   str = str.toLowerCase();
   console.log(str)
   return reverse(str) === str;
}

let word = 'apple';
console.log(isPalindrome(word));

console.log(isPalindrome('apple'));
console.log(isPalindrome('Hannah'));

