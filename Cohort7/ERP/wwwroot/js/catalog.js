function retrieveCatalog() {
//url: /catalog/getCatalog
$.ajax({
    url: '/catalog/getCatalog',
    type: 'GET',
    success: function(res){
        console.warn("From server", res);
        // display cars on the HTML
        for(let i=0; i<res.lenght; i++)
        {
            displayCar(res[i]);
        }
    },
    error: function(detail) {
        console.error(detail);
    }
});

}

function displayCar(car){
    //get container
    var container = $("#catalog");

    //create template/sintax
    var sntx = 
    `<div> 
        <h3>${container.car} Make Model</h3>
        image here
    </div>`;

    //add template to container
    container.append(sntx);

}

function init() {
    console.log("Catalog page!");
    // get data
    retrieveCatalog()
    // hooks events
}

window.onload = init;