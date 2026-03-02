console.log(rec(6))
 function rec(n: number): number {
    if(n<3)return 1;
    return rec(n-1)+rec(n-1)+1;
 }  