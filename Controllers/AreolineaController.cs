using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PrParcial.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace TaskSharpHTTP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreolineaController : Controller
    {
        
        private readonly MyContext _context;
        public AreolineaController(MyContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AreolineaItem>>> GetPersona()
        {
            return await _context.AreolineaItems.ToListAsync();
        }
        
        [HttpGet("buscar")]
        public async Task<ActionResult<AreolineaItem>> Login(string nombre)
        {
            var arelineaitem = await _context.AreolineaItems.Where(p => p.Ruta == nombre).FirstOrDefaultAsync();
          if (arelineaitem==null)
            {
                 ModelState.AddModelError("Valor Crédito", "El valor del crédito debe ser menor a $100.000");
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status404NotFound,
                };
                return NotFound(problemDetails);
            }
            return arelineaitem;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AreolineaItem>> GetPersona(int id)
        {
            var areolineaitem = await _context.AreolineaItems.FindAsync(id);
            if (areolineaitem==null)
            {
                return NotFound();
            }
            return areolineaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<AreolineaItem>> PostPersona(AreolineaItem areolineaitem)
        {
            _context.AreolineaItems.Add(areolineaitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = areolineaitem.Id }, areolineaitem);
        }

     
        }
   
}