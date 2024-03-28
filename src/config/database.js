require('dotenv').config();

module.exports = {
    dialect: 'mariadb',
    database: process.env.DATABASE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOSTNAME,
    port: process.env.DATABASE_PORT,
    define: {
        charset: 'utf8',
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },
    dialectOptions: {
        timezone: '-03:00'
    },
    timezone: '-03:00'
}
