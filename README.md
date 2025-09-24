# Subuddhi-Mounika
Programming Test - TANDEMLOOP (Full Stack Developer)

This repository contains solutions to the **First Screening Test** for TANDEMLOOP.  
All problems are solved using **JavaScript**.

# Problem-1: Calculator using Class

This program implements a simple calculator using a **JavaScript class**.  
It can perform **Addition, Subtraction, Multiplication, and Division** based on the operation provided.

---

- `a` → double (first number)  
- `b` → double (second number)  
- `operation` → string (`"add"`, `"sub"`, `"mul"`, `"div"`)

---

Example Usage:
const calc1 = new Calculator(12.5, 3.5, "add");

console.log("Addition:", calc1.calculate()); // Output: 16

const calc2 = new Calculator(10, 5, "sub");

console.log("Subtraction:", calc2.calculate()); // Output: 5

const calc3 = new Calculator(6, 7, "mul");
console.log("Multiplication:", calc3.calculate()); // Output: 42

const calc4 = new Calculator(20, 4, "div");
console.log("Division:", calc4.calculate()); // Output: 5

# Problem-2.js – Odd Series up to a

Generates a series of odd numbers from 1 up to a terms.
Example usage:
console.log(Series(1)) // 1
console.log(Series(2)) // 1,3
console.log(Series(3)) // 1,3,5
console.log(Series(4)) // 1,3,5,7
console.log(Series(5)) // 1,3,5,7,9

# Problem-3.js – Odd Series with Pattern

Generates a series of odd numbers depending on whether a is odd or even:
If a is odd → series length = a
If a is even → series length = a-1
Example usage:
console.log(Series2(1)) // 1
console.log(Series2(2)) // 1
console.log(Series2(3)) // 1,3,5
console.log(Series2(4)) // 1,3,5
console.log(Series2(5)) // 1,3,5,7,9
console.log(Series2(6)) // 1,3,5,7,9
console.log(Series2(7)) // 1,3,5,7,9,11,13

# Problem-4.js – Count Multiples

Counts the total numbers in a given array that are multiples of 1 to 9.
Input: array of integers
Output: object/dictionary with counts
Example usage:
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

