function retrieveCatalog() {
//url: /catalog/getCatalog
$.ajax({
    url: '/catalog/getCatalog',
    type: 'GET',
    success: function(res){
        console.warn("From server", res);
    },
    error: function(detail) {
        console.error(detail);
    }
});

}

function init() {
    console.log("Catalog page!");
    // get data
    retrieveCatalog()
    // hooks events
}

window.onload = init;