using Microsoft.EntityFrameworkCore.Migrations;

namespace ToolBox.Migrations
{
    public partial class RemovesBorrowPriceFieldAndRequiredLogicForNullValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BorrowPrice",
                table: "Tools");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BorrowPrice",
                table: "Tools",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
