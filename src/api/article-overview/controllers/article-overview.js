"use strict";

/**
 *  article-overview controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::article-overview.article-overview",
  ({ strapi }) => ({
    async find(ctx) {
      const populateList = [
        "header.header_image",
        "header",
        "articles",
        "articles.article",
        "articles.article.title",
        "articles.article.image",
        "articles.article.short_description",
        "search_engines",
        "search_engines.og_image",
      ];
      // Push any additional query params to the array
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");

      const content = await super.find(ctx);
      return content;
    },
  })
);
