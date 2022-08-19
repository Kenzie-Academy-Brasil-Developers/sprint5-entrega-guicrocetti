import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import userRoutes from "./routers/users.routes";
// import "dotenv/config";
// import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.use(handleErrorMiddleware);

// const init = async () => {
//   if (process.env.NODE_ENV !== "test jest") {
//     await AppDataSource.initialize();
//     app.listen(3000, () => console.log("server running"));
//   }
// };

// init()

export default app;
