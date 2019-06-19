const multer = require('multer');
const upload = multer({dest: "upload/"});
const fs = require('fs');
const uuidv4 = require('uuid/v4');

module.exports = (router) => {
    router.post('/edit/image', upload.single('file'), (req, res, next) => {

        const bucketKey = `content/${uuidv4()}`;

        fs.createReadStream(req.file.path).pipe(
            req.service.s3
                .uploadFromStreamPipe(bucketKey)
        ).on('error', (error) => {
            console.error('streaming media failed', error);
            next(error);
        }).on('end', () => {
            res.send({
                src: `https://d2wuq4ew1rzuz4.cloudfront.net/${bucketKey}`
            });
        });
    });
};