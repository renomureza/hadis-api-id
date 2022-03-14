const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Hadits API ID',
    description: 'Dokumentasi API hadits Indonesia.',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/renomureza/hadits-api-id/blob/master/LICENSE',
    },
  },
  externalDocs: {
    description: 'Github',
    url: 'https://github.com/renomureza/hadits-api-id',
  },
  servers: [
    {
      url: config.baseUrl,
    },
  ],
};

module.exports = swaggerDef;
