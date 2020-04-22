function retrieveCatalog() {
//url: /catalog/getCatalog
$.ajax({
    url: '/catalog/getCatalog',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(car),
    success: function(res){
        console.log("Server responded", res);
    },
    error: function(detail) {
        console.log("Error on request", detail);
    }
})

}

function init() {
    console.log("Catalog page!");
    // get data
    retrieveCatalog()
    // hooks events
}

window.onload = init;