import { scalarType } from 'nexus';
import * as jwt from 'jsonwebtoken';
import { Kind } from 'graphql';
import nullthrows from 'nullthrows';

const { JWT_SECRET } = process.env;

const JWT = scalarType({
  name: 'JWT',
  asNexusMethod: 'jwt',
  description: 'JWT token pre-signed by server when sent out',
  parseValue(token: string): { id: ID } {
    const context = jwt.verify(token, nullthrows(JWT_SECRET));
    if (typeof context === 'string') {
      throw new Error('Expected {id: ID}, received string.');
    }
    return { id: (context as { id: ID }).id };
  },
  parseLiteral(ast): Nullable<{ id: ID }> {
    if (ast.kind === Kind.STRING) {
      const context = jwt.verify(ast.value, nullthrows(JWT_SECRET));
      if (typeof context === 'string') {
        throw new Error('Expected {id: ID}, received string.');
      }
      return { id: (context as { id: ID }).id };
    }
    return null;
  },
  serialize(context: { id: ID }): string {
    return jwt.sign(context, nullthrows(JWT_SECRET));
  }
});

export { JWT };
