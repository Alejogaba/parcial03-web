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
    public class RutaController : Controller
    {
        
        private readonly MyContext _context;
        public RutaController(MyContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RutaItem>>> GetPersona()
        {
            return await _context.RutaItems.ToListAsync();
        }
        
      
        [HttpGet("{id}")]
        public async Task<ActionResult<RutaItem>> GetPersona(int id)
        {
            var areolineaitem = await _context.RutaItems.FindAsync(id);
            if (areolineaitem==null)
            {
                return NotFound();
            }
            return areolineaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<RutaItem>> PostPersona(RutaItem areolineaitem)
        {
            _context.RutaItems.Add(areolineaitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = areolineaitem.Id_ruta }, areolineaitem);
        }

     
        }
   
}