'use strict';

/**
 *  homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) => ({
    async find(ctx) {
        // const populate = [
        //     'Header',
        //     'Header.image'
        // ]
        // const content = await strapi.services['api::homepage.homepage'].find(ctx.query, populate)
        // return content
        const content = await super.find(ctx)
        return content
    }
}));