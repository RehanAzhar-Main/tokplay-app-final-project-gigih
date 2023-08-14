const express = require('express');
const router = express.Router();
const videoController = require("../controllers/video.controller")

router.get('/', videoController.getVideos);
router.get('/:id', videoController.getVideosbyID);
router.get('/products', videoController.getProducts);
router.get('/:id/product', videoController.getProductByID);
router.get('/comments', videoController.getComments);
router.get('/:id/comment', videoController.getCommentByID);
router.post('/submit', videoController.submitComment);
router.post('/add', videoController.addVideo);

module.exports = router;