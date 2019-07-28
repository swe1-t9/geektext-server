import { objectType } from 'nexus';
import { getUserById } from '../../data/user'
import { getReviewById } from '../../data/review'
import { getBookById } from '../../data/book'

/*Schema for reviews table
export interface reviews {
    id: reviewsFields.id;
    user_id: reviewsFields.user_id;
    book_id: reviewsFields.book_id;
    title: reviewsFields.title;
    body: reviewsFields.body;
    rating: reviewsFields.rating;
    created_at: reviewsFields.created_at;
}
*/
const Review = objectType({
  name: 'Review',
  description: 'Comment and rating for a book',
  definition(t) {
    t.id('id');
    t.field('reviewer',{
      type: 'User',
      description: "User submitting the review",
      async resolve(review) {
        const {user_id}  = await getReviewById(review.id) //get user from review table first
        return await getUserById(user_id); //get the user info using that user's id
      }
    });
    t.field('book',{
      type: 'Book',
      description: "The book the user is rating",
      async resolve(book) {
        return await getBookById(book.id); 
      }
    });
    t.string('title');
    t.string('body');
    t.int('rating');
    //t.boolean('is_anonymous');
    //created_at of Date?
  }
});

export { Review };