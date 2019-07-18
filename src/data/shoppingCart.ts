import { db } from './db';

import { shopping_carts, shopping_cart_items } from './db/__generated__/schema';

const addToShoppingCart = async (
  cartid: string,
  bookid: string,
  amt: number
): Promise<shopping_cart_items> => {
  await db('shopping_cart_items').insert({
    shopping_cart_id: cartid,
    book_id: bookid,
    amount: amt
  });
  return await db('shopping_cart_items')
    .select('*')
    .where({
      shopping_cart_id: cartid,
      book_id: bookid
    })
    .first();
};

const createShoppingCart = async (userid: string): Promise<shopping_carts> => {
  await db('shopping_carts').insert({ user_id: userid });
  return await db('shopping_carts')
    .select('*')
    .where({ user_id: userid })
    .first();
};

const getShoppingCartByUserId = async (
  userid: string
): Promise<shopping_carts> =>
  await db('shopping_carts')
    .select('*')
    .where({ user_id: userid })
    .first();

export { createShoppingCart, addToShoppingCart, getShoppingCartByUserId };
