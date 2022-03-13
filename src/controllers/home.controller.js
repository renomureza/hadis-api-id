const getEndpointsOverview = (req, res) => {
  return res.send({
    endpoints: [
      {
        path: '/v1/hadith',
        description: 'get all imam: /hadith',
      },
      {
        path: '/v1/hadith/abu-dawud',
        description:
          'get spesifict surah using number surah in quran (1 - 114): /surahs/{numberSurah}',
      },
      {
        path: '/v1/hadith/abu-dawud/1',
        description:
          'get all ayah from spesifict surah: /surahs/{numberSurah}/ayahs',
      },
    ],
    maintainer: 'R.M. Reza (renomureza@gmail.com)',
    source: 'https://github.com/renomureza/hadits-api-id',
  });
};

module.exports = { getEndpointsOverview };
