const { Router } = require("express");
const { logear } = require("../middlewares/login");

const router = Router();

router.post("/login", logear);

module.exports = router;
