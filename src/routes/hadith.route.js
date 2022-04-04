const express = require('express');
const hadithController = require('../controllers/hadith.controller');

const router = express.Router({ mergeParams: true });

router.get('/', hadithController.getNarrates);
router.get('/:narrator', hadithController.getHadiths);
router.get('/:narrator/:number', hadithController.getHadith);

module.exports = router;
