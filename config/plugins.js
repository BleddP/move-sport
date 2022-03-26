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
        defaultFrom: 'bleddyn.pijpers@cloud-studio.co.uk',
        defaultReplyTo: 'bleddyn.pijpers@cloud-studio.co.uk',
        testAddress: 'bleddyn.pijpers@cloud-studio.co.uk',
      },
    },
  },
});
