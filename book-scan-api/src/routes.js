import { Router } from "express";

import users from "./app/controllers/UsersController";

const routes = new Router();

// Users
routes.get("/users/", users.index);
routes.get("/users/:email", users.show);
routes.post("/users", users.create);
routes.put("/users/:email", users.update);
routes.delete("/users/:email", users.destroy);

export default routes;
