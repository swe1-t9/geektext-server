import { db } from './db';

import { shopping_carts, shopping_cart_items, saved_carts, saved_cart_items} from './db/__generated__/schema';

const addToSavedCart = async (
    savedcartid: string,
    bookid: string,
    amt: number
  ): Promise<shopping_cart_items> => {
    await db('saved_cart_items')
    .insert({saved_cart_id: savedcartid, book_id: bookid, amount: amt})
    return await db('saved_cart_items')
      .select('*')
      .where({
          shopping_cart_id: savedcartid,
          book_id: bookid
      })
      .first();
}

const removeFromSavedCart = async (
    itemid: string,
    savedcartid: string
  ): Promise<saved_cart_items> => {
    await db('saved_cart_items')
    .where({id: itemid})
    .del()
    return await db('saved_cart_items')
      .select('*')
      .where({
          saved_cart_id: savedcartid
      })
      .returning('*');
}

const createSavedCart = async (
    userid: string
): Promise<saved_carts> => {
    await db('saved_carts').insert({user_id: userid})
    return await db('saved_carts')
    .select('*')
    .where({user_id: userid})
    .first();
}

const getSavedCartByUserId = async (
    userid: string
): Promise<saved_carts> =>
    await db('saved_carts')
    .select('*')
    .where({user_id: userid})
    .first();

export { removeFromSavedCart, createSavedCart, addToSavedCart, getSavedCartByUserId };
