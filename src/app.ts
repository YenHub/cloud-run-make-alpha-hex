import { http } from '@google-cloud/functions-framework';

import { getHandler } from './handlers/getHandler';
import { postHandler } from './handlers/postHandler';

/* `makeAlphaHex` will be exposed as the entry point of the function */
http('makeAlphaHex', (req, res) => {
  /* Switching on req.method means we can handle all request methods on the same http func */
  switch (req.method) {
    case 'GET':
      /* Docs Handler */
      return getHandler(req, res);
    case 'POST':
      /* Hex to Alpha Handler */
      return postHandler(req, res);
    default:
      /* Catch all other methods */
      return res.status(501).send('Not implemented');
  }
});
