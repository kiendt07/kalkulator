import { Token, Tokenizable } from '../models/token';
import { Plus, Minus, Multiply, Divide, Operator, OPERATOR_TYPE } from "../models/operators";
import { Numeric } from "../models/operands";
import tokenize, { isNumericToken, isOperatorToken } from './tokenize';

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

const parse = (token: Token): Numeric | Operator => {
  if (isNumericToken(token)) return new Numeric(token.value, token);
  if (isOperatorToken(token)) {
    if (token.value === '+') return new Plus(token);
    if (token.value === '-') return new Minus(token);
    if (token.value === '*') return new Multiply(token);
    if (token.value === '/') return new Divide(token);
  }

  throw new SyntaxError(`Unexpected token ${token.value} at position ${token.position}`);
}

const evaluate = (s: string): number => {
  const tokens = tokenize(s);
  const ops: Operator[] = [];
  const values: Numeric[] = [];

  tokens.forEach(token => {
    const parsed: Numeric | Operator = parse(token);

    if (parsed instanceof Numeric) values.push(parsed);
    if (parsed instanceof Operator) {
      while (ops.length > 0 && hasPrecedence(parsed.type, ops[ops.length - 1].type)) {
        const newOperand: number = ops.pop()!.evaluate(values.pop(), values.pop());
        values.push(new Numeric(newOperand));
      }
      ops.push(parsed);
    }
  });

  while (ops.length > 0) {
    const newOperand: number = ops.pop()!.evaluate(values.pop(), values.pop());
    values.push(new Numeric(newOperand));
  }

  return values.pop()!?.value;
}

export default evaluate;