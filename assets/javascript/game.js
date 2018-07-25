
var wins = 0, losses = 0, guessesLeft = 10;
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];


document.querySelector("#id_wins").innerHTML = wins;
document.querySelector("#id_losses").innerHTML = losses;
document.querySelector("#id_guesses_left").innerHTML = guessesLeft;

console.log("hello");

// The user guesses the letter by pressing a key and the letter is saved in an array 
// named 'guesses' and these are printed to the screen. 
    var guesses = [];

    function alertKey(y) {
    guesses.push(y.key);
    // confirm(y.key);
    // next line of code will print to the screen the letters that the User has typed
    document.querySelector("#guesses").innerText = guesses;
}
document.onkeyup = alertKey;


// function startGame(play){
// var randomIndex = options[Math.floor(Math.random()*options.length)];
// var computerOption = options[randomIndex];
// var userPress = play.key;

// if (userPress == computerOption){
//         // increment 'wins'
//         wins++;
//         // print to screen results
//         document.querySelector("#id_wins").innerHTML = wins;

//     } else if (userPress != computerOption) {
//         // decrement 'Guesses left' counts down from 10 to 1
//         function decrementCounter(){
//             guessesLeft = guessesLeft - 1;
//             document.querySelector('#id_guesses_left').innerHTML = guessesLeft;
//                 if (guessesLeft == 0){
//                     guessesLeft = 10;
//                     losses++;
//                     // print to screen and update losses
//                     document.querySelector("#id_losses").innerHTML = losses;
//             }
//         }
//     }
// }  
   
    // document.onkeydown = decrementCounter;
    // document.onkeyup = startGame;
