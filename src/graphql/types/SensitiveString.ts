import { Kind } from 'graphql';
import { scalarType } from 'nexus';
import nullthrows from 'nullthrows';

const { BCRYPT_SALT_ROUNDS } = process.env;

const SensitiveString = scalarType({
  name: 'SensitiveString',
  asNexusMethod: 'sensitiveString',
  description: 'A string whose value is sensitive and should not be exposed.',
  parseValue(sensitiveString: string): string {
    return sensitiveString;
  },
  parseLiteral(ast): string {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    throw new Error(
      `Expected sensitive string to be of type string, received ${ast.kind}.`
    );
  },
  async serialize(sensitiveString: string): Promise<string> {
    return sensitiveString;
  }
});

export { SensitiveString };
