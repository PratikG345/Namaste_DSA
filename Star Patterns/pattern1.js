let n=5
for(let i=0;i<n;i++){
    row = " ";
    for(let j=0;j<n;j++){
        if((i==0 || i ==n) || (j==1 || j==n)){
            row+="x ";
        }

    }
    console.log(row)
}