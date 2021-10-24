import { Token, Tokenizable } from '../models/token';
import { Plus, Minus, Multiply, Divide, Operator } from "../models/operators";
import { Numeric } from "../models/operands";

function hasPrecedence(op1: string, op2: string): boolean {
  if (op2 === '(' || op2 === ')') {
    return false;
  }
  if ((op1 === '*' || op1 === '/')
    && (op2 === '+' || op2 === '-')) {
    return false;
  }
  return true;
}

const isNumeric = (num: any) => (typeof (num) === 'number' || typeof (num) === "string" && num.trim() !== '') && !isNaN(num as number);

const parse = (token: Token): Tokenizable => {
  if (isNumeric(token.value)) return new Numeric(token);
  if (token.value === '+') return new Plus(token);
  if (token.value === '-') return new Minus(token);
  if (token.value === '*') return new Multiply(token);
  if (token.value === '/') return new Divide(token);

  throw new Error('Cannot parse'); // TODO:
}

const evaluate = (tokens: Token[]): number => {
  const ops: Operator[] = [];
  const values: Numeric[] = [];

  tokens.forEach(token => {
    const parsed: Tokenizable = parse(token)!;

    if (parsed instanceof Numeric) values.push(parsed);
    if (parsed instanceof Operator) {
      while (ops.length > 0 && hasPrecedence(parsed.token.value, ops[ops.length - 1].token.value)) {
        const evaluated: number = ops.pop()!.evaluate(values.pop()!, values.pop()!);
        values.push(new Numeric(new Token(evaluated.toString(), 0))); // TODO: use derived
      }
      ops.push(parsed);
    }
  });

  while (ops.length > 0) {
    const evaluated: number = ops.pop()!.evaluate(values.pop()!, values.pop()!);
    values.push(new Numeric(new Token(evaluated.toString(), 0))); // TODO: use derived
  }

  return values.pop()!.value;
}

export default evaluate;