// 1:
// Write a js program to find maximum between two numbers.
function checkMaxAndMin() {

    var userInputNumber = prompt ("Enter Any Number")
    var userInputNumber1 = prompt ("Enter Any Number")

    userInputNumber = parseInt(userInputNumber);
    userInputNumber1 = parseInt(userInputNumber1);
    
    if (userInputNumber > userInputNumber1) {
        console.log(userInputNumber + (' Is Maximin Number'));
        
    }
    
    else if (userInputNumber < userInputNumber1){
    console.log(userInputNumber1 + (' Is Maximin Number'));
        
    }
    else if (userInputNumber === userInputNumber1)
        console.log("Both Number Are Equal");
    
    else {console.log(" ");
    }
        
}

//  2 :
//  Write a js program to find maximum between three numbers.

function checkMaxAndMin1() {

    var userInputNumber2 = prompt ("Enter Any Number")
    var userInputNumber3 = prompt ("Enter Any Number")
    var userInputNumber4 = prompt ("Enter Any Number")

    userInputNumber2 = parseInt(userInputNumber2);
    userInputNumber3 = parseInt(userInputNumber3);
    userInputNumber4 = parseInt(userInputNumber4);
    
if (userInputNumber2 > userInputNumber3 && userInputNumber2 > userInputNumber4) {
    console.log(userInputNumber2 + (" Is Maximum Number"));
}
 
else if ( userInputNumber2 < userInputNumber3 && userInputNumber3 > userInputNumber4 ){
    console.log(userInputNumber3 + (" Is Maximum Number"));

   }

    else if (userInputNumber2 < userInputNumber4 && userInputNumber3 < userInputNumber4) {
        console.log(userInputNumber4 + (' Is Maximum Number'));

}

else if ( userInputNumber2 === userInputNumber3 && userInputNumber2 === userInputNumber4 && userInputNumber3 === userInputNumber4){
    console.log("All Values Are Equal");
    
}

 else { console.log(' ');
}
}

// 3: 
// Write a js program to check whether a number is negative, positive or zero.
function checkNumber() {
    var inputNumber = prompt ("Enter Any Number")
    inputNumber = parseInt(inputNumber)
    
    if (inputNumber < 0) {
        console.log((inputNumber) + " The Input Number Is Negative");
        
    }
    else if (inputNumber >= 1 && inputNumber <= 99) {
        console.log((inputNumber) + " The Input Number is Positive");       
} 

else if (inputNumber === 0) {
    console.log("The Input Number Is Zero");
       
}

else {console.log(" ");
}
}

//  4 :
//  Write a js program to check whether a number is divide Able by 5 and 11 or not.

function checkTheNumberIsDivideAble() {
    
    var checkUserNumber = prompt("Enter Any Number")

    checkUserNumber = parseInt(checkUserNumber);

    if (checkUserNumber % 5 === 0 ) {
        console.log(checkUserNumber +" The Number Is Divide Able By 5");
        
    }

    else if (checkUserNumber % 11 === 0) {
        console.log(checkUserNumber + (" The Number Is Divide Able By 11"));  

    }

else {console.log("The Number Isn't Divide Able By 5 Or 11 ");
}
}

//  5:
//  Write a js program to check whether a number is even or odd.

function checkNumber1() {

    var inputNumber1 = prompt ("Enter Any Number")
    inputNumber1 = parseInt(inputNumber1)

    // IF The Number is Even
    
    if (inputNumber1 % 2 === 0) {
        console.log((inputNumber1) + " Is Even ");
        
    }
// IF The Number is Odd
    else {console.log((inputNumber1) + " The Number Is Odd");
    }
}

// 6 :
// Write a js program to check whether a year is leap year or not

function checkYear() {

    var userInputYear = prompt('Enter Year Which You Want To Check Is Leap Year Or Not')
    
    userInputYear = parseInt(userInputYear);

// If The Year Is leap

    if (userInputYear % 400 === 0 ) {
        console.log(userInputYear + " This Is A Leap Year");
        
    }

// If The Year Is Not leap
    
    else if (userInputYear % 100 === 0){
        console.log(userInputYear + " This Is A Not A Leap Year");
        
    }

    // If The Year Is leap

    else if (userInputYear % 4 === 0 ) {
        console.log(userInputYear + " This Is A Leap Year");
    }

    // If The Year Is Not leap

        else if (userInputYear % 4 !== 0 ) {
            console.log(userInputYear + " This Is Not A Leap Year");
        }

        else {console.log("Invalid Year");
        }
} checkYear();

// 7 :
// a js program to check whether a character is alphabet or not.

