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
          saved_cart_id: savedcartid,
          book_id: bookid
      })
      .first();
}

const removeFromSavedCart = async (
    itemid: string
  ): Promise<saved_cart_items> => {
    const item = await db('saved_cart_items')
    .select('*')
    .where({id: itemid})
    .first();
    await db('saved_cart_items')
    .where({id: itemid})
    .del();
    return item;
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

// moved all the items in a user's shopping cart to their saved cart
const unsaveSavedCart = async (
    userid: string
): Promise<shopping_carts> => {
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
    const savedItems = await db('saved_cart_items')
    .select('book_id', 'amount')
    .where({ saved_cart_id: savedCart.id })
    .returning('*');
    // now that we have the items to save, delete the items from the live cart
    await db('saved_cart_items')
    .where({ saved_cart_id: savedCart.id })
    .del();
    // add the foreign key of the user's shoppingCart to the items
    savedItems.map(function(item){
        item.shopping_cart_id = shoppingCart.id;
    })
    // lastly, store the saved items into saved_cart_items
    await db('shopping_cart_items')
    .insert(savedItems)
    // return the user's saved_carts row
    return await db('shopping_carts')
    .select('*')
    .where({user_id: userid})
    .first()
}

export { removeFromSavedCart, createSavedCart, addToSavedCart, getSavedCartByUserId, unsaveSavedCart };
