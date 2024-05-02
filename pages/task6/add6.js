let text = prompt("Enter your text").trim();
let count = 1
// console.log(text)
for(let i = 0; i < text.length; i++){
   if ( text[i] == " ") {
        count++
       
   }
  
}
document.write(` Kiritilgan gap ${count} so'zdan iborat`)