function checkAlphabet() {

    var checkCharacter = prompt("Enter A Alphabet")

    // IF the Character Is Alphabet 

    if (checkCharacter >= 'A' && checkCharacter <= 'Z' || checkCharacter >= 'a' && checkCharacter <= "z") {
        console.log(checkCharacter + (" Is A Or An Alphabet"));
        
        
    }

    // IF the Character Is Not Alphabet 

    else {console.log(checkCharacter + (" Is Not A Alphabet"));
    }
}
checkAlphabet();

// 8: 
// Write a js program to input any alphabet and check whether it is vowel

function inputAlphabet() {

    var inputUserAlphabet = prompt("Enter Any Vowel")

// If User Input Vowel "A"

    if (inputUserAlphabet === 'A' || inputUserAlphabet === 'a') {
        console.log((inputUserAlphabet) + " Is A Vowel" );

        // If User Input Vowel "E"
    
    } else if (inputUserAlphabet === 'E' || inputUserAlphabet === 'e' ) {
        console.log((inputUserAlphabet) + " Is A Vowel" );
    }

// If User Input Vowel "I"

    else if (inputUserAlphabet === 'I' || inputUserAlphabet === 'i') {
        console.log((inputUserAlphabet) + " Is A Vowel" );
    }
    
// If User Input Vowel "O"

    else if (inputUserAlphabet === 'O' || inputUserAlphabet === 'o') {
        console.log((inputUserAlphabet) + " Is A Vowel" );
        
    }

// If User Input Vowel "U"

    else if (inputUserAlphabet === 'U' || inputUserAlphabet === 'u') {
        console.log((inputUserAlphabet) + " Is A Vowel" );
    }

     // // If User Input Other Alphabet Then Vowel 

        else {console.log((inputUserAlphabet) + " Isn't a Vowel");
        }
    }
 // 9 :
 //  Write a js program to input any character and check whether it is alphabet, digit or special character.

 function checkVariable() {

    var userInputData = prompt("Enter Only One Alphabet ,Digit or Special Character.")

// If User Input More Then 1 Character 

if (userInputData.length !== 1){
    console.log("Please Enter One Only Number Or Alphabet Or Special Character ");
    
}

// If User Input Alphabet 

    else if (userInputData >= "a" && userInputData <= "z" || userInputData >= "A" && userInputData <= "Z") {
        console.log(userInputData + " It Is An Alphabet");
        
    }

// If User Input Number

    else if (userInputData >= 0 && userInputData <= 9) {
        console.log(userInputData + " It Is A Number");
        
    }

 // If User Input Special Character  
    else {console.log(userInputData + " It Is A Special Character");
    }
    
 } 

 // 10 :
 // Write a js program to check whether a character is uppercase or lowercase alphabet.

 function checkCharacter1() {

    var checkCases = prompt("Enter Any Alphabet")

// If User Input More Then 1 Character 

    if (userInputData.length !== 1){
        console.log("Please Enter One Only Alphabet  ");
        
    }

// If The Input Character Is LowerCase

    else if (checkCases >= "a" && checkCases <= "z") {
        console.log(checkCases + (' The Character Is Lowercase'));
        
    }

// If The Input Character Is UpperCase

    else if (checkCases >= "A" && checkCases <= "Z") {
        console.log(checkCases + (' The Character Is Uppercase'));
    }
    
// If User Input Any Number Or Special Character Or User Input Is Rather Then Alphabet

    else (console.log(checkCases +" Invalid Character ")
    )
 }


// 11: 
// Write a js program to input week number and print week day.

