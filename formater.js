module.exports = function(game, data) {
    return require(`./gameformater/${game}`)(data);
};
