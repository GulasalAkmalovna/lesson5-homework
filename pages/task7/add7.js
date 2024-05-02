let text = prompt("Enter your text").trim();
let count = 0;
// console.log(text)
for(let i = 0; i < text.length; i++){
   if ( text[i] == " ") {
        continue
       
   }else{
    count++
   }
  
}
document.write(` Kiritilgan gap ${count} harfdan iborat`)