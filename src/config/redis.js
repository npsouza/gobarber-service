const config = {};

if (process.env.REDIS_URL) {
  config.path = process.env.REDIS_URL;
} else {
  config.host = process.env.REDIS_HOST;
  config.port = process.env.REDIS_PORT;
}

export default config;
