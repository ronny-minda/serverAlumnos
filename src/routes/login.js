const { Router } = require("express");
const { logear } = require("../controllers/login");

const router = Router();

router.post("/login", logear);

module.exports = router;
