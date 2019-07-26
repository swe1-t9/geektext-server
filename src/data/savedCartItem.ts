import { db } from './db';

import { saved_cart_items } from './db/__generated__/schema';

const getSavedCartItemByItemId = async (
    itemid: ID
  ): Promise<saved_cart_items> => {
    return await db('saved_cart_items')
      .select('*')
      .where('saved_cart_items.id', itemid)
      .join('saved_carts', 'saved_cart_items.saved_cart_id', 'saved_carts.id')
      .first();
  }
  
  const getSavedCartItemsByCartId = async (
    cartid: ID
  ): Promise<Array<saved_cart_items>> => {
    return await db('saved_cart_items')
      .select('*')
      .where({ saved_cart_id: cartid })
      .returning('*');
  }

  export { getSavedCartItemByItemId, getSavedCartItemsByCartId };