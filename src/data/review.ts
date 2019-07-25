
import { db } from './db';
import { reviews } from './db/__generated__/schema';

/*get all the reviews for a specific book
Can sort by created_at field for posted comments */
const getSortedRatings = async (
    bookId: ID,
    fieldToSortBy: string,
    sortDirection: string,
): Promise<reviews> => {
    return await db('reviews')
        .select('*')
        .where({ book_id: bookId })
        .orderBy(fieldToSortBy, sortDirection)
        .first();
};

/*Return average rating for a specific book*/
const getAverageRating = async (
    bookId: ID,
): Promise<
    { 'rating'?: Pick<reviews, 'rating'> } | undefined
> => {
    return await db('reviews')
        .avg('rating')
        .where({ book_id: bookId })
        .first();
};

/*Return a specific star rating for a book
Needed for scoreboard 
Example: display how many 5 star ratings
Display 4 star ratings, etc.*/
const getRatingCountByBookId = async (
    bookId: ID,
    starRating: number,
): Promise<
    { 'rating'?: Pick<reviews, 'rating'> } | undefined
> => {
    return await db('reviews')
        .count('rating')
        .where({
            book_id: bookId,
            rating: starRating
        })

        .first();
};

export { getSortedRatings, getAverageRating, getRatingCountByBookId };