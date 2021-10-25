import { Token, Tokenizable } from "./token";

export class Numeric extends Tokenizable {
  value: number;

  constructor(value: number | string, token?: Token) {
    super(token);
    this.value = parseFloat(`${value}`); // TODO: throw error
  }
}