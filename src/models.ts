export class Token {
  value: string;
  position: number;

  constructor(value: string, position: number) {
    this.value = value;
    this.position = position;
  }
}

export interface Evaluatable {
  evaluate(operands?: Operand[]): number;
}

export class Operator extends Token {
}

export class Operand{
  value: number;
  token: Token;

  constructor(token: Token) {
    this.token = token;
    this.value = parseFloat(token.value);
  }
}

export class Plus extends Operator implements Evaluatable {
  evaluate(operands: Operand[]): number {
    if (operands.length < 2) throw new Error('Plus operator needs at lease 2 operands');
    if (operands.length > 2) throw new Error('Plus only takes 2 operands');
    
    return operands[0].value + operands[1].value;
  }
}

export class Minus extends Operator implements Evaluatable {
  evaluate(operands: Operand[]): number {
    return operands[1].value - operands[0].value;
  }
}

export class Multiply extends Operator implements Evaluatable {
  evaluate(operands: Operand[]): number {
    return operands[0].value * operands[1].value;
  }
}

export class Divide extends Operator implements Evaluatable {
  evaluate(operands: Operand[]): number {
    return operands[1].value / operands[0].value;
  }
}