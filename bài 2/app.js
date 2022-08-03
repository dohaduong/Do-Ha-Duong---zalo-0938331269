function numberOneTriangle(n){
    // console.log(n+1);
    let triangle = "*";
    for (let i = 1; i<n+1; i++){
        console.log(triangle.repeat(i));
    }
}

numberOneTriangle(4);