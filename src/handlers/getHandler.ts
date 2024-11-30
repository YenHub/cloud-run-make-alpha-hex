import { HttpFunction } from '@google-cloud/functions-framework';

/**
 * GET Handler: Returns the func.live docs payload
 *
 * @see https://www.func.live/contributing
 */
export const getHandler: HttpFunction = (_req, res) => {
  return res.status(200).json({
    name: 'makeAlphaHex',
    description:
      'Transform a standard Hex Colour Code into an Alpha Hex Colour Code, enabling transparency adjustments',
    input: {
      type: 'object',
      description:
        'An object containing a `hexString` representing the colour, and an `opacity` value to set the opacity level',
      example: { hexString: '#42cef6', opacity: 50 },
    },
    output: {
      type: 'string',
      description:
        'The enhanced Alpha Hex Colour Code, incorporating the specified opacity into the original colour',
      example: '#42cef680',
    },
  });
};
