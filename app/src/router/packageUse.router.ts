import express from "express";
import {
  create,
  getAll,
  getAllActive,
  getById,
  remove,
  update,
} from "../controllers/packageUse.controller";
export default (router: express.Router) => {
  const nameRouter = "packages";
  router.get(`/${nameRouter}/all`, getAll);
  router.get(`/${nameRouter}`, getAllActive);
  router.get(`/${nameRouter}/:id`, getById);
  router.post(`/${nameRouter}`, create);
  router.patch(`/${nameRouter}/:id`, update);
  router.delete(`/${nameRouter}/:id`, remove);
};
