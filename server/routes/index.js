const router = require('express').Router();
const videoRoute = require("./video.route")

router.use("/video", videoRoute);

module.exports = router