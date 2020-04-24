function retrieveCatalog() {
//url: /catalog/getCatalog
$.ajax({
    url: '/catalog/getCatalog',
    type: 'GET',
    success: function(res){
        console.warn("From server", res);
        // display cars on the HTML
        for(let i=0; i<res.length; i++)
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

    //create template/sntax
    var sntx =  
    `<div class="item" id="${car.year}">
    <img class="image" src="${car.image}">
    <h4>${car.year} ${car.make} ${car.model}</h4>
    <h6 class="item-price">Price: $${car.price}</h6>
    <p>Condition: ${car.color}</p>
    <p>Condition: ${car.condition}</p>
    <p>Condition: ${car.seats}</p>
    <p>Condition: ${car.mileage}</p>
    <p>Condition: ${car.mpg}</p>
    <div class="button-div">
        <button class="btn btn-primary mb-2">Add to Cart</button>
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