import { Token, Tokenizable } from "./token";
import { Numeric } from "./operands";

export enum OPERATOR_TYPE {
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '/'
}
export abstract class Operator extends Tokenizable {
  type: OPERATOR_TYPE;

  constructor(type: OPERATOR_TYPE, token: Token) {
    super(token);
    this.type = type;
  }

  abstract evaluate(...nums: any): number;
}

export abstract class BinaryOperator extends Operator {
  abstract evaluate(num1: Numeric, num2: Numeric): number;
}

export class Plus extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.PLUS, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    return num1.value + num2.value;
  }
}

export class Minus extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.MINUS, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    return num2.value - num1.value;
  }
}

export class Multiply extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.MULTIPLY, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    return num1.value * num2.value;
  }
}

export class Divide extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.DIVIDE, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    return num2.value / num1.value;
  }
}