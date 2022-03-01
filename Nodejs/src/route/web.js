import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.post("/home-page", homeController.postCRUD);
  router.get("/get-crud", homeController.getCRUD);
  router.get("/get-all-user", homeController.getAllUser);
  router.get("/edit-crud", homeController.getEditCRUD);

  router.get("/delete-crud", homeController.getDeleteCRUD);
  router.post("/put-crud", homeController.putCRUD);

  router.post("/api/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = initWebRoutes;
