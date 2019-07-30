import { db } from './db';
import { reviews } from './db/__generated__/schema';

/* find a review made by a specific user*/
const getReviewById = async (reviewId: ID): Promise<reviews> => {
  return await db('reviews')
    .select('*')
    .where({ id: reviewId })
    .first();
};

/* find a review made by a specific user*/
const getReviewsByBookId = async (bookId: ID): Promise<Array<reviews>> => {
  return await db('reviews')
    .select('*')
    .where({ book_id: bookId });
};

/*get all the reviews for a specific book
Can sort by created_at field for posted comments */
const getSortedReviews = async (
  bookID: ID,
  field_to_sort_by: string,
  sortDirection: string
): Promise<Array<reviews>> => {
  return await db('reviews')
    .select('*')
    .where({ book_id: bookID })
    .orderBy(field_to_sort_by, sortDirection);
};

/*Return average rating for a specific book*/
//CHECK IF NULL WHEN CALLED
const getAverageRating = async (
  bookID: ID
): Promise<{ rating?: number } | undefined> => {
  return await db('reviews')
    .avg('rating')
    .where({ book_id: bookID })
    .first();
};

/*Return a specific star rating for a book
Needed for scoreboard 
Example: display how many 5 star ratings
Display 4 star ratings, etc.*/
//CHECK IF NULL WHEN CALLED
const getRatingCountBybookID = async (
  bookID: ID,
  starRating: number
): Promise<{ rating?: Pick<reviews, 'rating'> } | undefined> => {
  return await db('reviews')
    .count('rating')
    .where({
      book_id: bookID,
      rating: starRating
    })
    .first();
};

/* Add new rating to the database */
const NewRating = async (
  bookID: ID,
  reviewer: ID,
  reviewTitle: string,
  comment: string,
  starRating: number
  //date: Date
): Promise<reviews> => {
  await db('reviews').insert({
    book_id: bookID,
    user_id: reviewer,
    title: reviewTitle,
    body: comment,
    rating: starRating
    // created_at: date
  });
  return await db('reviews')
    .select('*')
    .where({ book_id: bookID })
    .first();
};

export {
  getReviewsByBookId,
  getReviewById,
  getSortedReviews,
  getAverageRating,
  getRatingCountBybookID,
  NewRating
};
