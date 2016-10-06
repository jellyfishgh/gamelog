module.exports = {
    fetch: function(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                cb(null, xhr.responseText);
            } else {
                console.log(xhr.statusText);
                cb(new Error(xhr.statusText));
            }
        };
        xhr.onerror = function(err) {
            cb(err);
        };
        xhr.send();
    }
};
