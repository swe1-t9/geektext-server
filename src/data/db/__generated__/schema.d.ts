/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2019-07-13 10:52:36 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c postgres://username:password@ec2-54-197-239-115.compute-1.amazonaws.com:5432/d4c914b7iatck1?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory -t addresses -t authors -t books -t home_addresses -t migrations -t migrations_lock -t reviews -t shipping_addresses -t shopping_cart_items -t shopping_carts -t users -s public
 *
 */


export namespace addressesFields {
    export type id = string;
    export type address_line_1 = string;
    export type address_line_2 = string | null;
    export type address_line_3 = string | null;
    export type city = string;
    export type region = string | null;
    export type country = string;
    export type postal_code = string;
    export type created_at = Date | null;

}

export interface addresses {
    id: addressesFields.id;
    address_line_1: addressesFields.address_line_1;
    address_line_2: addressesFields.address_line_2;
    address_line_3: addressesFields.address_line_3;
    city: addressesFields.city;
    region: addressesFields.region;
    country: addressesFields.country;
    postal_code: addressesFields.postal_code;
    created_at: addressesFields.created_at;

}

export namespace authorsFields {
    export type id = string;
    export type first_name = string;
    export type last_name = string;
    export type bio = string;
    export type created_at = Date | null;

}

export interface authors {
    id: authorsFields.id;
    first_name: authorsFields.first_name;
    last_name: authorsFields.last_name;
    bio: authorsFields.bio;
    created_at: authorsFields.created_at;

}

export namespace booksFields {
    export type id = string;
    export type isbn = string;
    export type author_id = string;
    export type price = number;
    export type cover = string;
    export type description = string;
    export type title = string;
    export type genre = string;
    export type publish_year = number;
    export type created_at = Date | null;

}

export interface books {
    id: booksFields.id;
    isbn: booksFields.isbn;
    author_id: booksFields.author_id;
    price: booksFields.price;
    cover: booksFields.cover;
    description: booksFields.description;
    title: booksFields.title;
    genre: booksFields.genre;
    publish_year: booksFields.publish_year;
    created_at: booksFields.created_at;

}

export namespace home_addressesFields {
    export type id = string;
    export type user_id = string;
    export type address_id = string;
    export type created_at = Date | null;

}

export interface home_addresses {
    id: home_addressesFields.id;
    user_id: home_addressesFields.user_id;
    address_id: home_addressesFields.address_id;
    created_at: home_addressesFields.created_at;

}

export namespace migrationsFields {
    export type id = number;
    export type name = string | null;
    export type batch = number | null;
    export type migration_time = Date | null;

}

export interface migrations {
    id: migrationsFields.id;
    name: migrationsFields.name;
    batch: migrationsFields.batch;
    migration_time: migrationsFields.migration_time;

}

export namespace migrations_lockFields {
    export type index = number;
    export type is_locked = number | null;

}

export interface migrations_lock {
    index: migrations_lockFields.index;
    is_locked: migrations_lockFields.is_locked;

}

export namespace reviewsFields {
    export type id = string;
    export type user_id = string;
    export type book_id = string;
    export type title = string;
    export type body = string;
    export type rating = number;
    export type created_at = Date | null;

}

export interface reviews {
    id: reviewsFields.id;
    user_id: reviewsFields.user_id;
    book_id: reviewsFields.book_id;
    title: reviewsFields.title;
    body: reviewsFields.body;
    rating: reviewsFields.rating;
    created_at: reviewsFields.created_at;

}

export namespace shipping_addressesFields {
    export type id = string;
    export type user_id = string;
    export type address_id = string;
    export type is_default = boolean | null;
    export type created_at = Date | null;

}

export interface shipping_addresses {
    id: shipping_addressesFields.id;
    user_id: shipping_addressesFields.user_id;
    address_id: shipping_addressesFields.address_id;
    is_default: shipping_addressesFields.is_default;
    created_at: shipping_addressesFields.created_at;

}

export namespace shopping_cart_itemsFields {
    export type id = string;
    export type shopping_cart_id = string;
    export type book_id = string;
    export type created_at = Date | null;

}

export interface shopping_cart_items {
    id: shopping_cart_itemsFields.id;
    shopping_cart_id: shopping_cart_itemsFields.shopping_cart_id;
    book_id: shopping_cart_itemsFields.book_id;
    created_at: shopping_cart_itemsFields.created_at;

}

export namespace shopping_cartsFields {
    export type id = string;
    export type user_id = string;
    export type created_at = Date | null;

}

export interface shopping_carts {
    id: shopping_cartsFields.id;
    user_id: shopping_cartsFields.user_id;
    created_at: shopping_cartsFields.created_at;

}

export namespace usersFields {
    export type id = string;
    export type email = string;
    export type password = string;
    export type first_name = string;
    export type last_name = string;
    export type created_at = Date | null;

}

export interface users {
    id: usersFields.id;
    email: usersFields.email;
    password: usersFields.password;
    first_name: usersFields.first_name;
    last_name: usersFields.last_name;
    created_at: usersFields.created_at;

}
