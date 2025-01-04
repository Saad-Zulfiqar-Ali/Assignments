//   1:
 //Light Bulb Experiment 

 function lightExperiment() {
    
 
 var userInputLight = prompt ("Enter 1 To Turn On The Light Or Enter 0 To Turn Off The Light")

 if ( userInputLight === '1'){

     console.log("The Light Is On");
    
 }
 else if (userInputLight === '0' ){
     console.log("The Light Is Off");
    
 }
 else {
     console.log("Invalid Value");
    
 }
 }
//   2:

 //Traffic Light Simulator

 function trafficLight() {
    
 
 var userInputTraffic = prompt ("Input Color Red For 'stop' Yellow For 'Slow Down' And Green For 'Go' ")

 if ( userInputTraffic === 'Red' || userInputTraffic === 'red' ){

     console.log('Stop');   
 }
 else if ( userInputTraffic === 'Yellow' || userInputTraffic === 'yellow' ){
     console.log("Slow Down");
    
 }
 else if (userInputTraffic === 'Green' || userInputTraffic === 'green'){
     console.log('Go');
    
 }
 else {
     console.log("Invalid Value ");
    
 }
}
//  3   : Water Temperature Checker

function waterTemperature() {
    

var userInputWater = prompt ("Enter Water Temperature In Celsius.")

if( userInputWater <= 0  ){
    console.log("The Water Is Freezing");
    
}
else if ( userInputWater <= 0 || userInputWater <= 15){
    console.log("The Water Is Cold" );

}
else if ( userInputWater >= 15 || userInputWater <= 30){
console.log("The Water Is Warm");
}
else if (userInputWater => 30){
    console.log("The Water Is Hot");
    
}
else {
    console.log("Invalid Value");
    
}
}
//  4 :
//    Rock-Paper-Scissors Game

function rockPaperScissorsGame() {
    


var userInput1 = prompt ("Enter Any One 'Rock, Paper, or Scissors'")
var userInput2 = prompt ("Enter Any One 'Rock, Paper, or Scissors'")

// Paper && Rock
if ((userInput1 === "Paper" || userInput1 === "paper") && (userInput2 === "Rock" || userInput2 === "rock")) 
    { console.log("Player 1 Is Winner");
}

//Rock && Paper
else if ((userInput1 === "Rock" || userInput1 === "rock") && (userInput2 === "Paper" || userInput2 === "paper")) 
    { console.log("Player 1 Is Winner");
}

// Scissors && Rock
else if ((userInput1 ==="Scissors" || userInput1 === "scissors") && (userInput2 === "Rock" || userInput2 === "rock")){
    console.log("Player 1 Is Winner");
    
}
// Scissors && Paper
else if ((userInput1 ==="Scissors" || userInput1 === "scissors") && (userInput2 === "Paper" || userInput2 === "paper")){
    console.log("Player 1 Is Winner");
    
}

// Rock && Scissors
else if ((userInput1 ==="rock" || userInput1 === "Rock") && (userInput2 === "scissors" || userInput2 === "Scissors")){
    console.log("Player 1 Is Winner");

}

// Scissors && Rock
else if ((userInput1 ==="scissors" || userInput1 === "Scissors") && (userInput2 === "Rock" || userInput2 === "rock")){
    console.log("Player 2 Is Winner");
    
}

// Paper && Scissors
else if ((userInput1 ==="Paper" || userInput1 === "Paper") && (userInput2 === "Scissors" || userInput2 === "scissors")){
    console.log("Player 2 Is Winner");
    
}

//  Scissors && Rock
else if ((userInput1 ==="Scissors" || userInput1 === "scissors") && (userInput2 === "Rock" || userInput2 === "rock")){
    console.log("Player 2 Is Winner");
    
}

//  Rock === Rock
else if (( userInput1 === "Rock" || userInput1 === "rock") && (userInput2 === "Rock" || userInput2 === "rock")){
    console.log("It's a Tie!");
}

//   Scissors === Scissors
else if (( userInput1 === "Scissors" || userInput1 === "rock") && (userInput2 === "Scissors" || userInput2 === "scissors")){
    console.log("It's a Tie!");
}

// Paper === Paper 
else if (( userInput1 === "Paper" || userInput1 === "paper") && (userInput2 === "Paper" || userInput2 === "paper")){
    console.log("It's a Tie!");
}

else {console.log("Invalid Value");
}
}

