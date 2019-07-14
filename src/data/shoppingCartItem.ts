import { db } from './db';

import { shopping_cart_items } from './db/__generated__/schema';

const getShoppingCartItemByItemId = async (
  itemid: ID
): Promise<shopping_cart_items> => {
  return await db('shopping_carts')
    .select('*')
    .where({ itemid })
    .join('shopping_cart_items', 'shopping_carts.id', 'shopping_cart_items.cart_id')
    .first();
}

const getShoppingCartItemsByCartId = async (
  cartid: ID
): Promise<Array<shopping_cart_items>> => {
  return await db('shopping_cart_items')
    .where({ cartid })
    .returning('*');
}

export { getShoppingCartItemByItemId, getShoppingCartItemsByCartId };
