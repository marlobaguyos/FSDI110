
function registerCar(){
    // get variables
    var image=$("#txtImage").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#numYear").val();
    var color=$("#txtColor").val();
    var seats=$("#numSeats").val();
    var price=$("#txtPrice").val();
    var mileage=$("#txtMileage").val();
    var condition=$("#selCondition").val();
    var mpg=$("#txtMPG").val();

    var priceNum=0;
    if(price){
        priceNum = parseFloat(price);
    }

    var yearNum=0;
    if(year){
        yearNum = parseFloat(years);
    }

    var seatsNum=0;
    if(seats){
        seatsNum = parseFloat(seats);
    }

    var mileAgeNum=0;
    if(mileage){
        mileAgeNum = parseFloat(mileage);
    }

    var mpgNum=0;
    if(mpg){
        mpgNum = parseFloat(mpg);
    }

    //Create an object

    var car = new Car(image,make,model,yearNum,color,seatsNum,priceNum,mileAgeNum,condition,mpgNum);

    // console.log('New item:' + cars.length);

    console.log("btn clicked");
    console.log(car)

    //Send the object on AjAX req
    $.ajax({
        url: '',
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

function Car(image,make,model,year,color,seats,price,mileage,condition,mpg){
    this.image=image;
    this.make = make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.seats=seats;
    this.price=price;
    this.mileage=mileage;
    this.condition=condition;
    this.mpg=mpg;
}

function init() {
    console.log("Register Page!");

    $("#carSave").click(registerCar);
}

window.onload = init;