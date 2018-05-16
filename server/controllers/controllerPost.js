import db from './../models'

const controllerPost = {};

controllerPost.post = (req, res) => {
    const {
        title,
        text,
        link,
        userId,
    } = req.body;

    //Validation with either link or text, not both


    const post = new db.Post({
        title,
        text,
        link,
        _creator: userId,
    });

    post.save().then((newPost) =>{
        return res.status(200).json({
            success: true,
            data: newPost,
        });
    }).catch((err) => {
        return res.status(500).json({
            message: err,
        });
    });
};

controllerPost.getAll = (req, res) => {
    db.Post.find({}).populate({
        path: '_creator',
        select: 'username createdAt'
    }).then((posts) => {
        return res.status(200).json({
            success: true,
            data: posts
        })
    }).catch((err) => {
        return res.status(500).json({
            message: err,
        });
    });
}

export default controllerPost;