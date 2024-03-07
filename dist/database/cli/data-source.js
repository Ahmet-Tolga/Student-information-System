"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
const dataSourceOptions = {
    type: 'postgres',
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    entities: [__dirname + '/../../**/*.entity.{ts,js}'],
    migrations: [__dirname + '/../../**/database/migrations/*.js'],
    synchronize: false,
    logging: false,
};
const dataSource = new typeorm_1.DataSource(dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map