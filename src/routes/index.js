const express = require('express');
const hadithsRoutes = require('./hadith.route');
const homeRoutes = require('./home.route');

const router = express.Router();

const routers = [
  {
    path: '/',
    route: homeRoutes,
  },
  {
    path: '/hadith',
    route: hadithsRoutes,
  },
];

routers.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
