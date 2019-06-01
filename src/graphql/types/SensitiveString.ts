import { hash } from 'bcrypt';
import { Kind } from 'graphql';
import { scalarType } from 'nexus';
import nullthrows from 'nullthrows';

const { BCRYPT_SALT_ROUNDS: bcryptSaltRounds } = process.env;
const BCRYPT_SALT_ROUNDS = parseInt(nullthrows(bcryptSaltRounds));

const SensitiveString = scalarType({
  name: 'SensitiveString',
  asNexusMethod: 'sensitiveString',
  description: 'A string whose value is sensitive and should not be exposed.',
  async parseValue(sensitiveString: string): Promise<string> {
    return await hash(sensitiveString, BCRYPT_SALT_ROUNDS);
  },
  async parseLiteral(ast): Promise<string> {
    if (ast.kind === Kind.STRING) {
      return await hash(ast.value, BCRYPT_SALT_ROUNDS);
    }
    throw new Error(
      `Expected sensitive string to be of type string, received ${ast.kind}.`
    );
  },
  async serialize(sensitiveString: string): Promise<string> {
    return await hash(sensitiveString, BCRYPT_SALT_ROUNDS);
  }
});

export { SensitiveString };
