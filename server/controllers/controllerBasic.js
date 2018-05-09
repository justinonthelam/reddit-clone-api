const controllerBasic = {};

basicController.get = (req, res) => {
    res.json({
        message: 'Welcome to our API'
    });
}
export default controllerBasic;