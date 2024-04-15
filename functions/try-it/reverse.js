function reverse(str) {
   // for ex str= 'abc'
   let lettersArray = str.split('');
   //lettersArray= ['a', 'b', 'c']
   let reversedLettersArray = lettersArray.reverse();
   //reversedLettersArray = ['c', 'b', 'a']
   return reversedLettersArray.join('');
   // return 'cba'
}

console.log(reverse('abc'));

let reverseStr = reverse('apple');
console.log(reverseStr);