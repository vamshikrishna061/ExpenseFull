const express = require("express");

const candyController = require("../controllers/candy");

const router = express.Router();

router.get("/get-candy", candyController.getCandy);

router.post("/post-candy", candyController.postCandy);

router.get("/btnone-candy/:candyId", candyController.btnOneCandy);

router.get("/btntwo-candy/:candyId", candyController.btnTwoCandy);

router.get("/btnthree-candy/:candyId", candyController.btnThreeCandy);

module.exports = router;
