const { default: mongoose } = require("mongoose")
const Video = require("../models/video");
const Product = require("../models/product")
const Comment = require("../models/comment")

const getVideos = async (req,res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getVideosbyID = async (req,res) => {
    let video_id = req.params.id

    if (!video_id) {
      throw Error("Please write your Video ID")
    }
    
    try {
        const videos = await Video.find({ _id : new mongoose.Types.ObjectId(video_id)});
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getProducts = async (req, res) => {

    try {
        const videos = await Product.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getProductByID = async (req, res) => {
    let video_id = req.params.id

    if (!video_id) {
      throw Error("Please write your Video ID")
    }

    try {
        const videos = await Product.find({ video_id : new mongoose.Types.ObjectId(video_id)});
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getComments = async (req, res) => {
    try {
        const videos = await Comment.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCommentByID = async (req, res) => {
    let video_id = req.params.id

    if (!video_id) {
      throw Error("Please write your Video ID")
    }
    
    try {
        const videos = await Comment.find({ video_id : new mongoose.Types.ObjectId(video_id)});
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const addVideo = (req, res) => {
    const video = new Video({
        title: req.body.title,
        account_name: req.body.account_name,
    })

    try {
        const videoSave = video.save();
        res.status(200).json(videoSave);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const submitComment = (req, res) => {
    const username =  req.body.username;
    const comment = req.body.comment;
    const videoID = req.body.video_id;

    if (!username || !comment || !videoID) {
        throw Error("Please check your username, comment and video")
    }

    const newComment = new Comment({
        video_id: videoID,
        comment: comment,
        username: username,
        created_at: Date.now()

    })

    try {
        const commentSave = newComment.save();
        res.status(200).json({message: "Berhasil menyimpan",commentSave});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }


};

module.exports = {
    getVideos,
    getVideosbyID,
    getProducts,
    getComments,
    getProductByID,
    getCommentByID,
    addVideo,
    submitComment,
}
