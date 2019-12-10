using Microsoft.EntityFrameworkCore;

namespace PrParcial.Models
{
    public class MyContext:DbContext
    {
        public MyContext(DbContextOptions<MyContext>  options) :
base (options)
{
}
public DbSet <AreolineaItem> AreolineaItems { get ; set ;}

    }
}