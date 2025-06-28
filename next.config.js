/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BOX_OFFICE_KEY: process.env.REACT_APP_BOX_OFFICE_KEY,
    REACT_APP_MOVIES_SERVICE_KEY: process.env.REACT_APP_MOVIES_SERVICE_KEY,
  },
};

module.exports = nextConfig;
