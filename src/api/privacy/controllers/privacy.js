'use strict';

/**
 *  privacy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::privacy.privacy', ({strapi}) => ({
    async find(ctx) {
        const populateList = [
            'privacy',
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