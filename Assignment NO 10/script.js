// String Exercise
// 1. Write a js program to find length of a string.

function findLength() {

    let userInput = prompt("Type Any Thing")

        if (userInput === null){
             console.log("There Isn't Any Input Provide");
    
}

           else {

                 console.log(`The Length Of The ${userInput} Is ${userInput.length}`);   
    }
    
    
}

// 2. Write a js program to copy one string to another string.

function stringToAnother() {

        let firstString = prompt("Enter AnyThing")

            if (userInput === null){
                console.log("There Isn't Any Input Provide");
   
} 
    else {

            let secondString = firstString;

                console.log(`The Real Sting Is ${firstString}`);
                    console.log(`The Copy String Is ${secondString}`);
        
        
}
}
// 3. Write a js program to concatenate two strings.

    function concatenateTwoStrings() {

        let userInput = "Hello"

            console.log(`${userInput.concat(" World!")}`);
    
}

// 4. Write a js program to compare two strings.

function compareStrings() {

    let userInput1 = prompt("Enter AnyThing")
    let userInput2 = prompt("Enter AnyThing")

    if (userInput1 === userInput2) {
        console.log(`${userInput1} ${userInput2} Both Are Same`);
        
        
    }

    else {
        console.log(`${userInput1} ${userInput2} Both Aren't Same`);

        
    }
    
}


// 5. Write a js program to convert lowercase string to uppercase.

function convertToUpperCase() {

    let userInput = prompt("Enter Data That You Want To Convert Into UpperCase")

        if (userInput === null){
             console.log("There Isn't Any Input Provide");
    
}

           else {

                 console.log(`${userInput}  To ${userInput.toUpperCase}`);   
    }
    
    
}


// 6. Write a js program to convert uppercase string to lowercase.

function convertToLowerCase() {

    let userInput = prompt("Enter Data That You Want To Convert Into LowerCase")

        if (userInput === null){
             console.log("There Isn't Any Input Provide");
    
}

           else {

                 console.log(`${userInput}  To ${userInput.toLowerCase}`);   
    }
    
    
}



// 7. Write a js program to toggle case of each character of a string.

    function toggleChar() {

        let userInput = prompt("Enter AnyThing")

     let toggledString = '';

        for (let i = 0; i < userInput.length; i++) {
            let char= userInput[i];   
            

            if (char >= "A" && char <= 'Z') {
                 toggledString += char.toLowerCase();
            
            
        }
        else  if (char >= "a" && char <= "z") {
              toggledString += char.toUpperCase();

        }

         else {
              toggledString += char;
            
        }
        
    }

                console.log(toggledString);
    
}

// 8. Write a js program to find total number of alphabets, digits or special character in a string.


function totalNumber() {

  let userInput = prompt("Enter AnyThing")
    
        let alphabetCount = 0;
            let numberCount = 0;
            let specialCharacter = 0;



    for (let i = 0; i < userInput.length; i++) {
        let char = userInput[i];

      if (char >= `A` && char <= `Z` || char >= `a` && char <= `z`) {

        alphabetCount++
      }
      else if (char >= 0 && char <= 9 ){
        numberCount++
      }
      else {
        specialCharacter++
      }
    }


         console.log(`The Total Number Of Alphabets Are: ${alphabetCount}`);
             console.log(`The Total Number Of Number Are: ${numberCount}`);
                console.log(`The Total Number Of Special Character Are: ${specialCharacter}`);
                
}

// 9. Write a js program to count total number of vowels and consonants in a string.

function countVowels(str) {

    str = str.toLowerCase();

    let vowels = 'aeiou';
        let vowelsCount = 0;
            let consonantsCount = 0;


    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') {

            if (vowels.includes(char)) {
                vowelsCount++;
            } else {

                consonantsCount++;
            }
        }
    }


         console.log(`Total Vowel Count Is: ${vowelsCount}`);
             console.log(`Total Consonants Count Is: ${consonantsCount}`);
}

function countTotalVowelUsed() {

    let userInput = prompt("Enter Anything:");

        countVowels(userInput);
}

countTotalVowelUsed();


// 10. Write a js program to count total number of words in a string.

function countNumbers() {

    let userInput = prompt("Enter Numbers That You Want To Count")

            userInput = userInput.toString();

                console.log(`The Total Numbers Are ${userInput.length}`);
    
    
}

// 11. Write a js program to find reverse of a string.

