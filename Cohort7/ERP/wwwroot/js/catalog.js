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

    <hr class="featurette-divider">
        <div class="row featurette">
            <div class="col-md-5 order-md-2 xyz">
                <h2 class="featurette-heading">${car.year} ${car.make}<span class="text-muted"> ${car.model}</span></h2>
                <p class="lead font-weight-bold">${car.color} | ${car.seats} Seats | <strong>$${car.price}</strong></p>
                <p class="lead font-weight-bold font-italic">${car.mileage} mi | <strong>${car.condition}</strong> | ${car.mpg} MPG</strong></p>
                <div class="button-div catalog-btn">
                    <button class="btn btn-dark mb-2 pogi">Add to Cart</button>
                </div>
            </div>
            <div class="col-md-7 order-md-1 pogi">
                <img class="image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="${car.image}" width="500" height="500">
            </div>
        </div>

        

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