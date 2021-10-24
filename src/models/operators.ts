import { Token } from "./token";
import { Numeric } from "./operands";
export abstract class Operator {
  token: Token;
  abstract evaluate(...nums: any): number;

  constructor(token: Token) {
    this.token = token;
  }
}

export abstract class BinaryOperator extends Operator {
  abstract evaluate(num1: Numeric, num2: Numeric): number;
}

export class Plus extends BinaryOperator {
  evaluate(num1: Numeric, num2: Numeric): number {
    return num1.value + num2.value;
  }
}

export class Minus extends BinaryOperator {
  evaluate(num1: Numeric, num2: Numeric): number {
    return num2.value - num1.value;
  }
}

export class Multiply extends BinaryOperator {
  evaluate(num1: Numeric, num2: Numeric): number {
    return num1.value * num2.value;
  }
}

export class Divide extends BinaryOperator {
  evaluate(num1: Numeric, num2: Numeric): number {
    return num2.value / num1.value;
  }
}