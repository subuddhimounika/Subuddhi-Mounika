function countMultiples(arr) {
    let result = {};

    // loop through numbers 1 to 9
    for (let i = 1; i <= 9; i++) {
        result[i] = 0; // initialize count to 0

        // loop through array and count multiples
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % i === 0) {
                result[i]++;
            }
        }
    }

    return result;
}


let input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input));

/* Output:
{
  1: 11,
  2: 8,
  3: 4,
  4: 4,
  5: 3,
  6: 2,
  7: 0,
  8: 1,
  9: 1
}
*/
