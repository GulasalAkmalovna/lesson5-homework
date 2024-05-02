let listening = +prompt("Enter your listening score");
let reading = +prompt("Enter your reading score");
let writing = +prompt("Enter your writing score");
let speaking = +prompt("Enter your speaking score");
let result = (listening + reading + writing + speaking)/4
if (result >= 5 && result <= 6) {
    document.write(`YOUR OVERAL SCORE:${result}`)
}else{
    document.write(`WOOW YOUR OVERAL SCORE:${result}`)
}
 
