import PostsDAO from './posts.dao';

const PostsDAO = new PostsDAO();

export async function list(request, h) {
    return await postsDAO.findAll();
}