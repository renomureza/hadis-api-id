const config = require('../config/config');

const getEndpointsOverview = (req, res) => {
  return res.send({
    endpoints: [
      `${config.baseUrl}/hadith`,
      `${config.baseUrl}/hadith/abu-dawud?page=1&limit=20`,
      `${config.baseUrl}/hadith/abu-dawud/1`,
    ],
    maintainer: 'R.M. Reza (renomureza@gmail.com)',
    source: 'https://github.com/renomureza/hadits-api-id',
  });
};

module.exports = { getEndpointsOverview };
