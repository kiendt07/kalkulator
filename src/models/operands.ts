import { Token, Tokenizable } from "./token";

export class Numeric extends Tokenizable {
  value: number;

  constructor(token: Token) {
    super(token);
    this.value = parseFloat(token.value); // TODO: throw error
  }
}