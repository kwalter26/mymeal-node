export default {
  express: {
    host: process.env.MYMEAL_HOST || '0.0.0.0',
    port: process.env.MYMEAL_PORT || 5268
  },
  mongo: {
    host: process.env.MYMEAL_DB_HOST || 'localhost',
    port: process.env.MYMEAL_DB_PORT || 27017
  },
  get expressUrl() {
    return `http://${this.express.host}:${this.express.port}`;
  }
};
