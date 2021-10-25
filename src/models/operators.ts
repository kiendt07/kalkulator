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

  abstract evaluate(...nums: (Numeric | undefined)[]): number;
  abstract validate(...nums: (Numeric | undefined)[]): boolean;
}

export abstract class BinaryOperator extends Operator {
  validate(num1?: Numeric, num2?: Numeric): boolean {
    if (num1 == null || num2 == null) throw new SyntaxError(
      `Missing operand for operator "${this.type}" at position ${this.token.position + 1}`
    );

    return true;
  }
}

export class Plus extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.PLUS, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    this.validate(num1, num2);
    return num1.value + num2.value;
  }
}

export class Minus extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.MINUS, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    this.validate(num1, num2);
    return num2.value - num1.value;
  }
}

export class Multiply extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.MULTIPLY, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    this.validate(num1, num2);
    return num1.value * num2.value;
  }
}

export class Divide extends BinaryOperator {
  constructor(token: Token) {
    super(OPERATOR_TYPE.DIVIDE, token);
  }

  evaluate(num1: Numeric, num2: Numeric): number {
    this.validate(num1, num2);
    if (num1.value === 0) throw new Error('Cannot divide by zero');
    return num2.value / num1.value;
  }
}