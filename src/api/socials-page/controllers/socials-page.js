'use strict';

/**
 *  socials-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::socials-page.socials-page', ({strapi}) => ({
    async find(ctx) {
        const populateList = [
            'services',
            'services.services',
            'services.services.image',
            'events',
            'events.socials',
            'partners',
            'partners.partners',
            'partners.partners.logo',
            'clients',
            'clients.button',
            'clients.clients',
            'clients.clients.image',
            'search_engines'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
