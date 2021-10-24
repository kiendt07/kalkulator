import { Token } from "../models/token";

const ALLOWED_OPERATORS = ['+', '-', '*', '/'];

const isNumber = (c: string): boolean => (c >= '0' && c <= '9') || c === '.';
const isOperator = (c: string): boolean => ALLOWED_OPERATORS.includes(c);

// TODO: handling errors
const tokenize = (s: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;

  while (i < s.length) {
    if (isNumber(s[i])) {
      let j = i;
      while (isNumber(s[j + 1])) j++;
      tokens.push(new Token(s.slice(i, j + 1), i));
      i = j + 1;
    }
    
    if (isOperator(s[i])) {
      tokens.push(new Token(s[i], i));
      i += 1;
    }
  }

  return tokens;
}

export default tokenize;