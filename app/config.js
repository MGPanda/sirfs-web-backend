const config = {
    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 5300,
        netlify: process.env.NETLIFY_URL || 'https://sirfs-app.netlify.app',
        secret: process.env.SECRET || 'keyboardcat',
        jwt: {
            expiresIn: process.env.JWT_EXPIRES || '100m',
        },
        bcrypt: {
            rounds: Number.parseInt(process.env.BCRYPT_ROUNDS) || 10,
        }
    },
    db: {
        uri: process.env.DB_URI,
    }
};

module.exports = config;