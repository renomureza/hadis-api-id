const express = require('express');
const hadithsRoutes = require('./hadith.route');

const router = express.Router();

const routers = [
  {
    path: '/hadith',
    route: hadithsRoutes,
  },
];

routers.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
