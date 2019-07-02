module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },

    currentTimestamp: function() {
        return new Date().getTime().toString()
    },

    timestampToDate: function(timestamp) {
        return new Date(parseInt(timestamp))
    }
}