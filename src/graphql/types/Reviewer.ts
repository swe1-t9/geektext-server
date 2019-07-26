import { objectType } from 'nexus';

const Reviewer = objectType({
    name: 'Reviewer',
    description: 'User leaving a rating and comment',
    definition(t) {
      t.id('id');
      t.string('nickname');
      t.boolean('isAnon');
      t.boolean('bookPurchased');
    }
  });
  
  export { Reviewer };