module.exports = (router) => {

    router.get('/edit/content', (req, res, next) => {
        req.service
            .content
            .getContents({
                id: parseInt(req.query.id),
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
            .getContentById(parseInt(req.params.id))
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

    router.delete('/edit/content/:id', (req, res, next) => {
        req.service
            .content
            .deleteContent(req.query.id)
            .then((value) => {
                res.send(value);
            }).catch(next);
    });

};