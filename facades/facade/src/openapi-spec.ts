import {ApplicationConfig} from '@loopback/core';
import {FacadeApplication} from './application';

/**
 * Export the OpenAPI spec from the application
 */

const PORT = 3004;
const FILEARG = 2;
async function exportOpenApiSpec(): Promise<void> {
  const config: ApplicationConfig = {
    rest: {
      port: +(process.env.PORT ?? PORT),
      host: process.env.HOST ?? 'localhost',
    },
  };
  const outFile = process.argv[FILEARG] ?? '';
  const app = new FacadeApplication(config);
  await app.boot();
  await app.exportOpenApiSpec(outFile);
}

exportOpenApiSpec()
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error('Fail to export OpenAPI spec from the application.', err);
    process.exit(1);
  });
