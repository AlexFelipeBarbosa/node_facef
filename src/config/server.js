console.log ('scr/config/server.js');


import Hapi from '@hapi/hapi';
import {Sequelize, Model, DataTypes} from 'sequelize';
import  {CREATED, NO_CONTENT} from 'http-status';

const sequelize = new Sequelize('sqlite:blog.sqlite');

const data = [
    {
        title: 'Novo post',
        content: 'Olá amigos, nosso primeiro post',
    },
    {
        title: 'Outro post',
        content: 'Olá amigos, estamos a todo vapor produzindo conteúdo por aqui',
    }
];

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register ([
        {
            plugin: require('hapi-sequelizejs'),
            options: [
               {
                   name: 'fitafit', // nome do banco --> Alias
                   models: [
                       'src/api/**/**.models.js'
                    ],
                    sequelize,
                    sync: true
               }         
            ]
        },

        {
        plugin: require('hapi-router'),
        options: {
          routes: 'src/api/**/**.routes.js'
                }
        }
]);

await server.start();
console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init();