using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace PrParcial.Models
{
     
    public class AreolineaItem
    {
        [Key][JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("ruta")]
        public string Ruta { get; set; }
    }
}