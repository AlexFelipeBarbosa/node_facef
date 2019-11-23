import PostsDAO from './posts.dao';

const postsDAO = new PostsDAO();

export async function list(request, h) {
    return await postsDAO.findAll();
}