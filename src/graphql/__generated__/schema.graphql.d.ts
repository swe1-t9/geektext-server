/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */


import { core } from "nexus"
declare global {
  interface NexusGenCustomDefinitionMethods<TypeName extends string> {
    emailAddress<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "EmailAddress";
    jwt<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JWT";
    postalCode<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "PostalCode";
    sensitiveString<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "SensitiveString";
    url<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "URL";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BookDetailsInput: { // input type
    id: string; // ID!
  }
  EditUserInput: { // input type
    email: string; // EmailAddress!
    first_name: string; // String!
    last_name: string; // String!
  }
  LogInInput: { // input type
    email: string; // EmailAddress!
    password: string; // SensitiveString!
  }
  SignUpInput: { // input type
    email: string; // EmailAddress!
    first_name: string; // String!
    last_name: string; // String!
    password: string; // SensitiveString!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Address: { // root type
    address_line_1: string; // String!
    address_line_2?: string | null; // String
    address_line_3?: string | null; // String
    city: string; // String!
    id: string; // ID!
    postal_code: string; // PostalCode!
    region?: string | null; // String
  }
  Book: { // root type
    author_id: string; // ID!
    cover: string; // URL!
    description: string; // String!
    genre: string; // String!
    id: string; // ID!
    isbn: string; // String!
    price: number; // Float!
    publish_year: number; // Int!
    title: string; // String!
  }
  Mutation: {};
  Query: {};
  ShippingInformation: { // root type
    selected_shipping_address_id?: string | null; // ID
    shipping_addresses: NexusGenRootTypes['Address'][]; // [Address!]!
  }
  User: { // root type
    email: string; // EmailAddress!
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  EmailAddress: string;
  JWT: { id: ID };
  PostalCode: string;
  SensitiveString: string;
  URL: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BookDetailsInput: NexusGenInputs['BookDetailsInput'];
  EditUserInput: NexusGenInputs['EditUserInput'];
  LogInInput: NexusGenInputs['LogInInput'];
  SignUpInput: NexusGenInputs['SignUpInput'];
}

export interface NexusGenFieldTypes {
  Address: { // field return type
    address_line_1: string; // String!
    address_line_2: string | null; // String
    address_line_3: string | null; // String
    city: string; // String!
    id: string; // ID!
    postal_code: string; // PostalCode!
    region: string | null; // String
  }
  Book: { // field return type
    author_id: string; // ID!
    cover: string; // URL!
    description: string; // String!
    genre: string; // String!
    id: string; // ID!
    isbn: string; // String!
    price: number; // Float!
    publish_year: number; // Int!
    title: string; // String!
  }
  Mutation: { // field return type
    edit_user: NexusGenRootTypes['User']; // User!
    log_in: { id: ID }; // JWT!
    sign_up: { id: ID }; // JWT!
  }
  Query: { // field return type
    book_details: NexusGenRootTypes['Book']; // Book!
    hello_world: string; // String!
    viewer: NexusGenRootTypes['User']; // User!
  }
  ShippingInformation: { // field return type
    selected_shipping_address_id: string | null; // ID
    shipping_addresses: NexusGenRootTypes['Address'][]; // [Address!]!
  }
  User: { // field return type
    email: string; // EmailAddress!
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
    shipping_information: NexusGenRootTypes['ShippingInformation']; // ShippingInformation!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    edit_user: { // args
      input: NexusGenInputs['EditUserInput']; // EditUserInput!
    }
    log_in: { // args
      input: NexusGenInputs['LogInInput']; // LogInInput!
    }
    sign_up: { // args
      input: NexusGenInputs['SignUpInput']; // SignUpInput!
    }
  }
  Query: {
    book_details: { // args
      input: NexusGenInputs['BookDetailsInput']; // BookDetailsInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Address" | "Book" | "Mutation" | "Query" | "ShippingInformation" | "User";

export type NexusGenInputNames = "BookDetailsInput" | "EditUserInput" | "LogInInput" | "SignUpInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "EmailAddress" | "Float" | "ID" | "Int" | "JWT" | "PostalCode" | "SensitiveString" | "String" | "URL";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: {};
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}