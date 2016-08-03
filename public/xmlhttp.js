function getXmlHttp(func, type) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //ie7+,firefox,chrome,safari,opera
        xmlhttp = new XMLHttpRequest();
    } else {
        //ie6,5
        try {
            xmlhttp = new ActiveObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlhttp = new ActiveObject('Microsoft.XMLHTTP');
        }
    }
    if (func) {
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var arg;
                var args = Array.prototype.slice.call(arguments, 2);
                if (type == "text") {
                    arg = xmlhttp.responseText;
                } else if (type == "xml") {
                    arg = xmlhttp.responseXML;
                } else {
                    arg = xmlhttp.response;
                }
                args.unshift(arg);
                func.apply(null, args);
            }
        }
    }
    return xmlhttp;
}
