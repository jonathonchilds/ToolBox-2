using Microsoft.EntityFrameworkCore.Migrations;

namespace ToolBox.Migrations
{
    public partial class update_database_to_reflect_UserID_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Tools",
                type: "integer",
                nullable: true,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tools_UserId",
                table: "Tools",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Users_UserId",
                table: "Tools",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Users_UserId",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_UserId",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Tools");
        }
    }
}
