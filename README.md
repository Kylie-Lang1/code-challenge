# Code Challenge

## Word Frequencies

Write a function called `wordFrequencies` that takes in a string as an argument, and returns an object w each word as a `key`, and the number of times it appears in the string a the `value`

Example:
```js
wordFrequencies('this is a test test test a') // output => { this: 1, is: 1, a: 2, test: 3 }
```


## Find Highest Word

Write a function called `highestWord` that take a string as an argument, and returns an object w the word that appears the most as the key, and the frequency of occurences as the value. Hint: Use the `wordFrequencies` function inside this function.

Example:
```js
highestWord('this is a test test test a this this this') // output => { this: 4 }
```


## Luhn Algorithm

Credit Card numbers can be validated using an algorithm called the Luhn Algorithm. 


Here are the steps:
- Starting w the **second to last digit** and continuing w every other digit going back to the beginning of the card number, double the digit.
- Then add up all of the digits. There is a catch though. For any digit that has been doubled, if it is 10 or above, break that digit into 2 single digits. Example: 10 => 1, 0; 18 => 1, 8
- If the sum of all the digits is a `multiple of 10`, the card number is valid


Example card number: 4408 0412 3456 7893

```js
Original: 4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
Step 1:   8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
Step 2:   8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:   70 % 10 === 0
```

Write a function called `cardIsValid` that takes a `card number(string)` as an argument and returns `true` for a valid number and `false` for an invalid number. 


Example:
```js
cardIsValid('4408041234567893') // output => true
cardIsValid('1234567890123456') // output => false
cardIsValid('38520000023237') // output => true
```