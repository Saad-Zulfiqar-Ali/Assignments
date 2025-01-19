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

// 8. Write a js program to find total number of alphabets, digits or special character in a string.

// 9. Write a js program to count total number of vowels and consonants in a string.

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

// 13. Write a js program to reverse order of words in a given string.



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


// 16. Write a js program to search all occurrences of a character in given string.

// 17. Write a js program to count occurrences of a character in given string.

// 18. Write a js program to find highest frequency character in a string.

// 19. Write a js program to find lowest frequency character in a string.

// 20. Write a js program to count frequency of each character in a string.

// 21. Write a js program to remove first occurrence of a character from string.

// 22. Write a js program to remove last occurrence of a character from string.

// 23. Write a js program to remove all occurrences of a character from string.

// 24. Write a js program to remove all repeated characters from a given string.

// 25. Write a js program to replace first occurrence of a character with another in a string.

// 26. Write a js program to replace last occurrence of a character with another in a string.

// 27. Write a js program to replace all occurrences of a character with another in a string.

// 28. Write a js program to find first occurrence of a word in a given string.

// 29. Write a js program to find last occurrence of a word in a given string.

// 30. Write a js program to search all occurrences of a word in given string.

// 31. Write a js program to count occurrences of a word in a given string.

// 32. Write a js program to remove first occurrence of a word from string.

// 33. Write a js program to remove last occurrence of a word in given string.

// 34. Write a js program to remove all occurrence of a word in given string.

// 35. Write a js program to trim leading white space characters from given string.

// 36. Write a js program to trim trailing white space characters from given string.

// 37. Write a js program to trim both leading and trailing white space characters from given string.

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



// 1 ,2 ,3 ,5 ,6 ,10 ,11 ,14 ,38 = 9 Done