const BaseService = require('./_baseService');
const jwt = require('jsonwebtoken');
const requestPromise = require('request-promise');

class AuthenticateService extends BaseService {
    constructor(serviceProvider, mongoDb) {
        super(serviceProvider, mongoDb);
    }

    checkPermission(fbAppUserId) {
        return new Promise((resolve, reject) => {
            const adminIds = ['2374095842648247', '2390341574413583'];
            const hasAuth = adminIds.includes(fbAppUserId);
            resolve(hasAuth);
        });
    }

    authenticate(jwtToken) {
        return jwt.verify(jwtToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                throw new Error('AuthenticateError: jwt?');
            } else {
                return this.checkPermission(decoded.id).then(hasAuth => {
                    if (hasAuth) {
                        return decoded;
                    } else {
                        throw new Error('AuthenticateError: Permission?');
                    }
                });
            }
        })
    }

    verifyFacebookAccessToken(fbAccessToken) {
        return requestPromise({
            method: 'GET',
            uri: 'https://graph.facebook.com/v3.3/me',
            qs: {
                access_token: fbAccessToken
            },
            json: true
        }).catch(err => {
            console.error(err);
            throw new Error('GraphFacebookError');
        }).then(result =>
            this.checkPermission(result.id)
                .then(hasAuth => {
                    if (hasAuth) {
                        const params = Object.assign({}, result, {
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            access_token: fbAccessToken
                        });
                        const jwtEncode = jwt.sign(params, process.env.JWT_SECRET_KEY);

                        return Object.assign({}, result, {access_token: jwtEncode})
                    } else {
                        throw new Error(`AuthenticateError: ${result.id} don't have permission`)
                    }
                })
        );
    }
}

module.exports = AuthenticateService;