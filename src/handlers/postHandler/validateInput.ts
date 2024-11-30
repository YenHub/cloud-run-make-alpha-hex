import { RequestWithInput } from '../../types/RequestWithInput';

export enum ValidationError {
  INPUT_MISSING = 'Please provide an input object',
  OPACITY_MISSING = 'Please provide an `input.opacity` value',
  HEX_VALUE_MISSING = 'Please provide an `input.hexString` value',
  OPACITY_OUT_OF_RANGE = '`input.opacity` must be a positive number',
  HEX_STRING_INVALID = '`input.hexString` must be a valid Hex Colour',
}

type ValidationResult = ValidationError | null;

/**
 * Ensure the payload is the correct shape and type
 *
 * @see https://www.func.live/contributing
 */
export const validateInput = (
  input: RequestWithInput['body']['input'] | null | undefined,
): ValidationResult => {
  if (!input) return ValidationError.INPUT_MISSING;

  if (!('opacity' in input)) return ValidationError.OPACITY_MISSING;

  if (!('hexString' in input)) return ValidationError.HEX_VALUE_MISSING;

  const { opacity } = input;

  if (typeof opacity !== 'number' || opacity < 0 || opacity > 100) {
    return ValidationError.OPACITY_OUT_OF_RANGE;
  }

  return null;
};
