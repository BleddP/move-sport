'use strict';

/**
 *  contact-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-page.contact-page', ({strapi}) => ({
    async find(ctx) {
        const populateList = [
            'content',
            'content.avatar',
            'partners.partners',
            'partners.partners.logo',
            'contact'
        ]
        // Push any additional query params to the array
        populateList.push(ctx.query.populate)
        ctx.query.populate = populateList.join(',')

        const content = await super.find(ctx)
        return content
    }
}));
