import evaluate from '../../utils/evaluate';
import tokenize from '../../utils/tokenize';

describe('Evaluate an expression', () => {
  it('should return undefined if there\'s no expression', () => {
    expect(evaluate('')).toBeUndefined;
  })
  
  describe('Simple expressions', () => {
    it('should return correct value', () => {
      expect(evaluate('3')).toEqual(3);
      expect(evaluate('3.26')).toEqual(3.26);
      expect(evaluate('3+2')).toEqual(5);
      expect(evaluate('6*10')).toEqual(60);
      expect(evaluate('6/2')).toEqual(3);
      expect(evaluate('5/2')).toEqual(2.5);
      expect(evaluate('7-2')).toEqual(5);
    })
  })

  describe('BODMAS', () => {
    it('should return correct value when mixed operators', () => {
      expect(evaluate('3+2*5')).toEqual(13);
      expect(evaluate('3+4*5/2')).toEqual(13);
      expect(evaluate('3+5-2+4*5/2')).toEqual(16);
      expect(evaluate('3*5-4/2')).toEqual(13);
    })
  })

  describe('Decimal point', () => {
    test('with decimal point', () => {
      expect(evaluate('3.2')).toEqual(3.2);
      expect(evaluate('7/3')).toEqual(7/3);
    })
  })
})