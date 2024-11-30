import { HexString } from '../../types/HexString';
import { InvalidHexError, makeAlphaHex } from '../makeAlphaHex';
import { longHandTestCases } from './fixtures/longHandTestCases';
import { shortHandTestCases } from './fixtures/shortHandTestCases';

describe('makeAlphaHex', () => {
  /**
   * NOTE: We don't need to test the opacity range since this is covered
   * using our TypeScript `IntRange` utility.
   */
  describe('given an invalid hex string', () => {
    it('throws an appropriate error', () => {
      /** 1-2 characters */
      expect(() => makeAlphaHex('#0', 50)).toThrow(InvalidHexError);
      expect(() => makeAlphaHex('#00', 50)).toThrow(InvalidHexError);
      /** 4-5 characters */
      expect(() => makeAlphaHex('#0000', 50)).toThrow(InvalidHexError);
      expect(() => makeAlphaHex('#00000', 50)).toThrow(InvalidHexError);
      /** 7 characters */
      expect(() => makeAlphaHex('#0000000', 50)).toThrow(InvalidHexError);
    });
  });

  describe('given a shorthand hex colour string', () => {
    const hexString: HexString = '#000';

    describe.each(shortHandTestCases)(
      'when the opacity value is %p',
      (opacity, result) => {
        it(`returns ${result}`, () => {
          const transparentHex = makeAlphaHex(hexString, opacity);

          expect(transparentHex).toEqual(`${hexString}${result}`);
        });
      },
    );
  });

  describe('given a full hex colour string', () => {
    const hexString: HexString = '#000000';

    describe.each(longHandTestCases)(
      'when the opacity value is %p',
      (opacity, result) => {
        it(`returns ${result}`, () => {
          const transparentHex = makeAlphaHex(hexString, opacity);

          expect(transparentHex).toEqual(`${hexString}${result}`);
        });
      },
    );
  });
});
