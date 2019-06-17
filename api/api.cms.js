module.exports = (router) => {

    router.get('/', (req, res, next) => {
        res.send('Cms');
    });

    router.get('/ping', (req, res, next) => {
        res.send('pong');
    });
};