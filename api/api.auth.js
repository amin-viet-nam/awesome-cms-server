module.exports = (router) => {

    router.get('/', (req, res, next) => {
        res.send('Cms');
    });

    router.get('/ping', (req, res, next) => {
        res.send('pong');
    });

    router.get('/edit/signup', (req, res, next) => {
        return req.service
            .authenticate
            .verifyFacebookAccessToken(req.query.accessToken)
            .then(result => {
                res.send(result);
            })
            .catch(next);
    });
};