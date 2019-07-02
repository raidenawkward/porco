
var mysql=require('mysql');
var $conf=require('../conf/db.js');
var $util=require('../util/util.js');
var $sql=require('./goodsql.js');

var pool = mysql.createPool($util.extend({}, $conf.mysql));

var jsonWrite = function (res, ret) {
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

                    jsonWrite(res, result);
                    connection.release();
            });
        });
    },

    delete: function (req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.query.id;
            connection.query($sql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;

            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.update, [param.name, param.desc,param.price,param.sum,param.id], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'修改成功'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                connection.release();
            });
        });
    },
        //得到所有商品 在路由routes调用本方法，这个方法调用sql语句 ，并返回相应结果jsonwrite
    list: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            console.log("wtf?! %s", err);
            connection.query($sql.list, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },

    retrieve: function (req, res, next) {
        var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.retrieve, id, function(err, result) {
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
};