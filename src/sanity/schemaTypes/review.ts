// schemas/review.js
export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string'
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule: any) => Rule.min(1).max(5)
      },
      {
        name: 'reviewText',
        title: 'Review Text',
        type: 'text'
      },
      {
        name: 'userName',
        title: 'User Name',
        type: 'string'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime'
      }
    ]
  }
  