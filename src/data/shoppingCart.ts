import { db } from './db';

import { shopping_carts, shopping_cart_items} from './db/__generated__/schema';

const addToShoppingCart = async (
  cartid: string,
  bookid: string,
  amt: number
): Promise<shopping_cart_items> =>
  await db('shopping_cart_items')
    .insert({cart_id: cartid, book_id: bookid, amount: amt})
    .returning('*')
    .first();

const createShoppingCart = async (
    userid: string
): Promise<shopping_carts> =>
    await db('shopping_carts')
    .insert({user_id: userid})
    .returning('*')
    .first();

const getShoppingCart = async (
    userid: string
): Promise<shopping_carts> =>
    await db('shopping_carts')
    .select('*')
    .where('shopping_carts.user_id', userid)
    .join('shopping_cart_items', 'shopping_carts.id', 'shopping_cart_items.cart_id');

export { createShoppingCart, addToShoppingCart, getShoppingCart };
