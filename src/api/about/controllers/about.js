'use strict';

/**
 *  about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about.about', () => ({
    async find(ctx) {
        const populateList = [
            'image',
            'partners.partners',
            'partners.partners.logo',
            'dynamic_content',
            'dynamic_content.image',
            'search_engines',
            'search_engines.og_image',
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
