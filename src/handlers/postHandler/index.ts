import { HttpFunction } from '@google-cloud/functions-framework';

import { RequestWithInput } from '../../types/RequestWithInput';
import { makeAlphaHex } from '../../utils/makeAlphaHex';
import { validateInput, ValidationError } from './validateInput';

interface OutputResponse {
  output: string;
}

/**
 * POST Handler: Hex to Alpha Colour Converter
 *
 * @see https://www.func.live/contributing
 */
export const postHandler: HttpFunction = (req: RequestWithInput, res) => {
  const { input } = req.body;

  /* Validate the provided input values */
  const validationError = validateInput(input);
  if (validationError) return res.status(400).send(validationError);

  try {
    const { hexString, opacity } = input;

    /* Calculate the resulting hex colour */
    const transparentHex = makeAlphaHex(hexString, opacity);

    return res
      .status(200)
      .json({ output: transparentHex } satisfies OutputResponse);
  } catch (e) {
    if ((e as Error).name === 'InvalidHexError') {
      return res.status(400).send(ValidationError.HEX_STRING_INVALID);
    }

    return res.status(500).send('Something went wrong');
  }
};
