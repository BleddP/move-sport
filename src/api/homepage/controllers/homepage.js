'use strict';

/**
 *  homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) => ({
    async find(ctx) {
        const populateList = [
            'header.header_image',
            'header.buttons',
            'clients.clients',
            'partners.partners',
            'services.services',
            'about_me',
            'mental_training',
            'search_engines'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));