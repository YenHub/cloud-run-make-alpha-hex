import { Request } from '@google-cloud/functions-framework';

import { HexString } from './HexString';
import { IntRange } from './IntRange';

/** This is the request shape as [outlined here](https://www.func.live/contributing) */
export interface RequestWithInput extends Request {
  body: { input: { hexString: HexString; opacity: IntRange<0, 100> } };
}
