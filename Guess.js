//variable to store the random number
//random number=0.01 to 0.99
var random=Math.floor(Math.random()*100)+1;
//variable to store number of attempts
var attempts=0;
document.getElementById("btn").addEventListener("click",function(){
    attempts++;
    //variable to store user input
    var guess=parseInt(document.getElementById("guessinput").value);
    if(guess===random){
        display("Congratulations"+attempts);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Too low,Try again")
    }
    else if(guess>random){
        display("Too high,Try again")
    }
});
function display(message){
    document.getElementById('msg').textContent=message;
}