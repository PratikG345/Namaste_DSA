let n=6;
for(let i=0;i<n;i++){
    let row=" ";
    let switchs = 1; 
    for(let j=0;j<i+1;j++){
        row=row+switchs
        if(switchs == 0){
            switchs = 1
        }
        else{
            switchs = 0
        }
    }
    console.log(row)
}
/*

 1
 10
 101
 1010
 10101
 101010
 
*/