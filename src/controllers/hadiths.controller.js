const hadithsService = require('../services/hadiths.service');

const getNarrates = (req, res) => {
  const narattes = hadithsService.getNarrates();
  return res.send(narattes);
};

const getHadiths = (req, res) => {
  const hadits = hadithsService.getHadiths(
    req.params.narrator,
    req.query.page,
    req.query.limit
  );
  return res.send(hadits);
};

const getHadith = (req, res) => {
  const hadith = hadithsService.getHadith(
    req.params.narrator,
    req.params.number
  );

  return res.send(hadith);
};

module.exports = { getNarrates, getHadiths, getHadith };
