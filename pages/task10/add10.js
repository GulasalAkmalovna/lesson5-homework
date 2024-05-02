let str = "A".charCodeAt();
let str2 = "Z".charCodeAt();
console.log(str, str2)
let alphabet= [];
for(let i = str; i <= str2; i++){
    alphabet. push(String.fromCharCode(i));
}
document.write(alphabet)