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
    public class TiqueteController : Controller
    {
        
        private readonly MyContext _context;
        public TiqueteController(MyContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TiqueteItem>>> GetPersona()
        {
            return await _context.TiqueteItems.ToListAsync();
        }
        
        
        [HttpPost]
        public async Task<ActionResult<TiqueteItem>> PostPersona(TiqueteItem tiqueteitem)
        {
            _context.TiqueteItems.Add(tiqueteitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = tiqueteitem.Id }, tiqueteitem);
        }

     
        }
   
}