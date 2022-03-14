const express = require('express');
const hadithsRoutes = require('./hadith.route');
const homeRoutes = require('./home.route');
const docRoutes = require('./doc.route');

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

const devRoutes = [
  // routes available only in development mode
  {
    path: '/doc',
    route: docRoutes,
  },
];

routers.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
devRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
// }

module.exports = router;
