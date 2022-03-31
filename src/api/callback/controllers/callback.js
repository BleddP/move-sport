'use strict';

/**
 *  callback controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const ejs = require('ejs')

module.exports = createCoreController('api::callback.callback', ({strap}) => ({

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
              "./src/email-templates/callback.ejs",
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
          subject: "Nieuw terugbelverzoek!",
          text: `Terugbelverzoek ontvangen van ${body.phone}. Ontvangen op ${body.received}`,
          html: template,
        });
  
        const newEntry = await super.create(ctx);
        return newEntry;
      },

}));
