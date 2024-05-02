let random = parseInt(Math.random() * 10);
let num =  +prompt("Enter a number");
if ( random == num) {
    document.write("WINNER")
}else{
    document.write("DEFEATED")
}