const express = require("express");
const router = express.Router();

const { auth, validateBody } = require("../../middlewares");
const { auth: controller } = require("../../controllers/index");
const errorHandler = require("../../helpers/errorHandler");

const { registerSchema, loginSchema } = require("../../models/UserModel");

router.post(
  "/signup",
  validateBody(registerSchema),
  errorHandler(controller.register)
);
router.post(
  "/signin",
  validateBody(loginSchema),
  errorHandler(controller.login)
);
router.post("/signout", auth, errorHandler(controller.logout));

module.exports = router;
