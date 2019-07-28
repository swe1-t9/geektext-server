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
  AddToSavedCartInput: { // input type
    amount: number; // Int!
    book_id: string; // String!
  }
  AddToShoppingCartInput: { // input type
    amount: number; // Int!
    book_id: string; // String!
  }
  AverageRatingInput: { // input type
    book_id: string; // String!
  }
  BookDetailsInput: { // input type
    id: string; // ID!
  }
  CreateReviewInput: { // input type
    body: string; // String!
    book_id: string; // String!
    rating: number; // Int!
    title: string; // String!
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
  RemoveFromSavedCartInput: { // input type
    item_id: string; // String!
  }
  RemoveFromShoppingCartInput: { // input type
    item_id: string; // String!
  }
  SignUpInput: { // input type
    email: string; // EmailAddress!
    first_name: string; // String!
    last_name: string; // String!
    password: string; // SensitiveString!
  }
  SortedRatingsInput: { // input type
    book_id: string; // String!
    field_to_sort_by: string; // String!
    sort_direction: string; // String!
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
  Review: { // root type
    body: string; // String!
    id: string; // ID!
    rating: number; // Int!
    title: string; // String!
  }
  SavedCart: { // root type
    id: string; // ID!
  }
  SavedCartItem: { // root type
    amount: number; // Int!
    id: string; // ID!
  }
  ShippingInformation: { // root type
    selected_shipping_address_id?: string | null; // ID
    shipping_addresses: NexusGenRootTypes['Address'][]; // [Address!]!
  }
  ShoppingCart: { // root type
    id: string; // ID!
  }
  ShoppingCartItem: { // root type
    amount: number; // Int!
    id: string; // ID!
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
  AddToSavedCartInput: NexusGenInputs['AddToSavedCartInput'];
  AddToShoppingCartInput: NexusGenInputs['AddToShoppingCartInput'];
  AverageRatingInput: NexusGenInputs['AverageRatingInput'];
  BookDetailsInput: NexusGenInputs['BookDetailsInput'];
  CreateReviewInput: NexusGenInputs['CreateReviewInput'];
  EditUserInput: NexusGenInputs['EditUserInput'];
  LogInInput: NexusGenInputs['LogInInput'];
  RemoveFromSavedCartInput: NexusGenInputs['RemoveFromSavedCartInput'];
  RemoveFromShoppingCartInput: NexusGenInputs['RemoveFromShoppingCartInput'];
  SignUpInput: NexusGenInputs['SignUpInput'];
  SortedRatingsInput: NexusGenInputs['SortedRatingsInput'];
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
    add_to_saved_cart: NexusGenRootTypes['SavedCartItem']; // SavedCartItem!
    add_to_shopping_cart: NexusGenRootTypes['ShoppingCartItem']; // ShoppingCartItem!
    checkout_user: NexusGenRootTypes['ShoppingCart']; // ShoppingCart!
    create_review: NexusGenRootTypes['Review']; // Review!
    edit_user: NexusGenRootTypes['User']; // User!
    log_in: { id: ID }; // JWT!
    remove_from_saved_cart: NexusGenRootTypes['SavedCart']; // SavedCart!
    remove_from_shopping_cart: NexusGenRootTypes['ShoppingCart']; // ShoppingCart!
    save_shopping_cart: NexusGenRootTypes['SavedCart']; // SavedCart!
    sign_up: { id: ID }; // JWT!
    unsave_saved_cart: NexusGenRootTypes['ShoppingCart']; // ShoppingCart!
  }
  Query: { // field return type
    average_rating: NexusGenRootTypes['Review']; // Review!
    book_details: NexusGenRootTypes['Book']; // Book!
    hello_world: string; // String!
    sorted_ratings: NexusGenRootTypes['Review']; // Review!
    viewer: NexusGenRootTypes['User']; // User!
  }
  Review: { // field return type
    body: string; // String!
    book: NexusGenRootTypes['Book']; // Book!
    id: string; // ID!
    rating: number; // Int!
    reviewer: NexusGenRootTypes['User']; // User!
    title: string; // String!
  }
  SavedCart: { // field return type
    id: string; // ID!
    items: NexusGenRootTypes['SavedCartItem'][]; // [SavedCartItem!]!
  }
  SavedCartItem: { // field return type
    amount: number; // Int!
    book: NexusGenRootTypes['Book']; // Book!
    id: string; // ID!
  }
  ShippingInformation: { // field return type
    selected_shipping_address_id: string | null; // ID
    shipping_addresses: NexusGenRootTypes['Address'][]; // [Address!]!
  }
  ShoppingCart: { // field return type
    id: string; // ID!
    items: NexusGenRootTypes['ShoppingCartItem'][]; // [ShoppingCartItem!]!
  }
  ShoppingCartItem: { // field return type
    amount: number; // Int!
    book: NexusGenRootTypes['Book']; // Book!
    id: string; // ID!
  }
  User: { // field return type
    email: string; // EmailAddress!
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
    saved_cart: NexusGenRootTypes['SavedCart']; // SavedCart!
    shipping_information: NexusGenRootTypes['ShippingInformation']; // ShippingInformation!
    shopping_cart: NexusGenRootTypes['ShoppingCart']; // ShoppingCart!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    add_to_saved_cart: { // args
      input: NexusGenInputs['AddToSavedCartInput']; // AddToSavedCartInput!
    }
    add_to_shopping_cart: { // args
      input: NexusGenInputs['AddToShoppingCartInput']; // AddToShoppingCartInput!
    }
    create_review: { // args
      input: NexusGenInputs['CreateReviewInput']; // CreateReviewInput!
    }
    edit_user: { // args
      input: NexusGenInputs['EditUserInput']; // EditUserInput!
    }
    log_in: { // args
      input: NexusGenInputs['LogInInput']; // LogInInput!
    }
    remove_from_saved_cart: { // args
      input: NexusGenInputs['RemoveFromSavedCartInput']; // RemoveFromSavedCartInput!
    }
    remove_from_shopping_cart: { // args
      input: NexusGenInputs['RemoveFromShoppingCartInput']; // RemoveFromShoppingCartInput!
    }
    sign_up: { // args
      input: NexusGenInputs['SignUpInput']; // SignUpInput!
    }
  }
  Query: {
    average_rating: { // args
      input: NexusGenInputs['AverageRatingInput']; // AverageRatingInput!
    }
    book_details: { // args
      input: NexusGenInputs['BookDetailsInput']; // BookDetailsInput!
    }
    sorted_ratings: { // args
      input: NexusGenInputs['SortedRatingsInput']; // SortedRatingsInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Address" | "Book" | "Mutation" | "Query" | "Review" | "SavedCart" | "SavedCartItem" | "ShippingInformation" | "ShoppingCart" | "ShoppingCartItem" | "User";

export type NexusGenInputNames = "AddToSavedCartInput" | "AddToShoppingCartInput" | "AverageRatingInput" | "BookDetailsInput" | "CreateReviewInput" | "EditUserInput" | "LogInInput" | "RemoveFromSavedCartInput" | "RemoveFromShoppingCartInput" | "SignUpInput" | "SortedRatingsInput";

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