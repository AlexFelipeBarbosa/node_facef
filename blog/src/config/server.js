import Hapi from '@hapi/hapi';
import HapiSequelize from 'hapi-sequelizejs';
import HapiRouter from 'hapi-router';
import HapiAuthJWT from 'hapi-auth-jwt2';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite:blog.sqlite');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.register([
    {
      plugin: HapiSequelize,
      options: [
        {
          name: 'blog',
          models: [
            'src/api/**/**.models.js'
          ],
          sequelize,
          sync: true
        }
      ]
    },
    {
      plugin: HapiRouter,
      options: {
        routes: 'src/api/**/**.routes.js'
      }
    },
    HapiAuthJWT
  ]);

  server.auth.strategy('jwt', 'jwt', {
    key: 'stubJWT',
    validate: async (decoded, request, h) => {
      return { isValid: true, credentials: decoded };
    }
  });

  server.auth.default('jwt');

  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      return 'Hello hapi';
    }
  });

  await server.start();

  console.log('\n\nServer running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

init();
