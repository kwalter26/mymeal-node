export default {
  express: {
    host: process.env.MYMEAL_HOST || '0.0.0.0',
    port: process.env.MYMEAL_PORT || 5268
  },
  get expressUrl() {
    return `http://${this.express.host}:${this.express.port}`;
  }
};
