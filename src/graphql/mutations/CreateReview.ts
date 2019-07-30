import { mutationField, arg, inputObjectType } from 'nexus';
import { AuthenticationError } from 'apollo-server-core';
import { Context, isAuthenticated } from '../context/Context';
import { NewRating } from '../../data/review'

const CreateReview = mutationField('create_review', {
  type:'Review',
  args: {
    input: arg({
      type:'CreateReviewInput',
      required: true
    })
  },
  async resolve(root,{input: {book_id, title, body, rating} }, ctx: Context ) {
    if (!isAuthenticated(ctx)) {
      throw new AuthenticationError('Unauthenticated');
    }
    return await NewRating(book_id, ctx.viewer.id, title, body, rating)
  }
});

const CreateReviewInput = inputObjectType({
    name: 'CreateReviewInput',
    definition(t) {
    t.string('book_id', {required:true});
    t.string('title', {required:true});
    t.string('body', {required:true});
    t.int('rating', {required:true});
    //t.boolean('is_anonymous', {required:true});
   // t.field('created_at', {required:true}); //should be date?
    }
  });
  

  
  export { CreateReviewInput, CreateReview };
 
