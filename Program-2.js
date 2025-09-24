function Series(a){
    let result = ""
    let series = ""
    for(i=1;i<=a;i++){
        result += 2*i-1 + ","
    }
    for(i=0;i<result.length-1;i++){
        series+=result[i]
    }
    return series
}
console.log(Series(1)) // 1
console.log(Series(2)) // 1,3
console.log(Series(3)) // 1,3,5
console.log(Series(4)) // 1,3,5,7
console.log(Series(5)) // 1,3,5,7,9