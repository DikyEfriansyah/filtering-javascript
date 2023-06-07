const arr = [4,2,6,1,3];

function findTarget(arr, num){
    for(let i = 0; i <= arr.length;i++){
        if(arr[i] == num){
            return arr.indexOf(arr[i]);
        }
    }
}

console.log(findTarget(arr, 2))