const config = {
    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 5300,
        netlify: process.env.NETLIFY_URL || 'https://sirfs-app.netlify.app',
    },
    db: {
        uri: process.env.DB_URI,
    }
};

module.exports = config;

// const config = {
//     server: {
//         secret: process.env.SECRET || 'keyboardcat',
//         bcrypt: {
//             rounds: Number.parseInt(process.env.BYCRYPT_ROUNDS) || 10,
//         },
//         jwt: {
//             expiresIn: process.env.JWT_EXPIRES || '100m',
//         },
//     },
// };
