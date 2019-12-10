using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace PrParcial.Models
{
     [Table("TIQUETEITEM")]
    public class TiqueteItem
    {
        [Key][JsonProperty("id")]
        public int Id { get; set; }
         [JsonProperty("id_cliente")]
        public int Id_cliente { get; set; }
         [JsonIgnore]
        public ClienteItem ClienteItem { get; set; }
         [JsonProperty("id_ruta")]
        public int id_ruta { get; set; }
         [JsonIgnore]
        public RutaItem RutaItem { get; set; }
        [JsonProperty("cantidad")]
        public int Cantidad { get; set; }
         [JsonProperty("total")]
        public int Total { get; set; }
    }
}