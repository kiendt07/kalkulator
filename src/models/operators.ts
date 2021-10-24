import { Token } from "./token";
import { Numeric } from "./operands";

export abstract class Operator {
  token: Token;
  abstract evaluate(nums?: Numeric[]): number;

  constructor(token: Token) {
    this.token = token;
  }
}

export class Plus extends Operator {
  evaluate(nums: Numeric[]): number {
    if (nums.length < 2) throw new Error('Plus operator needs at lease 2 nums');
    if (nums.length > 2) throw new Error('Plus only takes 2 nums');

    return nums[0].value + nums[1].value;
  }
}

export class Minus extends Operator {
  evaluate(nums: Numeric[]): number {
    return nums[1].value - nums[0].value;
  }
}

export class Multiply extends Operator {
  evaluate(nums: Numeric[]): number {
    return nums[0].value * nums[1].value;
  }
}

export class Divide extends Operator {
  evaluate(nums: Numeric[]): number {
    return nums[1].value / nums[0].value;
  }
}