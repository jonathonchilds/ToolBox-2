using Microsoft.EntityFrameworkCore.Migrations;

namespace ToolBox.Migrations
{
    public partial class AddRentBorrowPurchaseColumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Tools");

            migrationBuilder.AddColumn<bool>(
                name: "CanBeBorrowed",
                table: "Tools",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CanBePurchased",
                table: "Tools",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "CanBeRented",
                table: "Tools",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsAvailable",
                table: "Tools",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CanBeBorrowed",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "CanBePurchased",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "CanBeRented",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "IsAvailable",
                table: "Tools");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Tools",
                type: "text",
                nullable: true);
        }
    }
}
