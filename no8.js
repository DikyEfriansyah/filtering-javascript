const arr = ["tik", "tok", "toko", "tik"]

function isPalindrome(arr){
   for(let i = 1; i <= arr.length/2;i++){
      let isSame = arr[i-1].toLowerCase() === arr[arr.length - i].toLowerCase();
      if(!isSame){
         return false;
      }
   }

   return true;
}

console.log(isPalindrome(arr))