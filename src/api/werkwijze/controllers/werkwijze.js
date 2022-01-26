'use strict';

/**
 *  werkwijze controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::werkwijze.werkwijze', ({strapi}) => ({
    async find(ctx) {
        const populateList = [
            'methods.methods',
            'methods.methods.icon',
            'services.services',
            'services.services.image',
            'expenses',
            'location',
            'search_engines'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
