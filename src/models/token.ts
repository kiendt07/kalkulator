export class Token {
  value: string;
  position: number;

  constructor(value: string, position: number) {
    this.value = value;
    this.position = position;
  }
}

export class Tokenizable {
  token?: Token;

  constructor(token?: Token) {
    this.token = token;
  }
}
