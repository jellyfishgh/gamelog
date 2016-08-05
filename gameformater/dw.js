module.exports = function(log) {
    var arr = log.split(/[\s]+/);
    var html = "";
    for (var i = 3; i < arr.length; i++) {
        if (arr[i].indexOf("2015") > -1) {
            html += "<h4>" + arr[i] + "</h4>";
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