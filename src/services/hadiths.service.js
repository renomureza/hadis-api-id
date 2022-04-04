const ApiError = require('../utils/ApiError');
const httpStatus = require('../utils/httpStatus');
const narrates = require('../data/list.json');
const paginate = require('../utils/paginate');
const { omit } = require('../utils/utility');

const hadithsImported = () => {
  const hadiths = {};
  narrates.forEach((narrator) => {
    // eslint-disable-next-line
    hadiths[narrator.slug] = require(`../data/${narrator.slug}.json`);
  });
  return hadiths;
};

const hadiths = hadithsImported();

const getNarrates = () => narrates;

const getNarratorBySlug = (slug) => {
  return getNarrates().find((n) => n.slug === slug);
};

const getHadiths = (narrator, page = 1, limit = 20) => {
  const narratorBySlug = getNarratorBySlug(narrator);

  if (!narratorBySlug) {
    throw new ApiError(httpStatus.NOT_FOUND, 'not found');
  }

  const pagination = paginate(
    hadiths[narrator].length,
    Number(page),
    Number(limit)
  );

  if (page > pagination.totalPages) {
    throw new ApiError(httpStatus.NOT_FOUND, 'not found');
  }

  return {
    ...narratorBySlug,
    pagination,
    items: hadiths[narrator].slice(
      pagination.startIndex,
      pagination.endIndex + 1
    ),
  };
};

const getHadith = (narrator, number) => {
  const narratorBySlug = getNarratorBySlug(narrator);

  if (!narratorBySlug) {
    throw new ApiError(httpStatus.NOT_FOUND, 'not found');
  }

  const hadith = hadiths[narratorBySlug.slug].find(
    (h) => h.number === Number(number)
  );

  if (!hadith) {
    throw new ApiError(httpStatus.NOT_FOUND, 'not found');
  }

  return {
    ...omit(narratorBySlug, 'total'),
    ...hadith,
  };
};

module.exports = { getNarrates, getHadiths, getHadith };
