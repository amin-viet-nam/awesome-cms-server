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

    router.get('/edit/content', (req, res, next) => {
        req.service
            .content
            .getContents({
                id: req.query.id,
                language: req.query.language,
                type: req.query.type,
                status: req.query.status,
                date: req.query.date,
                offset: parseInt(req.query.offset || 0),
                size: Math.max(req.query.size || 25, 25)
            })
            .then((value) => {
                res.send(value);
            }).catch(next);
    });

    router.get('/edit/content/:id', (req, res, next) => {
        req.service
            .content
            .getContentById(req.params.id)
            .then((value) => {
                res.send(value);
            }).catch(next);
    });

    router.post('/edit/content', (req, res, next) => {
        req.service
            .content
            .insertContent(req.body)
            .then((value) => {
                res.send(value);
            }).catch(next);
    });

    router.put('/edit/content/:id', (req, res, next) => {
        req.service
            .content
            .replaceContent(req.body)
            .then((value) => {
                res.send(value);
            }).catch(next);
    });

};