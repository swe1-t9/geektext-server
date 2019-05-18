import { makeSchema } from 'nexus';
import * as path from 'path';

import * as queryTypes from './queries';

const schema = makeSchema({
  types: [queryTypes],
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
      DateTime: 'Date'
    }
  }
});

export { schema };
