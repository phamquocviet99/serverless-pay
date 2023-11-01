import express from "express";

import authentication from "./authentication";
import users from "./users";
import packageUseRouter from "./packageUse.router";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  packageUseRouter(router);
  return router;
};
