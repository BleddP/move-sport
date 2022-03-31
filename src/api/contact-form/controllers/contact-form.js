"use strict";

/**
 *  contact-form controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const ejs = require("ejs");

module.exports = createCoreController("api::contact-form.contact-form", ({ strapi }) => ({
    async create(ctx) {
      const body = ctx.request.body.data;
      body.date = new Date(Date.now())

      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = body.date.toLocaleDateString("nl-NL", dateOptions);
      const time = body.date.toLocaleTimeString({
        hour: "2-digit",
        minute: "2-digit",
      });

      body.received = date + " om " + time;

      const renderEmailTemplate = () => {
        return new Promise((resolve) => {
          ejs.renderFile(
            "./src/email-templates/contact-form.ejs",
            body,
            (err, str) => {
              if (err) {
                console.log("Email template error: ", err);
              } else {
                resolve(str);
              }
            }
          );
        });
      };

      const template = await renderEmailTemplate();

      await strapi.plugins["email"].services.email.send({
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_TO,
        replyTo: process.env.EMAIL_TO,
        subject: "Contactformulier ingevuld op de website!",
        text: `Hi Chloe, er is een nieuw contactformuler ingevuld. Naam: ${body.name}, email: ${body.email}, telefoon nummer: ${body.phone}. Type training: ${body.type}. Bericht: ${body.message}`,
        html: template,
      });

      const newEntry = await super.create(ctx);
      return newEntry;
    },
  })
);
