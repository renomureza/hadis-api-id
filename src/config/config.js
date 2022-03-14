const Yup = require('yup');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Yup.object({
  NODE_ENV: Yup.string()
    .oneOf(['production', 'development', 'test'])
    .required(),
  PORT: Yup.number().default(3000).required(),
  BASE_URL: Yup.string().default('http://localhost:3000'),
}).unknown();

let envVars;

try {
  envVars = envVarsSchema.validateSync(process.env);
} catch (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  baseUrl: envVars.BASE_URL,
};
