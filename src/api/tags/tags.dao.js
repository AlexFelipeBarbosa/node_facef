import { instances } from 'hapi-sequelizejs'

const tags = instances.getModel('tag');

/*
export default class TagsDAO {
    findAll() {
        return tags.findAll();
    }

    */
   export default class TagsDAO {
    findAll() {
        return tags.findAll({
            where: {
                postId: postId
            }
        });
    }


    findById(id) {
        return tags.findByPk(id);
    }

    create (data) {
    return tags.create(data);
    }

    async update(id, tags) {
        await tags.update(tags, {where: { id }});
        return await this.findById(id);
    }

    destroy(id) {
        return tags.destroy ({where: { id }});
    }


}