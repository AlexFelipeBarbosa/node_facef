const {
    NODE_ENV = 'development',
    DB_NAME = 'sqlite:blog.sqlite',
    JWT_SECRET,
    JWT_EXPIRES_IN,
    PORT = 3000
} = process.env;

export default {
    ENV: NODE_ENV,
    DB_NAME,
    JWT_EXPIRES_IN,
    JWT_SECRET, 
    PORT
}