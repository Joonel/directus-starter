module.exports = function (env) {
    return {
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        DB_CLIENT: env.DB_CLIENT,
        DB_HOST: env.DB_HOST,
        DB_PORT: env.DB_PORT,
        DB_DATABASE: env.DB_DATABASE,
        DB_USER: env.DB_USER,
        DB_PASSWORD: env.DB_PASSWORD,
    };
};
