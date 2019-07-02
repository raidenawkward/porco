var table = 'good'
var goodsql = {
	insert:'INSERT INTO `' + table + '` (`id`, `sn`, `createdtime`, `updatedtime`, `name`, `unit`, `description`, `images`, `vendor`, `price`, `tags`, `extend`)\
			VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    delete: 'delete from good where id=?',
    update:'UPDATE `good` SET `name`=?,`desc`=?,`price`=?,`sum`=? WHERE `id`=?',
    list: 'select * from good',
	retrieve: 'select * from good where id=?'
}

module.exports = goodsql;