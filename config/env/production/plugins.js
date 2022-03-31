module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUD_NAME"),
          api_key: env("CLOUD_API_KEY"),
          api_secret: env("CLOUD_SECRET"),
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('EMAIL_TO'),
          defaultReplyTo: env('EMAIL_TO'),
          testAddress: env('EMAIL_TO'),
        },
      },
    },
  });
  