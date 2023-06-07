const arr = [2,3,4,5,6,7,8,9,1,10];

function minMaxArray(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    console.log('Min : ' + min );
    console.log('Max : ' + max);

}

minMaxArray(arr);