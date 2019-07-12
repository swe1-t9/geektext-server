import { URL as GraphQLURL } from '@okgrow/graphql-scalars';
import { asNexusMethod } from 'nexus';

const URL = asNexusMethod(GraphQLURL, 'url');

export { URL };
