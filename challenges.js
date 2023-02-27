// Word Frequencies
// Write a function that takes a string and returns an object with the count of each word in the string.

function wordFrequencies(string) {
  // Break string into array of words
  const words = string.split(' ')

  // Create object to store word counts
  const wordCounts = {}

  // Iterate through array
  for (let i=0; i < words.length; i++) {
      const word = words[i]
      
      // If word is in object, increment value by 1
      if(wordCounts[word]){
          wordCounts[word]++
        } else {
            // If word is not in object, add it with a value of 1
            wordCounts[word] = 1
        }
    }
  // Return object
  return wordCounts
}

// Test Word Frequencies
// console.log(wordFrequencies('this is a test test test a')) // output => { this: 1, is: 1, a: 2, test: 3 }
// console.log(wordFrequencies('the quick brown fox jumps over the lazy dog')) // output => { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }



// Find Highest Word
// Write a function that takes a string and returns the word with the highest frequency.

function findHighestWord(string) {
    // Use wordFrequencies function to get word counts
    const wordCounts = wordFrequencies(string)

    // Create variable to store highest word
    let highestWord = ''
    let highestWordObj = {}

    // Iterate through object
    for (const word in wordCounts) {
        // if highestWord is empty, set it to the first word
        if (highestWord === ''){
            highestWord = word
        } 
        
        // If current word count is higher than highest word count, update highest word
        if (wordCounts[word] > wordCounts[highestWord]) {
            highestWord = word
        }
    }

    // Return highest word
    return highestWordObj = {[highestWord]: wordCounts[highestWord]}
}

// Test Find Highest Word
// console.log(findHighestWord('this is a test test test a')) // output => test
// console.log(findHighestWord('the quick brown fox jumps over the lazy dog')) // output => the



// Credit Card Validation
// Write a function that takes a string and returns true if it's a valid credit card number and false if it's invalid.

cardIsValid = (cardNumber) => {
    // Break string into array of numbers
    const numbers = cardNumber.split('')

    // Start with the second to last digit, and double every other digit until you reach the first digit.
    numbers.map((number, index) => {
        if (index % 2 === 0) {
            // If doubling the number results in a number greater than 9, split the number into two digits and add them together.
            if (number * 2 > 9) {
                let product = number * 2
                let splitProduct = product.toString().split('')
                let sum = splitProduct.reduce((a, b) => parseInt(a) + parseInt(b))
                numbers[index] = sum
            } else {
                numbers[index] = number * 2
            }
        }
    })

    // Add all the digits in the array of numbers.
    let sum = numbers.reduce((a, b) => parseInt(a) + parseInt(b))

    // If the sum modulo 10 is equal to 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise it is invalid.
    if (sum % 10 === 0) {
        return true
    } else {
        return false
    }
}

// Test Credit Card Validation
// console.log(cardIsValid('4408041234567893')) // output => true
// console.log(cardIsValid('1234567890123456')) // output => false
// console.log(cardIsValid('38520000023237')) // output => true