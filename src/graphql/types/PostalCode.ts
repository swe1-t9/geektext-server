import { PostalCode as GraphQLPostalCode } from '@okgrow/graphql-scalars';
import { asNexusMethod } from 'nexus';

const PostalCode = asNexusMethod(GraphQLPostalCode, 'postalCode');

export { PostalCode };
