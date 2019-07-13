import { db } from './db';

import { users, shopping_carts, shopping_cart_items, books } from './db/__generated__/schema';

const addToCart = async (
  cart: shopping_carts,
  book: books
): Promise<shopping_cart_items> =>
  await db('shopping_cart_items')
    .insert({cart_id: cart.id, book_id: book.id, amount: '1'})
    .returning('*')
    .first();

const createCart = async (
    user: users
): Promise<shopping_carts> =>
    await db('shopping_carts')
    .insert({user_id: user.id})
    .returning('*')
    .first();

export { createCart, addToCart };