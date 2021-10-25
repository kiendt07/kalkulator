import tokenize from '../../utils/tokenize';

describe('Tokenize function', () => {
  it('should return no token', () => {
    expect(tokenize('').length).toEqual(0);
  });

  describe('Only one token', () => {
    it('should return only one Numeric token', () => {
      const input = '1';
      expect(Array.isArray(tokenize(input))).toBeTruthy();
      expect(tokenize(input).length).toEqual(1);
    });

    it('should return only one Operator token', () => {
      const input = '-';
      expect(Array.isArray(tokenize(input))).toBeTruthy();
      expect(tokenize(input).length).toEqual(1);
    });
  });

  describe('Multiple token with one character/digit', () => {
    it('should return correct tokens', () => {
      const input = '2+3';

      expect(Array.isArray(tokenize(input))).toBeTruthy();
      expect(tokenize(input).length).toEqual(3);
      expect(tokenize(input)[0].value).toEqual('2');
      expect(tokenize(input)[1].value).toEqual('+');
      expect(tokenize(input)[2].value).toEqual('3');
    });

    it('should return correct tokens with all the operators', () => {
      const input = '3+4*5-8/2';

      expect(tokenize(input).length).toEqual(9);
      expect(tokenize(input)[0].value).toEqual('3');
      expect(tokenize(input)[3].value).toEqual('*');
      expect(tokenize(input)[4].value).toEqual('5');
      expect(tokenize(input)[5].value).toEqual('-');
      expect(tokenize(input)[6].value).toEqual('8');
      expect(tokenize(input)[7].value).toEqual('/');
      expect(tokenize(input)[8].value).toEqual('2');
    });
  });

  describe('Decimal point', () => {
    it('should return correct tokens', () => {
      const input = '10+225.2*3';

      expect(tokenize(input).length).toEqual(5);
      expect(tokenize(input)[1].value).toEqual('+');
      expect(tokenize(input)[2].value).toEqual('225.2');
      expect(tokenize(input)[3].value).toEqual('*');
    })
  })

  describe('Consecutive operators', () => {
    it('should return multiple operator tokens', () => {
      const input = '2++3';

      expect(tokenize(input).length).toEqual(4);
      expect(tokenize(input)[1].value).toEqual('+');
      expect(tokenize(input)[2].value).toEqual('+');
    })
  })

  describe('Number is too big', () => {
    it('should return error', () => {
      const input = '10000000000000000+2*3';
      expect(() => tokenize(input)).toThrow();
    })
  })
})