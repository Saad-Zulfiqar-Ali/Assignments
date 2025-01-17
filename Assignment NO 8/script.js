// 1:
// Write a js program to find maximum between two numbers.
function checkMaxAndMin() {

    var userInputNumber = prompt ("Enter Any Number")
    var userInputNumber1 = prompt ("Enter Any Number")

// Convert Text To Number So User Can Enter Only Number

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

// Convert Text To Number So User Can Enter Only Number

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

    // Convert Text To Number So User Can Enter Only Number

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

    // Convert Text To Number So User Can Enter Only Number

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
}

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

 // If User Input Other Alphabet Then Vowel 

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

function checkDay() {

    let day = prompt("Enter Any Number Between 1 To 7")

        day = parseInt(day)

    switch (day) {
        case 1:
            console.log("It's Monday");
                break;
    
        case 2:
            console.log("It's tuesday");
                break;
    
        case 3:
            console.log("It's Wednesday");
                break;
    
        case 4:
            console.log("It's Thursday");
              break;

        case 5:
            console.log("It's Friday");
                break;
    

        case 6:
            console.log("It's Saturday");
                break;
    
        case 7:
            console.log("It's Sunday");
                break;
    
        default:
            console.log(`${day} It's Not A Day`);
            
    }
}



    // 12 : 
    // Write a js program to input month number and print number of days in that month.

    function CheckMonthDays() {
        
        let inputMoth = prompt("Enter Month Or Month Number")
    
        // If User Input 1 Or January
    
        switch  (inputMoth) {
    
            case "January":
                case"january":
                    case'1':
                         console.log("January: Have 31 Days");
            
            break;
        
    
        // If User Input 2 Or February
    
            case "february" :
                case "February" :
                    case "2" :
                         console.log("February: have 29 Days In 2025 Year");
            break;
        
        
          // If User Input 3 Or March 
    
          case "March":
                case "march":
                    case "3" :
                        console.log("March: have 31 Days");
                         break;
    
    
     // If User Input 4 Or April
    
                case "April":
                    case "april":
                        case "4":
                            console.log("April: have 30 Days");
                             break;
    
        // If User Input 5 Or May
    
                case "May":
                    case "may":
                        case "5":
                            console.log("May: have 31 Days");
                                break;
    
         //If User Input 6 Or June
    
                    case "June":
                        case "june":
                            case "6":
                                console.log("June: have 30 Days");
                                    break;
                                
    
         // If User Input 7 Or July
    
                case "July":
                    case "july":
                        case "7":
                            console.log("July: have 31 Days");
                                break;                        
    
    
         // If User Input 8 Or August
    
            case "August" :
                case "august":
                    case "8":
                        console.log("August: have 31 Days");
                        break;
    
    
         // If User Input 9 Or September
    
            case "September":
                case "september":
                case "9":
                    console.log("September: have 30 Days");
                    break;
                    
    
         // IF User Input 10 Or October
    
                case "October":
                    case "october":
                        case "10":
                            console.log("October: have 31 Days");
                                break;
                            
    
    
         // If User Input November Or 11
    
                case "November":
                    case "november":
                        case "11":
                            console.log("November: Have 30 Days");
                                break;
                            
    
          // IF User Input December OR 12
    
                case "December":
                    case  "december":
                        case "12":
                            console.log("December: have 31 Days");
                                break;                        
    
    
          // If No Condition Match Then
    
                default:
                    console.log(`It Isn't A Number:  ${inputMoth}`);
                    
    
    }
    }

// 14 :
// Write a js program to input angles of a triangle and check whether triangle is valid or not

