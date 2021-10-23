function hasPrecedence(op1: string, op2: string): boolean {
  if (op2 == '(' || op2 == ')') {
    return false;
  }
  if ((op1 == '*' || op1 == '/') &&
    (op2 == '+' || op2 == '-')) {
    return false;
  }
  else {
    return true;
  }
}

function applyOp(op: string, b: number, a: number): number {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b == 0) {
        document.write("Cannot divide by zero");
      }
      return a / b;
  }
  return 0;
}

const numberLookAhead = (s: string, i: number): number => {
  while (s[i+1] >= '0' && s[i+1] <= '9' || s[i+1] === '.') i++;
  return i;
}

const evaluate = (s: string): number => {
  if (!s) throw 'Cannot evaluate';

  const ops: string[] = [];
  const values: number[] = [];

  let i = 0;
  while (i < s.length) {
    const token = s[i];
    if (token >= '0' && token <= '9' || token === '.') {
      const num = s.slice(i, numberLookAhead(s, i) + 1);
      values.push(parseFloat(num));
      i = numberLookAhead(s, i) + 1;
    }

    if (token === '+' || token === '-' || token === '*' || token === '/') {
      while (ops.length > 0 && hasPrecedence(token, ops[ops.length - 1])) {
        values.push(applyOp(ops.pop()!, values.pop()!, values.pop()!));
      }
      ops.push(token);
      i++;
    }
  }

  while (ops.length > 0) {
    values.push(applyOp(ops.pop()!,
      values.pop()!,
      values.pop()!));
  }

  // Top of 'values' contains
  // result, return it
  return values.pop()!;
}

const tests = [
  { expression: '3+2', result: 5 },
  { expression: '3+2+4', result: 9 },
  { expression: '3+2*3', result: 9 },
  { expression: '30+2*3', result: 36},
  { expression: '3+6/2', result: 6 },
  { expression: '3+6/2*3', result: 12 },
  { expression: '3+6/2*3-1', result: 11 },
  { expression: '0', result: 0 },
  { expression: '3.2+3', result: 6.2 },
  { expression: '3.2*2+3', result: 9.4 },
]
tests.forEach((test, i) => console.log(`${i}. ${test.expression}=${evaluate(test.expression)} ${evaluate(test.expression) === test.result ? '✅' : '❌' + ' (should be ' + test.result + ')'}`));