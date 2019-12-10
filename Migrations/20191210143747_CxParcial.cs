using Microsoft.EntityFrameworkCore.Migrations;
using Oracle.EntityFrameworkCore.Metadata;

namespace PrParcial.Migrations
{
    public partial class CxParcial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CLIENTEITEM",
                columns: table => new
                {
                    Id_cliente = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    nombre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CLIENTEITEM", x => x.Id_cliente);
                });

            migrationBuilder.CreateTable(
                name: "RUTAITEM",
                columns: table => new
                {
                    Id_ruta = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    Origen = table.Column<string>(nullable: true),
                    Destino = table.Column<string>(nullable: true),
                    Valor = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RUTAITEM", x => x.Id_ruta);
                });

            migrationBuilder.CreateTable(
                name: "TIQUETEITEM",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    Id_cliente = table.Column<int>(nullable: false),
                    id_ruta = table.Column<int>(nullable: false),
                    Cantidad = table.Column<int>(nullable: false),
                    Total = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TIQUETEITEM", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TIQUETEITEM_CLIENTEITEM_Id_cliente",
                        column: x => x.Id_cliente,
                        principalTable: "CLIENTEITEM",
                        principalColumn: "Id_cliente",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TIQUETEITEM_RUTAITEM_id_ruta",
                        column: x => x.id_ruta,
                        principalTable: "RUTAITEM",
                        principalColumn: "Id_ruta",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TIQUETEITEM_Id_cliente",
                table: "TIQUETEITEM",
                column: "Id_cliente");

            migrationBuilder.CreateIndex(
                name: "IX_TIQUETEITEM_id_ruta",
                table: "TIQUETEITEM",
                column: "id_ruta");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TIQUETEITEM");

            migrationBuilder.DropTable(
                name: "CLIENTEITEM");

            migrationBuilder.DropTable(
                name: "RUTAITEM");
        }
    }
}
