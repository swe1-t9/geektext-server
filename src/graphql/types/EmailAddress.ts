import { EmailAddress as GraphQLEmailAddress } from '@okgrow/graphql-scalars';
import { asNexusMethod } from 'nexus';

const EmailAddress = asNexusMethod(GraphQLEmailAddress, 'emailAddress');

export { EmailAddress };
