const arr = ["tik", "tok", "toko", "tik"]

function isPalindrome(arr){

    let str = arr.slice(0)
    var pal = str.toString().split("").reverse().join("").split(",");


    for (let i = 0; i < arr.length; i++) {
       for (let k = 0; k < pal.length; k++) {
          if (arr[i] == pal[k]) {
             return false;
          }  
          return true;
        }
    }
}

console.log(isPalindrome(arr))