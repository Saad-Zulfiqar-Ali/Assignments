//  1 :
//  Write a js program to print all natural numbers from 1 to n. - using while loop

function printAllNaturalNumber() {

    let i = 1;

    while( i <= 100 ){
        console.log(i);
    i++
    }
}

//  2 :
//  Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

function printAllReverseNumber() {

    let i = 100;

    while( i >= 1 ){
        console.log(i);
    i--
    }
    
}

//  3 :
//  Write a js program to print all alphabets from a to z. - using while loop

    function printAllAlphabet() {

        let i = "a".charCodeAt(0);
        let z = "z".charCodeAt(0);
        
        while (i <= z) {
            console.log(String.fromCharCode(i));
            
            i++
            
        }
    }


    //  4 :
    //  Write a js program to print all even numbers between 1 to 100. - using while loop

    function printAllEvenNumber() {
        let i = 1
             while( i <= 100 ){

                if (i % 2 === 0) {
                console.log(i);
    
                }
             i++
        }
    }

    //  5 :
    //  Write a js program to print all odd number between 1 to 100.

    function printAllOddNumber() {
        let i = 1
             while( i <= 100 ){

                if (i % 2 !== 0) {
                console.log(i);
    
                }
             i++
        }
    }

    //  6 :
    //  Write a js program to find sum of all natural numbers between 1 to n.

function sumAllNaturalNumber() {

    let i = 1;
    sum = 0;

    while( i <= 100 ){
        sum += i;
    
    i++
    }
    console.log(sum);
    
}
    //   7 :
    //  Write a js program to find sum of all even numbers between 1 to n.

function sumAllEvenNumber () {
    

    let i = 1;
    sum = 0;

    while( i <= 100 ){
        if( i % 2 == 0)
        sum += i;
    
    i++
    }
    console.log(sum);
}

//  8 :
//  Write a js program to find sum of all odd numbers between 1 to n.

function sumAllOddNumber () {
    

    let i = 1;
    sum = 0;

    while( i <= 100 ){
        if( i % 2 != 0)
        sum += i;
    
    i++
    }
    console.log(sum);
}

//  9 :
//  Write a js program to print multiplication table of any number.

function table() {
    
    let i = prompt("Enter Any Number For It's Table")
    i = parseInt(i);
    

    for (let a = 0; a <= 10; a++){
console.log(`${i} x ${a} = ${ i * a}`);


    } 
}


//  10 :
//  Write a js program to count number of digits in a number.


function checkDigits() {

    let i = prompt("Enter Any Number")

console.log("There Is : " + (i.length) + " Digits");

}

//  11 :
//  Write a js program to find first and last digit of a number.

function printFirstAndSecDigit() {

    let i = prompt("Enter Any Number")

            let str = i.toString();


            let firstNum = str.charAt(0);

            let lastNum = str.charAt(str.length - 1);

                 console.log("The First Digit Is : " + firstNum);
                 console.log( "The Last Digit Is : " + lastNum);
                 
    
}


//  12 :
//  Write a js program to find sum of first and last digit of a number.

function sumOfFirstAndLastDigits() {
    
    let i = prompt("Enter Any Number")

            let str = i.toString();


            let firstNum = parseInt(str.charAt(0));

            let lastNum = parseInt(str.charAt(str.length - 1));

            let sum = firstNum + lastNum
            sum = parseInt(sum);

                 console.log("The First Digit Is : " + firstNum);
                 console.log( "The Last Digit Is : " + lastNum);
                     console.log("The Sum Of First And Last Digit Is: " + sum);
    
}

//  13 :
//  Write a js program to swap first and last digits of a number.

function swapNumber() {
    
    let i = prompt("Enter Any Number")

    let str = i.toString();


    let firstNum = str.charAt(0);


    let lastNum = str.charAt(str.length - 1);

         console.log("The First Digit Is : " + firstNum);
         console.log( "The Last Digit Is : " + lastNum); 

         let num = firstNum;

         firstNum = lastNum;
         lastNum = num;

         console.log("The First Digit Is Swap To Last : " + firstNum);
         console.log( "The Last Digit Is Swap To First : " + num);

         
         

}

//  14 :
//  Write a js program to calculate sum of digits of a number.

function sumOfDigits() {
    
    let i = prompt("Enter Any Number")

    let str = i.toString();


    let firstNum = str.charAt(0);


    let lastNum = str.charAt(str.length - 1);

         console.log("The First Digit Is: " + firstNum);
         console.log( "The Last Digit Is: " + lastNum); 

            firstNum = parseInt(firstNum)
            lastNum = parseInt(lastNum)

            let num = firstNum;
            firstNum = lastNum;
            lastNum = num;

         let sum = firstNum + lastNum;

         console.log("The First Digit Is Swap To Last: " + firstNum);
             console.log( "The Last Digit Is Swap To First: " + num);
                 console.log("The Sum Of The First And Last Digits Are: " + sum );


}

//  15 :
//  Write a js program to calculate product of digits of a number.

function productOfDigits() {

    let i = prompt('Enter Any Number That You Wanna');
  
    let str = i.toString();
  
    product = 1;
  
    for (let a = 0; a < str.length; a++) {
      product *= parseInt(str.charAt(a));

    }
  
    console.log('The Product Of The Number Is: ' + product);
  }

//  16 :
//  Write a js program to enter a number and print its reverse.

function reverseNumber() {

    let i =  prompt("Enter Any Number")

    
    let result = i.toString().split('').reverse().join('');

    console.log(result);
    
}
     


//  26 :
//  Write a js program to check whether a number is Prime number or not.

function checkNumber() {

    let userNumber = prompt("Enter Any Number To Check Weather Is Prime Number Or Not") 

if (userNumber / userNumber === 0 ) {
    console.log(`${userNumber} Is A Prime Number`);
    }

    else{
        console.log(`${userNumber} It Isn't A Prime Number`);

    
    }    
}

//  27 :
//  Write a js program to print all Prime numbers between 1 to n

function SumAllPrimeNumber() {

    let i;
    let sum = 0;

    for (i = 2; i <= 100 ; i++) {
        let isPrime = true;
    
        for (a = 2; a <=Math.sqrt(i); a++){
            if (i % a === 0) {
            isPrime = false;
                
            }
        }
        
        if (isPrime) {
            sum += i;
            
        }
    }
    console.log(sum);
    
}


//  1 , 2 , 3 , 4 , 5 , 6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,26 ,27  = 18 Done 