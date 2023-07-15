import { environment } from './environments/environment';
import * as dotenv from 'dotenv';

dotenv.config();

export const environmentDotenv = {
  ...environment,
  RECAPTCHA_SITE_KEY: process.env['RECAPTCHA_SITE_KEY'] ?? '',
  PLACE_ID: process.env['PLACE_ID'] ?? '',
  GOOGLE_PLACE_KEY: process.env['GOOGLE_PLACE_KEY'] ?? '',
  PUBLIC_KEY: process.env['PUBLIC_KEY'] ?? '',
  PRIVATE_MESSAGE: process.env['PRIVATE_MESSAGE'] ?? '',

  // Add your custom environment variables here
};
