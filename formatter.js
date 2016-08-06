module.exports = {
    format: function(game, data, cb) {
        try {
            let formatted = require(`./gameformater/${game}`)(data);
            cb(null, formatted);
        } catch (e) {
            cb(e);
        }
    }
};