/** @type {import('next').NextConfig} */

const connectDB = require('./src/database/connection');
connectDB();

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
