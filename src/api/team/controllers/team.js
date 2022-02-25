'use strict';

/**
 *  team controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::team.team', () => ({
    async find(ctx) {
        const populateList = [
            'header',
            'header.header_image',
            'header.buttons',
            'product_intro',
            'product_intro.image',
            'accordions',
            'trajecten',
            'trajecten.image',
            'trajecten.buttons',
            'search_engines',
            'search_engines.og_image'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
