import { Token, Tokenizable } from "./token";

export class Numeric {
  token?: Token;
  value: number;

  constructor(value: number | string, token?: Token) {
    this.value = parseFloat(`${value}`); // TODO: throw error
    this.token = token;
  }
}