import { makeSchema } from 'nexus';
import * as path from 'path';

import { types } from '../../src/graphql/schema';

console.log('Generating GraphQL artifacts...');

makeSchema({
  types,
  shouldGenerateArtifacts: true,
  outputs: {
    schema: path.join(
      __dirname,
      '../../src/graphql/__generated__/schema.graphql'
    ),
    typegen: path.join(
      __dirname,
      '../../src/graphql/__generated__/schema.graphql.d.ts'
    )
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
