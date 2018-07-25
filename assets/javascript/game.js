
var wins = 0, losses = 0, guessesLeft = 10;
// var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
var options = ['a', 'b', 'c'];

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

function win() {
    wins++;
    document.querySelector("#id_wins").innerHTML = wins;
}
function loss() {
    losses--;
    document.querySelector("#id_losses").innerHTML = losses;
}
 // decrement 'Guesses left' counts down from 10 to 1
    function decrementCounter(){
        guessesLeft = guessesLeft - 1;
        document.querySelector('#id_guesses_left').innerHTML = guessesLeft;
            if (guessesLeft == 1){
                guessesLeft = 11;
                document.querySelector("#id_losses").innerHTML = losses;                    
            }
        }

function start(event) {
    
    var keyUserPressed = event.key;

    var computerPickIndex = Math.floor(Math.random()*options.length);
    var computerOption = options[computerPickIndex];
    
    document.querySelector("#guesses").innerText = keyUserPressed;
	document.querySelector("#computerChoice").innerText = computerOption;
    decrementCounter();
		if (keyUserPressed == computerOption){

			win();
			
		} else if (keyUserPressed != computerOption) {
            loss();
        }

}
document.onkeyup = start;


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
   
    