import { list } from "./posts.controlles";

export default  [
    {
        method: 'GET',
        path: '/posts',
        handler: list
    }
];


// server.route({
//     method: 'GET',
//     path: '/posts',
//     handler: async (request, h) => {
//         return await Post.findAll();
//     }
// });

// server.route({
//     method: 'GET',
//     path: '/',
//     handler: async (request, h) => {
//         return 'Hello hapi';
//     }
// });

// server.route({
//     method: 'GET',
//     path: '/posts/{id}',
//     handler: async (request, h) => {
//         const { id } = request.params;
//         //const post = data.find(post => post.id === +id);
//         return await Post.findByPk(id);
//     }
// });

// server.route ({
//  method: 'POST',
//  path: '/posts',
//  handler: async (request, h) => {
//      const { payload } = request;
//      const post = await Post.create(payload);

//      return h.response(post).code(CREATED);

//  }
// });

// server.route ({
// method: 'PUT',
// path: '/posts/{id}',
// handler: async (request, h) => {
//     const { params: {id}, payload } = request;
//     const post = await Post.update(payload, { where: { id }});

//     //return h.response(post).code(CREATED);
//     return post;
// }
// });

// server.route ({
// method: 'DELETE',
// path: '/posts/{id}',
// handler: async (request, h) => {
//     const { id } = request.params;

//     await Post.destroy({ where: { id }});

//     return h.response().code(NO_CONTENT);
// }
// })