function reverseString() {
    
    let userInput = prompt("Enter AnyThing")

    if (userInput === null){
        console.log("There Isn't Any Input Provide");

}

      else {

           let reversedStrings = userInput.split('').reverse().join('')
                console.log(reversedStrings);
            
}

}

// 12. Write a js program to check whether a string is palindrome or not.

function checkPalindrome(){

    let i = prompt("Enter Any Number That You Wanna Check If it's A Palindrome Number Or Not")

        let str = i.toString();

            let reversedDigit = str.split('').reverse().join('');
  
                 let result = (str === reversedDigit) ? i + " :It's A Palindrome Number" :i + " :It Isn't A  Palindrome Number" 

                    console.log(result);


}

// 13. Write a js program to reverse order of words in a given string.

function reverseString() {

    let i = prompt("Enter Any Number That You Wanna Check If it's A Palindrome Number Or Not")

            let str = i.toString();

                 let reversedDigit = str.split('').reverse().join('');

                 console.log(`${i} The Reverse Order Is ${reversedDigit}`);
                 
    
}


// 14. Write a js program to find first occurrence of a character in a given string.


function findFirstChar() {

    let userInput = prompt("Enter Data That You Want")

        if (userInput === null){
             console.log("There Isn't Any Input Provide");
    
}

           else {

                 console.log(`${userInput}  The First Character Is  ${userInput.charAt(0)}`);   
    }
    
    
}



// 15. Write a js program to find last occurrence of a character in a given string.

function findLastChar() {

    let userInput = prompt("Enter Data That You Want")

        if (userInput === null){
             console.log("There Isn't Any Input Provide");
    
}

        else if (userInput === ''){
            console.log("The String Is Empty Please Provide With Number And Alphabet");
        }

            else {

                let lastChar = userInput[userInput.length - 1]

                    console.log(`${userInput} The Last Digit Is ${lastChar} `);
                    
            }

            
    
    
}


// 16. Write a js program to search all occurrences of a character in given string.


function searchOccurrences(str) {

    let str = prompt("Enter AnyThing")
        let charToSearch = prompt(`Enter The Word That You Wanna Check `)
    
            if (charToSearch.length !== 1) {
                console.log(`Please Enter Only One Word`);
                return;
                
                
            }

            let position = []
    
                 for (let i = 0; i < str.length; i++) {
                    if (str[i].toLowerCase() === charToSearch.toLowerCase()) {
                         position.push(i);
                    }
                   
                    
                }

                if (position > 0 ){
                        console.log(`The Character ${charToSearch} Is Found At The Position Of ${position.join(`, `)}`);
                        
                }
                else{
                    console.log(`The Character ${charToSearch} Does Not Found In ${position}`);
                    
                }

                
    
    }

// 17. Write a js program to count occurrences of a character in given string.


function countOccurrences(str) {

    let str = prompt("Enter AnyThing")
        let charToSearch = prompt(`Enter The Word That You Wanna Check `)
    
            if (charToSearch.length !== 1) {
                console.log(`Please Enter Only One Word`);
                return;
                
                
            }
                let countOccurrences = 0;
    
                 for (let i = 0; i < str.length; i++) {
                    if (str[i].toLowerCase() === charToSearch.toLowerCase()) {
                         occurrencesCount++;
                    }
                   
                    
                }
    
                        console.log(`The Word ${charToSearch} Appear ${countOccurrences} In The ${str}`);
                
    
    }

// 18. Write a js program to find highest frequency character in a string.

// 19. Write a js program to find lowest frequency character in a string.

// 20. Write a js program to count frequency of each character in a string.


// 21. Write a js program to remove first occurrence of a character from string.

function removeFirstChar() {

        let userInput = prompt("Type AnyThing")

            removeFirstDigit = userInput.slice(1)

                console.log(`${userInput} Remove First character ${removeFirstDigit}`);
                
    
}

// 22. Write a js program to remove last occurrence of a character from string.

function removeLastChar() {

    let userInput = prompt("Type AnyThing")

        removeLastDigit = userInput.slice(0 , userInput.length - 1)


            console.log(`${userInput} Remove First character ${removeLastDigit}`);
            

}

// 23. Write a js program to remove all occurrences of a character from string.

function removeAllOccurrences(){

    let userInput = prompt("Enter AnyThing")
        let wordRemove = prompt(`Enter The Word That You Want To Remove`)
            removeOccurrences = userInput.slice(wordRemove).join(``)
                console.log(removeOccurrences);
                

}

// 24. Write a js program to remove all repeated characters from a given string.

// 25. Write a js program to replace first occurrence of a character with another in a string.

