
var mysql=require('mysql');
var $conf=require('../conf/db.js');
var $util=require('../util/util.js');
var $sql=require('./goodsql.js');

var pool = mysql.createPool($util.extend({}, $conf.mysql));

var writeResponse = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: 'failed'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {

    add: function (req, res, next) {
        console.log("============= good add with body below =============");
        console.log(req.body);
        console.log("============= good add with body above =============");
        pool.getConnection(function(err, connection) {
            var goodjson = req.body;

            var timestamp = new Date().getTime().toString();
            // (`id`, `sn`, `createdtime`, `updatedtime`, `name`, `unit`, `description`, `images`, `vendor`, `price`, `tags`, `extend`)
            connection.query($sql.insert, [goodjson.sn,
                timestamp, // goodjson.createdtime,
                timestamp, // goodjson.updatedtime,
                goodjson.name,
                goodjson.unit,
                goodjson.description,
                JSON.stringify(goodjson.images),
                JSON.stringify(goodjson.vendor),
                JSON.stringify(goodjson.price),
                JSON.stringify(goodjson.tags),
                JSON.stringify(goodjson.extend)], function(err, result) {
                    if (result) {
                        result = {
                            code: 200,
                            msg:'succeed',
                            id: result.insertId
                        };
                    } else {
                        result = {
                            code: 500,
                            msg:'failed',
                            result: err,
                        };
                    }

                    writeResponse(res, result);
                    connection.release();
            });
        });
    },

    delete: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var goodjson = req.body;

            connection.query($sql.delete, [goodjson.id, goodjson.sn], function(err, result) {
                console.log("result: %d %s\n", err, result)
                if (result && result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'succeed'
                    };

                } else {
                    result = {
                        code: 500,
                        msg:'failed',
                        result: err,
                    };
                }

                writeResponse(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            var goodjson = req.body;
            var timestamp = new Date().getTime().toString();

            connection.query($sql.update, [
                timestamp, // goodjson.updatedtime,
                goodjson.name,
                goodjson.unit,
                goodjson.description,
                JSON.stringify(goodjson.images),
                JSON.stringify(goodjson.vendor),
                JSON.stringify(goodjson.price),
                JSON.stringify(goodjson.tags),
                JSON.stringify(goodjson.extend),
                // conditions
                goodjson.id, goodjson.sn], function(err, result) {
                    if (result && result.affectedRows > 0) {
                        result = {
                            code: 200,
                            msg:'succeed'
                        };

                    } else {
                        result = {
                            code: 500,
                            msg:'failed',
                            result: err,
                        };
                    }

                    writeResponse(res, result);

                    connection.release();
            });
        });
    },

    list: function (req, res, next) {
        pool.getConnection(function(err, connection) {

            connection.query($sql.list, function(err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: 'succeed',
                        data: result
                    };

                } else {
                    result = {
                        code: 500,
                        msg:'failed',
                        result: err,
                    };
                }
                writeResponse(res, result);
                connection.release();
            });
        });
    },

    retrieve: function (req, res, next) {
        var sn = req.query.sn;
        pool.getConnection(function(err, connection) {
            connection.query($sql.retrieve, sn, function(err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: 'succeed',
                        data: result
                    };

                } else {
                    result = {
                        code: 500,
                        msg:'failed',
                        result: err,
                    };
                }
                writeResponse(res, result);
                connection.release();
            });
        });
    },
};