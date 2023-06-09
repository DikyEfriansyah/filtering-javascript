const arr=[-1,0,1,2,-1,4];

function sumZero(arr){
    let result=[];
    
    if(arr.length<3){
        return result;
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            for(let k=0;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]===0 && i!==j && j!==k && k!=i && ![arr[i],arr[j],arr[k]].includes(0)){
                    result.push(arr[i],arr[j],arr[k]);
                    result.sort((a,b) => b-a);
                    return result;
                }
            }
        }
    }
    return result;
}

console.log(sumZero(arr));