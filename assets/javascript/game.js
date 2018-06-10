
var wins = 0, losses = 0, guessesLeft = 10;
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function startGame(play){
    
    // User guesses the letter by pressing a key and the letter is saved in array 
    // and prints to screen. 
    var guesses = [];

    function alertKey(letter){
    guesses.push(letter.key);
    confirm(letter.key);
    // next code line prints to screen the letters that the User has picked so far.
    document.querySelector("#demo").innerHTML = guesses;
}

var randomIndex = options[Math.floor(Math.random()*options.length)];
var computerOption = options[randomIndex];
var userPress = play.key;

if (userPress == computerOption){
        // increment 'wins'
        wins++;
        // print to screen results
        document.querySelector("#id_wins").innerHTML = wins;

    } else if (userPress != computerOption) {
        // decrement 'Guesses left' counts down from 10 to 1
        function decrementCounter(){
            guessesLeft = guessesLeft - 1;
            document.querySelector('#id_left').innerHTML = guessesLeft;
                if (guessesLeft == 0){
                    guessesLeft = 10;
                    losses++;
                    // print to screen and update losses
                    document.querySelector("#id_losses").innerHTML = losses;
            }
        }
    }
}  
      
       // document.querySelector('#id_left').innerHTML = left;

        // function decrementCounter(){
        //     left = left - 1;
        //     document.querySelector('#id_left').innerHTML = left;
    
        //     if (left == 0){
        //         left = 10;
        //         document.querySelector('#id_left').innerHTML = left;
        //     }
        // }
   
    document.onkeydown = decrementCounter;
    document.onkeyup = alertKey;
    document.onkeyup = gameStart;
