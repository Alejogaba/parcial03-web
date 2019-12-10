using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace PrParcial.Models
{
     [Table("RUTAITEM")]
    public class RutaItem
    {
        [Key][JsonProperty("id_ruta")]
        public int Id_ruta { get; set; }
        [JsonProperty("origen")]
        public string Origen { get; set; }
        [JsonProperty("destino")]
        public string Destino { get; set; }
         [JsonProperty("valor")]
        public int Valor { get; set; }
         [JsonIgnore]
        public ICollection<TiqueteItem> TiqueteItems { get; set; }
    }
}