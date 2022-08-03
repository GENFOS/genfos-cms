module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf4f7ac8869ac8f8ba478fa973d2a1dc'),
  },
});