// 26. Write a js program to replace last occurrence of a character with another in a string.

// 27. Write a js program to replace all occurrences of a character with another in a string.

// 28. Write a js program to find first occurrence of a word in a given string.

function firstOccurrence (str , word){

    let index = str.indexOf(word)

    if (index !== -1) {
            return (`The First Word That Occurrence Is ${word} In The Index OF ${index}`);
        
        
    }
    else {
            return (`There is No Word In The String OF ${word}`);
        
    }


}
function printFirstOccurrence(){

    let userInput = prompt("Enter AnyThing")

            let wordFind = prompt("Enter The Word That You Want To Find")

             result = firstOccurrence(userInput , wordFind);

                    console.log(result);
    
}

// 29. Write a js program to find last occurrence of a word in a given string.

function LastOccurrence(str , word) {

    let index = str.lastIndexOf(word)

    if (index !== -1) {
            return (`The First Word That Occurrence Is ${word} In The Index OF ${index}`);
        
        
    }
    else {
            return (`There is No Word In The String OF ${word}`);
        
    }


}
function printLastOccurrence(){

    let userInput = prompt("Enter AnyThing")

          let wordFind = prompt("Enter The Word That You Want To Find")

            result = LastOccurrence(userInput , wordFind);

                 console.log(result);
    
}
    


// 30. Write a js program to search all occurrences of a word in given string.

// 31. Write a js program to count occurrences of a word in a given string.

// 32. Write a js program to remove first occurrence of a word from string.

function removeFirstOccurrence(str , word) {

    let index = str.IndexOf(word)

    if (index !== -1) {
            return (`The First Word That Occurrence Is ${word} In The Index OF ${index}`);
        
        
    }
    else {
            return (`There is No Word In The String OF ${word}`);
        
    }


}
function printLastOccurrence(){

    let userInput = prompt("Enter AnyThing")

        let wordFind = prompt("Enter The Word That You Want To Find")

             result = removeFirstOccurrence(userInput , wordFind.replace(" "));

                 console.log(`${result}: The Word Remove Is : ${wordFind}`);
    
}

// 33. Write a js program to remove last occurrence of a word in given string.

function LastOccurrence(str , word) {

    let index = str.lastIndexOf(word)

    if (index !== -1) {
            return (`The First Word That Occurrence Is ${word} In The Index OF ${index}`);
        
        
    }
    else {
            return (`There is No Word In The String OF ${word}`);
        
    }


}
function removeLastOccurrence(){

    let userInput = prompt("Enter AnyThing")

         let wordFind = prompt("Enter The Word That You Want To Find")

            result = removeFirstOccurrence(userInput , wordFind.replace(" "));

                 console.log(`${result} : The Word Remove Is : ${wordFind}`);
    
}

// 34. Write a js program to remove all occurrence of a word in given string.

function removeAllOccurrence(){

    let userInput = prompt("Enter AnyThing")
        let wordRemove = prompt("Enter The Word That You Want To Remove")
            removeWord = userInput.split(wordRemove).join("")

                console.log(removeWord);
                
}

// 35. Write a js program to trim leading white space characters from given string.

function trimLeading() {

    let userInput = prompt("Type AnyThing")

        if (userInput === null){
            console.log("There Isn't Any Input Provide");

}

         else {

             console.log(`${userInput} To ${userInput.trimStart}`);

}
    
    
}

// 36. Write a js program to trim trailing white space characters from given string.

function trimTrailing() {

    let userInput = prompt("Type AnyThing")

    if (userInput === null){
        console.log("There Isn't Any Input Provide");

}

         else {

             console.log(`${userInput} To ${userInput.trimEnd}`);

}

    
    
}

// 37. Write a js program to trim both leading and trailing white space characters from given string.

function removeSpace(){

    let userInput = prompt("Type AnyThing")

    let trimChar = userInput.trimStart ( userInput.trimEnd)

    if (userInput === null){
        console.log("There Isn't Any Input Provide");

}

      else {

            console.log(`${userInput}  To ${trimChar}`);   
}


}


// 38. Write a js program to remove all extra blank spaces from given string.

function removeSpace(){

    let userInput = prompt("Type AnyThing")

    if (userInput === null){
        console.log("There Isn't Any Input Provide");

}

      else {

            console.log(`${userInput}  To ${userInput.trim}`); 
}


}



// 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,21 ,22 ,23 ,26 ,28 ,29 ,32 ,33 ,34 ,35 ,36 ,37 ,38 = 29 Done Out Of 38