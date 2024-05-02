let firstname = prompt("Ism kiriting");
let sum = 0;

for(let i = 0; i < firstname.length; i++){
    sum += firstname.charCodeAt(i)
}

console.log(sum)