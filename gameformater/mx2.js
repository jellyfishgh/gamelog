module.exports = function(log) {
    var arr = log.split(/[\s]+/);
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            html += "<h3>" + arr[i] + "</h3>";
        } else {
            var c = arr[i].substr(0, 1);
            if (isNaN(c)) {
                html += "<p class='left'>" + arr[i] + "</p>";
            } else {
                html += "<p>" + arr[i] + "</p>";
            }
        }
    }
    return html;
};