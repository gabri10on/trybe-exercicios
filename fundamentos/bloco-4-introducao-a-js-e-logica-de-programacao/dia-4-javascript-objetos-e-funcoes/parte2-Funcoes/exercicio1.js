//let str = "tenet";
//let re = /[\W_]/g;
//let lowRegStr = str.toLowerCase().replace(re, '');
//let reverseStr = lowRegStr.split('').reverse().join(''); 
//    if (reverseStr == lowRegStr) {
//        console.log("true");
//    } 
//    else {
//        console.log("false");
//    }

let retorno;
function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    if (reverseStr === lowRegStr) {
        retorno = true;
    } 
    else {
        retorno = false;
    }
}
palindrome("tenet tenet")
console.log(retorno)