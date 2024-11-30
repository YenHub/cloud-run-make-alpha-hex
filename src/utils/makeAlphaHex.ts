import { HexString } from '../types/HexString';
import { IntRange } from '../types/IntRange';

export class InvalidHexError extends TypeError {
  override readonly name = 'InvalidHexError';
}

/**
 * HelperUtil: Convert a Hex colour into an Alpha (transparent) Hex Colour
 *
 * NOTE: 0 is fully transparent, 100 is fully opaque
 *
 * **USAGE:**
 * ```ts
 * const alphaHex = makeAlphaHex('#a50', 50)
 * // #a508
 * ```
 *
 * @see https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
 */
export const makeAlphaHex = (
  hexString: HexString,
  opacity: IntRange<0, 100>,
): string => {
  /*
   * Valid shorthand: #000
   * Valid longhand: #000000
   */
  if (hexString.length !== 4 && hexString.length !== 7) {
    throw new InvalidHexError('Please provide a valid hex string');
  }

  /* NOTE: To avoid floating point fun, we divide then multiply the result */
  const alphaValue = Math.round((255 * opacity) / 100)
    .toString(16)
    .padStart(2, '0');

  /* Handle short-hand hex colour */
  if (hexString.length === 4) return `${hexString}${alphaValue[0]}`;

  return `${hexString}${alphaValue}`;
};