function checkAnglesOfTriangle() {
    
// Input Angles Of A Triangle

    var angle = prompt ("Enter First Angle Of Triangle ")
    var angle1 = prompt ("Enter Second Angle Of Triangle ")
    var angle2 = prompt ("Enter Third Angle Of Triangle ")

 // Convert Text To Number So User Can Enter Only Number

    angle = parseInt (angle)
    angle1 = parseInt(angle1)
    angle2 = parseInt (angle2)

    // If The Triangle Is Valid Then

    if (angle + angle1 + angle2 === 180) {
        console.log("The Triangle Is Valid");
        
        
    }

    //  // If The Triangle Isn't Valid Then

    else {console.log("The Triangle Isn't Valid");
    }
}


//  15: 
//  Write a js program to input all sides of a triangle and check whether triangle is valid or not.

function checkUserTriangle() {

    var side = prompt("Enter The First Side Of Triangle")
    var side1 = prompt("Enter The Second Side Of Triangle")
    var side2 = prompt("Enter The Third Side Of Triangle")

    // Convert Text To Number So User Can Enter Only Number

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


//  16 :
//  Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

function checkTriangle() {

    // program to check whether the triangle
 var firstSideOfTriangle = prompt("Enter The First Side Of Triangle")
  var secSideOfTriangle = prompt("Enter The Second Side Of Triangle")
   var thirdSideOfTriangle = prompt("Enter The Third Side Of Triangle")

// Convert Text To Number So User Can Enter Only Number

   firstSideOfTriangle = parseInt (firstSideOfTriangle)
   secSideOfTriangle = parseInt(secSideOfTriangle)
   thirdSideOfTriangle = parseInt(thirdSideOfTriangle)

// If triangle is equilateral

   if (firstSideOfTriangle === secSideOfTriangle && firstSideOfTriangle === thirdSideOfTriangle && secSideOfTriangle === thirdSideOfTriangle) {
console.log("All The Sides Are Equal So The Triangle Is Equilateral Triangle");
    
   }

// If Triangle Is Isosceles

   else if  (firstSideOfTriangle !== secSideOfTriangle && firstSideOfTriangle === thirdSideOfTriangle && secSideOfTriangle === thirdSideOfTriangle)  {
    console.log("There Are Two SIde That Are Equal So It is Isosceles Triangle");
    
   }

// // If Triangle Is Scalene

   else if (firstSideOfTriangle !== secSideOfTriangle && firstSideOfTriangle !== thirdSideOfTriangle && secSideOfTriangle !== thirdSideOfTriangle) {
    console.log("There Isn't Any Side That Are Equal So It IS Scalene Triangle");
    
    
   }

 else {console.log("Invalid Value");
 }   
}



// 18:
//  Write a js program to calculate Profit or Loss.

function lossOrProfit() {

    var inputUserSales = prompt ("Enter Last Month Earning ");
    var inputUserSales1 = prompt ("Enter This Month Earning ")

    // Convert Text To Number So User Can Enter Only Number
    
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

// 19. 
// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer.
// // Calculate percentage and grade according to following:

// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


function percentageChecker() {

// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer.

    var userPhysicsMarks = prompt("Enter Your Physics Marks")
    var userChemistryMarks = prompt("Enter Your Chemistry Marks")
    var userBiologyMarks = prompt("Enter Your Biology Marks")
    var userMathematicsMarks = prompt("Enter Your Mathematics Marks")
    var userComputersMarks = prompt("Enter Your Computer Marks")
    var checkEverySubject

    // Convert Text To Number So User Can Enter Only Number

    userPhysicsMarks = parseInt(userPhysicsMarks)
    userChemistryMarks = parseInt(userChemistryMarks)
    userBiologyMarks = parseInt(userBiologyMarks)
    userMathematicsMarks = parseInt(userMathematicsMarks)
    userComputersMarks = parseInt(userComputersMarks)
    checkEverySubject = parseInt(checkEverySubject)

    checkEverySubject = ((userBiologyMarks + userChemistryMarks + userComputersMarks + userMathematicsMarks + userPhysicsMarks) / 500 * 100);

// If Percentage >= 90% : Grade A

    if (checkEverySubject >= 90) {
        console.log(checkEverySubject + (" Grade A"));
        
        
    }

// If Percentage  80% Or Less Then 90% : Grade B

else if (checkEverySubject >= 80 && checkEverySubject <= 90) {
    console.log(checkEverySubject + (" Grade B"));
}
    
// If Percentage 70% Or Less Then 80% : Grade C

else if (checkEverySubject >= 70 && checkEverySubject <= 80) {
    console.log(checkEverySubject + (" Grade C"));
}

// If Percentage 79% Or Less Then 60% : Grade D

else if (checkEverySubject >= 60 && checkEverySubject <= 70) {
    console.log(checkEverySubject + (" Grade D"));
}

// If Percentage 60% Or Less Then 50% : Grade E

else if (checkEverySubject >= 50 && checkEverySubject <= 60) {
    console.log(checkEverySubject + (" Grade E"));
}

// If Percentage Less Then 40% : Grade F

else if (checkEverySubject <= 40) {
    console.log(checkEverySubject + (" Grade F"));
}

// If Percentage Less Then 40% : Fail

else (console.log("Your Are Fail")
)
}

// 20:
//  Write a js program to input basic salary of an employee and calculate its Gross salary according to following:

// Basic Salary <= 10000 : HRA = 20%, DA = 80%

// Basic Salary <= 20000 : HRA = 25%, DA = 90%

// Basic Salary > 20000 : HRA = 30%, DA = 95%


// HRA (House Rent Allowance):

// DA (Dearness Allowance):


function checkUserSalary() {


// Input Basic Salary Or User Salary

    var checkUserSalary1 = prompt ("Enter Your Salary")

// (House Rent Allowance)
 
    var houseRentAllowance = 20 / 100
var houseRentAllowance1 = 25 / 100
var houseRentAllowance2 = 30 / 100

// (Dearness Allowance)

var dearnessAllowance = 80 / 100
var dearnessAllowance1 = 90 / 100
var dearnessAllowance2 = 95 / 100

// Convert Text To Number So User Can Enter Only Number

checkUserSalary1 = parseInt(checkUserSalary1)


// If Basic Salary Is Less Then 10000 :  House Rent Allowance = 20%, Dearness Allowance = 80%

if (checkUserSalary1 <= 10000  ){

    var houseRentAllowance3 = houseRentAllowance * checkUserSalary1;
    var dearnessAllowance3 = dearnessAllowance * checkUserSalary1;

    console.log("Your House Rent Allowance Is " + houseRentAllowance3 + (" And Dearness Allowance Is " + dearnessAllowance3));
    
}

// If Basic Salary Is Less Then 20000 :  House Rent Allowance = 25%, Dearness Allowance = 90%

else if (checkUserSalary1 >= 10000 && checkUserSalary1 <= 20000 ){

    var houseRentAllowance3 = houseRentAllowance1 * checkUserSalary1;
    var dearnessAllowance3 = dearnessAllowance1 * checkUserSalary1;

    console.log("Your House Rent Allowance Is " + houseRentAllowance3 + (" And Dearness Allowance Is " + dearnessAllowance3));
}
// If Basic Salary IS Greater Then 20000 :  House Rent Allowance = 30%, Dearness Allowance = 95%

    else if (checkUserSalary1 >= 20000  ){

        var houseRentAllowance3 = houseRentAllowance2 * checkUserSalary1;
        var dearnessAllowance3 = dearnessAllowance2 * checkUserSalary1;
    
        console.log("Your House Rent Allowance Is " + houseRentAllowance3 + (" And Dearness Allowance Is " + dearnessAllowance3));

    }
    else {console.log("Invalid Value");
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

    // Convert Text To Number So User Can Enter Only Number

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



// 1 ,2 ,3 , 4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,14 ,15 ,16 ,18 ,19 ,20 ,21 Have Done
// 13 , 17, 