export const hero = {
    title: 'Hero',
    name: 'hero',
    type: 'object',
    fields: [
        {
            title: 'Hero Images',
            name: 'heroImages',
            type: 'array',
            of: [{ type: 'image' }]
        },
        { title: 'Hero Heading', name: 'heroHeading', type: 'string' },
        { title: 'Hero Paragraph', name: 'heroPara', type: 'string' },
        { title: 'Button Text', name: 'heroBtnText', type: 'string' }
    ]
}