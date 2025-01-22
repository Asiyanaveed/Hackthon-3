export default {
    title: 'The Essential',
    name: 'theEssential',
    type: 'object',
    fields: [
        { title: 'The Essential Heading', name: 'theEssentialHeading',type: 'string' },

        {
            title: 'Cards',
            name: 'cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { title: 'The Essential Image', name: 'theEssentialImg', type: 'image' },
                    ]
                }
            ]
        }
    ]
}