// 5 : 
//  Simulate an alarm trigger based on conditions

function alarmTrigger() {
    
var inputUserAlarm = prompt ("Is The Door Open Answer In 'Yes Or NO' " )
var inputUserAlarm1 = prompt ("Is The Motion Detected Answer In 'Yes or No' ")


// Both Condition Are true Then
if ((inputUserAlarm === "Yes" || inputUserAlarm === "yes") && (inputUserAlarm1 === "Yes" || inputUserAlarm1 === "yes")){
    console.log("Alarm Triggered");
}

// one Condition is True Then 
else if ((inputUserAlarm === "Yes" || inputUserAlarm === "yes") && (inputUserAlarm1 === "No" || inputUserAlarm1 === "no")){
    console.log("Alarm Triggered");
}

// one Condition is True Then 
else if ((inputUserAlarm === "NO"|| inputUserAlarm === "no")&& (inputUserAlarm1 === "Yes" || inputUserAlarm1 === "yes" )){
    console.log("Alarm Triggered");    
}
// If Both Condition Are False Then 
    else if ((inputUserAlarm === "No" || inputUserAlarm === "no" ) && (inputUserAlarm1 === "No" || inputUserAlarm1 === "no" )){
        console.log("All Safe");
        
    }
    else {
        console.log( "Invalid Value");
        
    }
}
    // 6 : Simple Temperature Conversion

    function TemperatureConversion() {
        
    
var userConversionType = prompt("type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.")

if( userConversionType === '1'){
var celsius = parseInt (prompt("Enter the temperature in Celsius:"))

}
    }




    // 7 : Password Strength Checker

    function passwordStrength() {
        
var userPasswordInput = prompt ("Enter Your Password")

if (userPasswordInput.length >= 8 ){
    console.log("Strong Password");
    
}
else if (( userPasswordInput.length >= 5) && (userPasswordInput.length <= 7)){
    console.log("Moderate Password");
    
}
else{
    console.log("Weak Password");
    
}
}
// 8: Coin Toss Simulator

function coinToss(){

    var userCoinNumber = prompt ('input 1 for "Heads" or 0 for "Tails.')
    
    userCoinNumber = parseInt(userCoinNumber);

    if (userCoinNumber !== 0 && userCoinNumber !== 1){
        console.log('Invalid Value');

    }

    var coinToss = Math.floor(Math.random() * 2);

    if ( userCoinNumber === coinToss){
        console.log("You Win");
        
    }
    else {
        console.log("You Lost");
        
    }
}

coinToss();

// 9. Weather Suggestion Experiment
function weatherSuggestion() {
    

var inputWeather = prompt ("Enter Weather")

if (inputWeather === "Sunny" || inputWeather === "sunny"){
    console.log("Wear sunglasses");
    
}
else if (inputWeather === "Rainy " || inputWeather === "rainy"){
    console.log("Take an umbrella");
    
}
else if (inputWeather === "Cold" || inputWeather === "cold" ){
    console.log("Wear a jacket" );

}
else {
    console.log("Invalid Weather");
    
}

}
// 11 : Eligibility for Voting

function eligibilityForVoting() {
    

var inputUserAge = prompt("Enter Your Age")

if (inputUserAge >= "18" ){
    console.log(" You Eligible to vote");
    
}
else {
    console.log(" You Are Not Eligible to Vote");
    
}
}

// 12 : Maximum of Two Numbers

  function largeNumber(){  
    var userNumberInput = parseFloat (prompt ("Enter Any Number"));
    var userNumberInput1 = parseFloat (prompt ("Enter Any Number"));

if (userNumberInput > userNumberInput1){
    console.log(userNumberInput);
}
    else if ( userNumberInput < userNumberInput1){
        console.log(userNumberInput1);
        
    }
    else {console.log("The Number Are Equal");
    }
}

  