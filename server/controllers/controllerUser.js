import db from './../models';

const controllerUser = {};

controllerUser.post = (req, res) => {
    const { username, password } = req.body

    //validation

    const user = new db.User({
        username,
        password
    })

    user.save().then((newUser) => {
        res.status(200).json({
            success: true,
            data: newUser,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        })
    })
}

export default controllerUser;
