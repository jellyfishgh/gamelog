module.exports = function(log) {
    var arr = log.split(/[\s]+/);
    var html = "";
    for (var i = 4; i < arr.length; i++) {
        if (i == 4) {
            html += "<h3>" + arr[i] + "</h3>";
        } else {
            html += "<p>" + arr[i] + "</p>";
        }
    }
    return html;
};