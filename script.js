document.addEventListener("DOMContentLoaded", function() {
	var url = getParameterByName('url');
    console.log(url);
    document.querySelector('#link').setAttribute('href', url);
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
