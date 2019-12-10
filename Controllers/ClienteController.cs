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
    public class ClienteController : Controller
    {
        
        private readonly MyContext _context;
        public ClienteController(MyContext context)
        {
            _context=context;
      
        }
       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClienteItem>>> GetPersona()
        {
            return await _context.ClienteItems.ToListAsync();
        }
        
      
        [HttpGet("{id}")]
        public async Task<ActionResult<ClienteItem>> GetPersona(int id)
        {
            var areolineaitem = await _context.ClienteItems.FindAsync(id);
            if (areolineaitem==null)
            {
                return NotFound();
            }
            return areolineaitem;
        }

        
        [HttpPost]
        public async Task<ActionResult<ClienteItem>> PostPersona(ClienteItem clienteitem)
        {
            _context.ClienteItems.Add(clienteitem);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersona), new { id = clienteitem.Id_cliente }, clienteitem);
        }

     
        }
   
}