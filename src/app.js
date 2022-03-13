const express = require('express');
const cors = require('cors');
const routesV1 = require('./routes/v1');
const ApiError = require('./utils/ApiError');
const httpStatus = require('./utils/httpStatus');
const { errorConverter, errorHandler } = require('./middlewares/error');
const morgan = require('./config/morgan');
const config = require('./config/config');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(express.json());
app.use(cors());

app.use('/v1', routesV1);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
