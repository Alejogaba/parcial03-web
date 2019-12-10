using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace PrParcial.Models
{
     [Table("CLIENTEITEM")]
    public class ClienteItem
    {
        [Key][JsonProperty("id_cliente")]
        public int Id_cliente { get; set; }
         [JsonProperty("nombre")]
        public string nombre { get; set; }
         [JsonIgnore]
         public ICollection<TiqueteItem> TiqueteItems  { get; set; }
    }
}