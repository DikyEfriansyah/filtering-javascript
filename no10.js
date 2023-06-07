var arr = [3, 5, 2]

function sorted(arr, num){
    arr.push(num);
    arr.sort(function(a,b){return a - b});

    return arr;
}

console.log(sorted(arr, 7))