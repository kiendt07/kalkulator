import { Token } from "./token";

export class Numeric {
  token?: Token;
  value: number;

  constructor(value: number | string, token?: Token) {
    this.value = parseFloat(`${value}`);
    this.token = token;
  }
}