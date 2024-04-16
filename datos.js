let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for(let row of matrix){
    console.log(row)
    for(let col of row){
        console.log(col)
    }
}

const [a, b, c] = matrix[0];
if(a == b && b == c){
    console.log("los tres son iguales")
}