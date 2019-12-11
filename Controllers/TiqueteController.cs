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
        public async Task<ActionResult<TiqueteItem>> Post(TiqueteItem request)
        {

          var tiquete = new TiqueteItem()
            {
                Id=request.Id,
                Id_cliente = request.Id_cliente,
                id_ruta=request.id_ruta,
                Cantidad=request.Cantidad,
                Total=request.Total
            };
          tiquete.Total=tiquete.Cantidad*Getrutavalor(tiquete.id_ruta);
            _context.TiqueteItems.Add(tiquete);
            try
            {
    await _context.SaveChangesAsync(); 
            }
            catch (DbUpdateException)
        {
            if (!(ClienteExists(tiquete.Id_cliente)))
                {
                    ModelState.AddModelError("Cliente", "El cliente no existe");
                    var problemDetails = new ValidationProblemDetails(ModelState)
                    {
                        Status = StatusCodes.Status400BadRequest,
                    };
                    return BadRequest(problemDetails);
                }else{
                     if (!(RutaExists(tiquete.id_ruta)))
                {
                    ModelState.AddModelError("Ruta", "La ruta no existe");
                    var problemDetails = new ValidationProblemDetails(ModelState)
                    {
                        Status = StatusCodes.Status400BadRequest,
                    };
                    return BadRequest(problemDetails);
                }
                }
        }
            return CreatedAtAction("GetPersona", new { id = tiquete.Id },tiquete);
        }

        private bool ClienteExists(int id)
        {
            return _context.ClienteItems.Any(e => e.Id_cliente == id);
        }
  private bool RutaExists(int id)
        {
            return _context.RutaItems.Any(e => e.Id_ruta== id);
        }
        private int Getrutavalor(int id)
        {
            var areolineaitem =  _context.RutaItems.Find(id);
            if (areolineaitem==null)
            {
                return 0;
            }
            return areolineaitem.Valor;
        }
     
        }
   
}