function weekDays() {
  
    var inputWeekNumber = prompt ("Enter 1 to 7 For Week Day")
    inputWeekNumber = parseInt(inputWeekNumber)
  
    // If User Input Rather Then 1 to 7

if (inputWeekNumber !== 1 && inputWeekNumber !== 2 && inputWeekNumber !== 3 && inputWeekNumber !== 4 && inputWeekNumber !== 5 && inputWeekNumber !== 6 && inputWeekNumber !== 7){
    console.log("Enter 1 to 7 Not " + inputWeekNumber);
    
}


// IF User Input 1

     else if (inputWeekNumber === 1) {
        console.log("Monday");  
    }

    // IF User Input 2

    else if (inputWeekNumber === 2) {
        console.log("Tuesday");
  
    }
     
    // IF User Input 3

    else if (inputWeekNumber === 3){
        console.log("Wednesday");
        
    }

     // IF User Input 4


    else if (inputWeekNumber === 4) {
        console.log("thursday");
  
    }

       // IF User Input 5

    else if (inputWeekNumber === 5){
        console.log("Friday");
    }

    // IF User Input 6

    else if (inputWeekNumber === 6){
    console.log("Saturday");
 
    }

     // IF User Input 7

    else if (inputWeekNumber === 7){
    console.log("Sunday");
    
     }
     // If User Input Rather Then 1 to 7

    else {
        console.log("Invalid Number");
        
    }
}


    // 12 : 
    // Write a js program to input month number and print number of days in that month.

    function CheckMonthDays() {
        
        var inputMoth = prompt("Enter Month Or Month Number")

        // If User Input 1 Or January

        if (inputMoth === "January" || inputMoth === "january" || inputMoth === '1') {
            console.log("January Have 31 Days");
            
        }

        // If User Input 2 Or February

        else if (inputMoth === "february" || inputMoth === "February" || inputMoth === '2') {
            console.log("February have 29 Days In 2025 Year");
            
        }
        
          // If User Input 3 Or March 

        else if (inputMoth === "March" || inputMoth === "march" || inputMoth === '3') {
            console.log("March have 31 Days");
    }

     // If User Input 4 Or April

         else if (inputMoth === "April" || inputMoth === "april" || inputMoth === '4') {
        console.log("April have 30 Days");
        }

        // If User Input 5 Or May

         else if (inputMoth === "May" || inputMoth === "may" || inputMoth === '5') {
        console.log("May have 31 Days");
         }

         //If User Input 6 Or June

         else if (inputMoth === "June" || inputMoth === "june" || inputMoth === '6') {
        console.log("June have 30 Days");
         }

         // If User Input 7 Or July

         else if (inputMoth === "July" || inputMoth === "july" || inputMoth === '7') {
        console.log("July have 31 Days");
         }

         // If User Input 8 Or August

         else if (inputMoth === "August" || inputMoth === "august" || inputMoth === '8') {
        console.log("August have 31 Days");
         }

         // If User Input 9 Or September

         else if (inputMoth === "September" || inputMoth === "september" || inputMoth === '9') {
        console.log("September have 30 Days");
         }

         // IF User Input 10 Or October

         else if (inputMoth === "October" || inputMoth === "october" || inputMoth === '10') {
        console.log("October have 31 Days");
         }

         // If User Input November Or 11

         else if (inputMoth === "November" || inputMoth === "november" || inputMoth === '11') {
             console.log("November have 30 Days");
         }

          // IF User Input December OR 12

         else if (inputMoth === "December" || inputMoth === "december" || inputMoth === '12') {
        console.log("December have 31 Days");
         }

          // If No Condition Match Then

         else {console.log("Invalid Month");
         }
}


//  15: 
//  Write a js program to input all sides of a triangle and check whether triangle is valid or not.

function checkUserTriangle() {

    var side = prompt("Enter The First Side Of Triangle")
    var side1 = prompt("Enter The Second Side Of Triangle")
    var side2 = prompt("Enter The Third Side Of Triangle")

    side = parseInt(side);
    side1 = parseInt(side1);
    side2 = parseInt(side2);

    // If The Triangle All Sides Are Equal Then
    
    if (side === side1 && side === side2 && side1 === side2 ) {
        console.log("The Triangle Is Valid");
        
    }

// If The Triangle All Sides Aren't Equal Then

    else {console.log("The Triangle Isn't Valid");
    }
}

// 18:
//  Write a js program to calculate Profit or Loss.

function lossOrProfit() {

    var inputUserSales = prompt ("Enter Last Month Earning ");
    var inputUserSales1 = prompt ("Enter This Month Earning ")
    
    inputUserSales = parseInt(inputUserSales);
    inputUserSales1 = parseInt(inputUserSales1);

// If The Last Month Earning is Lower Then This Month

    if (inputUserSales < inputUserSales1){
        console.log("This Month Is a Profit");
    }

// If The Last Month Earning is Greater Then This Month

    else if ( inputUserSales > inputUserSales1){
        console.log("This Month Is a loss");
          
    }

// IF Both Month Earning Are Equal 
    
    else {console.log("This Month Have No Profit And Loss");
    }
}

// 21 : 
// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill



// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:

function electricityBills() {

    var userElectricityUnits = prompt("Enter Your Electricity Units")

    userElectricityUnits = parseInt(userElectricityUnits)


    // For first 50 units Rs. 0.50/unit

if (userElectricityUnits >= 0 && userElectricityUnits <= 50) {
    console.log(userElectricityUnits * 0.50 * 1.20);
    

}

// For next 100 units Rs. 0.75/unit

    else if (userElectricityUnits >= 50 && userElectricityUnits <= 100) {
        console.log(userElectricityUnits * 0.75 * 1.20 );
    }

    // For next 100 units Rs. 1.20/unit

    else if (userElectricityUnits >= 100 && userElectricityUnits <= 250) {
        console.log(userElectricityUnits * 1.20 * 1.20 );
    }

    // For unit above 250 Rs. 1.50/unit

    else if (userElectricityUnits >= 250 ) {
        console.log(userElectricityUnits * 1.50 * 1.20);
    }
    else console.log("Invalid Units");
    
}
electricityBills();


// 1 ,2 ,3 , 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,15 ,18 ,21 Have Done  