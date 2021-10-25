import { Token } from "../models/token";
import { OPERATOR_TYPE } from '../models/operators';
import { MAX_TOKEN_LENGTH } from './constants';

export const isNumberChar = (c: string): boolean => (c >= '0' && c <= '9') || c === '.';
export const isOperatorChar = (c: string): boolean => Object.values(OPERATOR_TYPE).includes(c as OPERATOR_TYPE);
export const isNumericToken = (token: Token) => !isNaN(+token.value);
export const isOperatorToken = (token: Token) => Object.values(OPERATOR_TYPE).includes(token.value as OPERATOR_TYPE)

const tokenize = (s: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;

  while (i < s.length) {
    if (isNumberChar(s[i])) {
      let j = i;
      while (isNumberChar(s[j + 1])) j++;
      
      if (j - i + 1 > MAX_TOKEN_LENGTH) throw new Error('Max reached');
      tokens.push(new Token(s.slice(i, j + 1), i));
      i = j + 1;
    }
    
    if (isOperatorChar(s[i])) {
      tokens.push(new Token(s[i], i));
      i += 1;
    }
  }

  return tokens;
}

export default tokenize;