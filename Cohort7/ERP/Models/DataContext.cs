using Microsoft.EntityFrameworkCore;

namespace ERP.Models {
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){

        }

        // specify the list of models (classes) that you want to become a table on the DB
        public DbSet<Car> Cars {get; set;}
    }
}