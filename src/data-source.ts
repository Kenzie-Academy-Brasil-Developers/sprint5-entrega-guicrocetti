// import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import "dotenv/config";

// export const AppDataSource = new DataSource({

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: process.env.POSTGRES_HOST || "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,
        synchronize: false,
        logging: true,
        entities: [User],
        migrations: ["src/migrations/*.ts"],
      });
