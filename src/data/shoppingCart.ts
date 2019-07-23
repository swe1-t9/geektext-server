import { db } from './db';

import { shopping_carts, shopping_cart_items, saved_carts} from './db/__generated__/schema';

const addToShoppingCart = async (
  cartid: string,
  bookid: string,
  amt: number
): Promise<shopping_cart_items> => {
  await db('shopping_cart_items').insert({shopping_cart_id: cartid, book_id: bookid, amount: amt})
  return await db('shopping_cart_items')
    .select('*')
    .where({
        shopping_cart_id: cartid,
        book_id: bookid
    }).first();
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

const createSavedCart = async (
    userid: string
): Promise<saved_carts> => {
    await db('saved_carts').insert({user_id: userid})
    return await db('saved_carts')
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

const getSavedCartByUserId = async (
        userid: string
    ): Promise<saved_carts> =>
        await db('saved_carts')
        .select('*')
        .where({user_id: userid})
        .first();

const saveShoppingCart = async (
    userid: string
): Promise<saved_carts> => {
    // first, fetch the cart id from the user id
    const cartid = await db('shopping_carts')
    .select('*')
    .where({user_id: userid})
    .first();
    // also, fetch the id of the user's "saved for later" cart
    const savedcartid = await db('saved_carts')
    .select('*')
    .where({user_id: userid})
    .first();
    // then, fetch the list of items corresponding to that id
    const items = await db('shopping_cart_items')
    .select('*')
    .where({ shopping_cart_id: cartid })
    .returning('*');
    // now that we have the items to save, delete the items from the live cart
    await db('shopping_cart_items')
    .where({ shopping_cart_id: cartid })
    .del();
    // replace the existing cartId in items with our savedCartId
    items.map(function(item){
        item.id = savedcartid;
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


export { createShoppingCart, createSavedCart, addToShoppingCart, getShoppingCartByUserId, getSavedCartByUserId, saveShoppingCart};
