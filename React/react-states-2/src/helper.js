function random(n)
{
    let arr=new Array(n);
   
    for(let i=0;i<n;i++)
    {
        arr[i]=Math.floor(Math.random()*10);

    }
    return arr;
}

function arrSum(arr)
{
    let sum=0;
    arr.map((ele)=>sum+=ele);
    return sum;
}

export {random}
export {arrSum}