import { queryField, inputObjectType, arg } from 'nexus';

import {getBookDetails} from '../../data/bookDetails';

// TODO: add correct graphql type in resolve() return book details graphql type
const BookDetailsQuery = queryField('book_details', {
    type: 'Book',
    args: {
        input: arg({
            type: 'BookDetailsInput',
            required: true
        })
    },
    async resolve(root, { input: { id } }){
        return await getBookDetails(id);
    }
});

const BookDetailsInput = inputObjectType({
    name: 'BookDetailsInput',
    definition(t) {
        t.id("id", { required: true })
    }
});

export { BookDetailsQuery, BookDetailsInput };
