module.exports = function(log) {
    var arr = log.split(/[\s]+/);
    var html = "";
    for (var i = 1; i < arr.length - 1; i++) {
        if (i == 1) {
            html += "<h3>" + arr[i].replace(/#c43e1f4/g, "").replace(/#Y/g, "") + "</h3>";
        } else {
            var c = arr[i].substr(0, 1);
            if (c === "i" || c === "v" || c === "x") { //针对罗马字母特殊处理了
                html += "<p class='left'>" + arr[i] + "</p>";
            } else {
                html += "<p>" + arr[i] + "</p>";
            }
        }
    }
    return html;
};