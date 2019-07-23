import { db } from './db';

import { shopping_cart_items, saved_cart_items } from './db/__generated__/schema';

const getShoppingCartItemByItemId = async (
  itemid: ID
): Promise<shopping_cart_items> => {
  return await db('shopping_cart_items')
    .select('*')
    .where('shopping_cart_items.id', itemid)
    .join('shopping_carts', 'shopping_cart_items.shopping_cart_id', 'shopping_carts.id')
    .first();
}

const getShoppingCartItemsByCartId = async (
  cartid: ID
): Promise<Array<shopping_cart_items>> => {
  return await db('shopping_cart_items')
    .select('*')
    .where({ shopping_cart_id: cartid })
    .returning('*');
}

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

export { getShoppingCartItemByItemId, getShoppingCartItemsByCartId, getSavedCartItemByItemId, getSavedCartItemsByCartId };
