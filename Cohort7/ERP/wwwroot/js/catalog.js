function retrieveCatalog() {
    //url: /catalog/getCatalog
    $.ajax({
        url: '/catalog/getCatalog',
        type: 'GET',
        success: function (res) {
            console.warn("From server", res);
            // display cars on the HTML
            for (let i = 0; i < res.length; i++) {
                displayCar(res[i]);
            }
        },
        error: function (detail) {
            console.error(detail);
        }
    });

}

function displayCar(car) {
    //get container

    var container = $("#catalog");

    //create template/sntax
    var sntx =
    `<div class="item" id="${car.year}">
        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span>
                </h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
                    semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                    commodo.</p>
                <div class="button-div">
                    <button class="btn btn-primary mb-2">Add to Cart</button>
                </div>
            </div>
            <div class="col-md-5">
                <img class="image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="${car.image}" width="500" height="500">
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for
                        yourself.</span></h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                    euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                    tellus ac cursus commodo.</p>
                <div class="button-div">
                    <button class="btn btn-primary mb-2">Add to Cart</button>
                </div>
            </div>
            <div class="col-md-5 order-md-1">
                <img class="image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="${car.image}" width="500" height="500">
            </div>
        </div>

        <hr class="featurette-divider">

    </div>`;

    
    //     <h3>${car.year} ${car.make} ${car.model}</h3>
    //     image here
    // </div>`;

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