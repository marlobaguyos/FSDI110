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
    
    // public IActionResult Catalog(){
    //   return View();
    // }

  //   [HttpPost]
  //   public IActionResult SaveCar([FromBody]){
      
  //   }


  // }

}