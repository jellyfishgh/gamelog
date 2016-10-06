var fetcher = require('./fetcher');

function $(id) {
    return document.getElementById(id);
}

fetcher.fetch('/log' + window.location.search, function(err, html){
    if (err) {
        alert(err);
        $('centerDiv').style.display = 'none';
    } else {
        $('centerDiv').style.display = 'none';
        $('myDiv').innerHTML = html;
    }
});
