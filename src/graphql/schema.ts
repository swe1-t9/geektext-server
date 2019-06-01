import { makeSchema } from 'nexus';
import * as path from 'path';

import * as queryTypes from './queries';
import * as objectTypes from './types';

const schema = makeSchema({
  types: [queryTypes, objectTypes],
  outputs: {
    schema: path.join(__dirname, '__generated__/schema.graphql'),
    typegen: path.join(__dirname, '__generated__/schema.graphql.d.ts')
  },
  typegenAutoConfig: {
    sources: [],
    backingTypeMap: {
      URL: 'string',
      JWT: '{ id: ID }',
      EmailAddress: 'string',
      DateTime: 'Date',
      PostalCode: 'string',
      SensitiveString: 'string'
    }
  }
});

export { schema };
