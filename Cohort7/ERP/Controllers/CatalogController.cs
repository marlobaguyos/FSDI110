using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ERP.Models;

namespace ERP.Controllers
{

  public class CatalogController : Controller {

    public IActionResult Index() {
      return View();
    }
    
    public IActionResult Register() {
      return View();
    }
    
    public IActionResult Catalog(){
      return View();
    }

    [HttpPost]
    public IActionResult SaveCar([FromBody] Car car){
      System.Console.WriteLine("Saving new car");
      System.Console.WriteLine(car.Make);

      car.Id = 1;
      return Json(car);

    }

    [HttpGet]
    public IActionResult GetCatalog() {
      // read the list from the DB
      // send the list of cars

    List<Car> cars = new List<Car>();
    var c1 = new Car();
    c1.Make = "VM";
    c1.Model = "Karmann Ghia";
    c1.Year = 1980;

    cars.Add(c1);

    return Json(cars);
    }


  }

}