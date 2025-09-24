function Series2(a){
    let result = "";
    let series = "";
    let length = a%2==0?a-1:a;
    for(i=1;i<=length;i++){
        result += 2*i-1 + ","
    }
    for(let i=0;i<result.length-1;i++){
        series += result[i]
    }
    return series
}
console.log(Series2(1))
console.log(Series2(2))
console.log(Series2(3))
console.log(Series2(4))
console.log(Series2(5))
console.log(Series2(6))
console.log(Series2(7))