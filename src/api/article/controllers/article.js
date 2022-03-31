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
}));
