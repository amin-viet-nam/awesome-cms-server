const BaseService = require('./_baseService');

class ContentService extends BaseService {
    constructor(serviceProvider, mongoDb) {
        super(serviceProvider, mongoDb);
    }

    insertContent(content) {
        return this.mongo
            .collection('content')
            .find({})
            .sort({_id: -1})
            .limit(1)
            .toArray()
            .then((results) => results.pop() || {_id: Math.floor(Math.random() * 10000000 + 20000)})
            .then(latestItem => latestItem._id + 1)
            .then(nextId => this.mongo
                .collection('content')
                .insertOne(Object.assign(content, {_id: nextId, id: nextId}))
                .then(opsResult => opsResult.ops)
                .then((results) => results.pop() || {})
            );
    }

    replaceContent(content) {
        return this.mongo
            .collection('content')
            .replaceOne({_id: content._id}, content)
            .then(opsResult => opsResult.ops)
            .then((results) => results.pop() || {});
    }

    deleteContent(contentId) {
        throw new Error('Not support delete content');
    }

    getContentById(id) {
        return this.mongo
            .collection('content')
            .find({
                _id: id
            })
            .toArray()
            .then((results) => results.pop() || {});
    }

    getContents(filter) {
        const query = [];

        if (filter.id) {
            query.push({
                $match: {
                    _id: filter.id,
                }
            });
        }

        if (filter.language) {
            query.push({
                $match: {
                    language: filter.language
                }
            })
        }

        if (filter.type) {
            query.push({
                $match: {
                    type: filter.type
                }
            })
        }

        if (filter.status) {
            query.push({
                $match: {
                    status: filter.status
                }
            })
        }

        if (filter.date && Array.isArray(filter.date) && filter.date.length >= 2) {
            query.push({
                $match: {
                    published_at: {
                        $gte: new Date(filter.date[0]),
                        $lt: new Date(filter.date[1])
                    }
                }
            })
        }

        query.push({
            $sort: {
                _id: -1,
            }
        });

        if (filter.offset) {
            query.push({
                $skip: filter.offset
            });
        }

        query.push({
            $limit: filter.size
        });

        return this.mongo
            .collection('content')
            .aggregate(query)
            .toArray();
    }
}

module.exports = ContentService;