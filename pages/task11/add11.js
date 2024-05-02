let str = "A".charCodeAt();
let str2 = "Z".charCodeAt();
let sum = 0;
// console.log(str, str2)
for(let i = str; i <= str2; i++){
  if ( i % 2 == 1) {
    sum += i
  }
}
document.write(sum)