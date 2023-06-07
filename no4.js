var arr = [3,2,3,7,1]

function addSum(arr, num){

    let sum = [];

  for(let i in arr){
    for(let j in arr){
        if(arr[i]+arr[j] === num){
            sum.push([arr[i], arr[j]])
        }
    }
  }
  return sum;
}

console.log(addSum(arr, 6))