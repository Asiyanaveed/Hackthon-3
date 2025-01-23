export const gearUp ={
    title: 'Gear Up',
    name: 'gearUp',
    type: 'object',
    fields: [
        {title: 'Gear Up Heading', name: 'gearUpHeading',type: 'string' },

        {
          title: 'Gear Up Cards',
          name: 'gearUpCards',
          type: 'array',
          of: [
                {
                  type: 'object',
                  fields:[
                    {title: 'Gear Up Cards Image', name: 'gearUpCardsImg', type: 'image'},
                    {title: 'Gear Up Cards Heading', name: 'gearUpCardsHeading', type: 'string'},
                    {title: 'Gear Up Cards SubHeading', name: 'gearUpCardsSubHeading', type: 'string'},
                    {title: 'Gear Up Cards Price', name: 'gearUpCardsPrice', type: 'number'}
                   ]
                }

            ]
        }
    ]

}