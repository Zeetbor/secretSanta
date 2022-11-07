export const dbConfig =  {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'secretSanta',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}