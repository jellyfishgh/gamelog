module.exports = function(log) {
    var spliter = '\r\n';
    var arr = log.split(spliter);
    var html = '';
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            html += '<h3>' + arr[i] + '</h3>';
        } else {
            var firstChar = arr[i].substr(0, 1);
            if (!isNaN(parseInt(firstChar))) {
                html += '<p>' + arr[i] + '</p>';
            } else {
                html += '<p class="left">' + arr[i] + '</p>';
            }
        }
    }
    return html;
};