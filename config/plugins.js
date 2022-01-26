module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env(process.env.CLOUD_NAME),
        api_key: env(process.env.CLOUD_API_KEY),
        api_secret: env(process.env.CLOUD_SECRET),
      },
    },    
  });