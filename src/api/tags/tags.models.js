import { Model} from 'sequelize';
export default (sequelize, DataTypes) => {
    class Tag extends Model {} 
        Tag.init ({
            name:DataTypes.STRING,
            postId: DataTypes.INTEGER
        }, {sequelize, modelName: 'tag'});

        return Tag;
    }
