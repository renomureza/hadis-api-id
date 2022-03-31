const config = require('../config/config');
const packageJson = require('../../package.json');
const { pick } = require('../utils/utility');

const overview = (req, res) => {
  return res.send({
    ...pick(packageJson, [
      'name',
      'license',
      'author',
      'homepage',
      'repository',
    ]),
    endpoints: [
      `${config.baseUrl}/hadith`,
      `${config.baseUrl}/hadith/abu-dawud?page=1&limit=20`,
      `${config.baseUrl}/hadith/abu-dawud/1`,
    ],
  });
};

module.exports = { overview };
