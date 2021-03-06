'use strict';

/**
 *  terms-and-condition controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::terms-and-condition.terms-and-condition', ({strapi}) => ({
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
