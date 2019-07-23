import { db } from './db';

import { shopping_carts, shopping_cart_items, saved_carts} from './db/__generated__/schema';

const addToShoppingCart = async (
  cartid: string,
  bookid: string,
  amt: number
): Promise<shopping_cart_items> => {
  await db('shopping_cart_items')
  .insert({shopping_cart_id: cartid, book_id: bookid, amount: amt})
  return await db('shopping_cart_items')
    .select('*')
    .where({
        shopping_cart_id: cartid,
        book_id: bookid
    })
    .first();
} 

const removeFromShoppingCart = async (
    itemid: string
  ): Promise<shopping_cart_items> => {
    const item = await db('shopping_cart_items')
    .select('*')
    .where({id: itemid})
    .first();
    await db('shopping_cart_items')
    .where({id: itemid})
    .del();
    return item;
}

const createShoppingCart = async (
    userid: string
): Promise<shopping_carts> => {
    await db('shopping_carts').insert({user_id: userid})
    return await db('shopping_carts')
    .select('*')
    .where({user_id: userid})
    .first();
}

const getShoppingCartByUserId = async (
    userid: string
): Promise<shopping_carts> =>
    await db('shopping_carts')
    .select('*')
    .where({user_id: userid})
    .first();

// moved all the items in a user's shopping cart to their saved cart
const saveShoppingCart = async (
    userid: string
): Promise<saved_carts> => {
    // first, fetch the cart id from the user id
    const shoppingCart = await db('shopping_carts')
    .select('*')
    .where({user_id: userid})
    .first();
    // also, fetch the id of the user's "saved for later" cart
    const savedCart = await db('saved_carts')
    .select('*')
    .where({user_id: userid})
    .first();
    // then, fetch the list of items corresponding to that id
    const items = await db('shopping_cart_items')
    .select('book_id', 'amount')
    .where({ shopping_cart_id: shoppingCart.id })
    .returning('*');
    // now that we have the items to save, delete the items from the live cart
    await db('shopping_cart_items')
    .where({ shopping_cart_id: shoppingCart.id })
    .del();
    // replace the existing cartId in items with our savedCartId
    items.map(function(item){
        item.saved_cart_id = savedCart.id;
    })
    // lastly, store the saved items into saved_cart_items
    await db('saved_cart_items')
    .insert(items)
    // return the user's saved_carts row
    return await db('saved_carts')
    .select('*')
    .where({user_id: userid})
    .first()
}


export { createShoppingCart, removeFromShoppingCart, addToShoppingCart, getShoppingCartByUserId, saveShoppingCart};
