"use strict";

/**
 *  homepage controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::homepage.homepage",
  ({ strapi }) => ({
    async find(ctx) {
      const populateList = [
        "header.header_image",
        "header.buttons",
        "clients.clients",
        "clients.button",
        "clients.clients.image",
        "partners.partners",
        "partners.partners.logo",
        "services.services",
        "services.services.image",
        "about_me",
        "about_me.image",
        "about_me.signature",
        "mental_training",
        "mental_training.image_1.image",
        "mental_training.image_2.image",
        "mental_training.image_3.image",
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
