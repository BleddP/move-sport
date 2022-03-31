"use strict";

/**
 *  article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async find(ctx) {
    const populateList = [
      "header",
      "header.header_image",
      "author",
      "author.author_image",
      "body",
      "search_engines",
      "search_engines.og_image",
    ];
    // Push any additional query params to the array
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");

    const content = await super.find(ctx);
    return content;
  },

  async findOne(ctx) {

    const populateList = [
        "header",
        "header.header_image",
        "author",
        "author.author_image",
        "body",
        "search_engines",
        "search_engines.og_image",
      ];
      // Push any additional query params to the array
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");

    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {}
    query.filters.slug = { '$eq': slug }
    const entity = await strapi.service('api::article.article').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(results[0]);
  }

}));
