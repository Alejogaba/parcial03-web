using Microsoft.EntityFrameworkCore;

namespace PrParcial.Models
{
    public class MyContext:DbContext
    {
        public MyContext(DbContextOptions<MyContext>  options) :
        base (options)
{
}
public DbSet <RutaItem> RutaItems { get ; set ;}
public DbSet <ClienteItem> ClienteItems { get ; set ;}
public DbSet <TiqueteItem> TiqueteItems { get ; set ;}

    }
}