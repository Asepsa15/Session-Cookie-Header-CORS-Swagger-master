function auth(req, res, next){
    const authHeader = req.header('Authorization');
    const key = 'Asep';
    if(authHeader === key){
        next();
    }else{
        res.status(401).send({
            message: 'unauthorize'
        });
    }
}
module.exports = auth;