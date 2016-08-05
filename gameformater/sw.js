module.exports = function(log) {
    var arr = log.split(/[\s]+/);
    var html = "";
    for (var i = 0; i < arr.length; i++) {
        if (i > 2) {
            if (i == 3) {
                html += "<h3>" + arr[i] + "</h3>";
            } else {
                var firstChar = arr[i].substr(0, 1);
                if (firstChar.charCodeAt() == "12304") {
                    html += "<h4>" + arr[i] + "</h4>";
                } else {
                    if (firstChar == "#") {
                        arr[i] = arr[i].replace("#Y", "");
                        arr[i] = arr[i].replace("#n", "");
                    }
                    html += "<p>" + arr[i] + "</p>";
                }
            }
        }
    }
    return html;
};