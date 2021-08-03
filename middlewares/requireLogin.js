
module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(404).send({message: 'you must login'});
    }
    next();
}