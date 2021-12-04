module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ddc524c8fa46ba4523cfb7a6c3f68fcb'),
  },
});
