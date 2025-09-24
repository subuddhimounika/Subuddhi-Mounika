class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a); // convert to double
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    if (this.operation === "add") {
      return this.a + this.b;
    } else if (this.operation === "sub") {
      return this.a - this.b;
    } else if (this.operation === "mul") {
      return this.a * this.b;
    } else if (this.operation === "div") {
      if (this.b === 0) {
        return "Error: Division by zero";
      }
      return this.a / this.b;
    } else {
      return "Invalid operation";
    }
  }
}

const calc1 = new Calculator(12.5, 3.5, "add");
console.log("Addition:", calc1.calculate()); // 16

const calc2 = new Calculator(10, 5, "sub");
console.log("Subtraction:", calc2.calculate()); // 5

const calc3 = new Calculator(6, 7, "mul");
console.log("Multiplication:", calc3.calculate()); // 42

const calc4 = new Calculator(20, 4, "div");
console.log("Division:", calc4.calculate()); // 5
