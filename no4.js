var arr = [3,2,3,7,1]

function addSum(arr, num){

    let sum = [];

    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
          if(j!==i && arr[i]+arr[j]===num){
              sum.push(i,j);
              return sum;
          }
      }
    }
  return sum;
}

console.log(addSum(arr, 6))