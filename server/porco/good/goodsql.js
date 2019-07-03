var table = 'good'
var goodsql = {
	insert:'INSERT INTO `' + table + '` (`id`, `sn`, `createdtime`, `updatedtime`, `name`, `unit`, `description`, `images`, `vendor`, `price`, `tags`, `extend`)\
			VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    delete: 'DELETE FROM `' + table + '` WHERE `id`=? AND `sn`=?',
    update:'UPDATE `'+ table + '` SET `updatedtime`=?,`name`=?,`unit`=?,`description`=?,`images`=?,`vendor`=? ,`price`=? ,`tags`=? ,`extend`=? \
            WHERE `id`=? AND `sn`=?',
    list: 'SELECT * FROM `' + table + '`',
	retrieve: 'SELECT * FROM `' + table + '` WHERE `sn`=?'
}

module.exports = goodsql;