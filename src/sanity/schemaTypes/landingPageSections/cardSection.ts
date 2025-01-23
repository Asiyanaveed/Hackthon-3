export const cardSection ={
    title: 'Card Section',
    name: 'cardSection',
    type: 'object',
    fields: [
        {title: 'Card Section Heading', name: 'cardSectionHeading',type: 'string' },

        {
          title: 'Cards',
          name: 'cards',
          type: 'array',
          of: [
                {
                  type: 'object',
                  fields:[
                    {title: 'Card Section Image', name: 'cardSecImg', type: 'image'},
                    {title: 'Card Section Heading', name: 'cardSecHeading', type: 'string'},
                    {title: 'Card Section SubHeading', name: 'cardSecSubHeading', type: 'string'},
                    {title: 'Card Section Price', name: 'cardSecPrice', type: 'number'}
                   ]
                }

            ]
        }
    ]

}