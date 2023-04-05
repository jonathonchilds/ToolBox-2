using System.ComponentModel.DataAnnotations;

namespace ToolBox.Models
{
    public class Tool
    {
        public int Id { get; set; } = 0;

        [Required(ErrorMessage = "You must provide a name.")]
        public string Name { get; set; } = "";
        public string ImageUrl { get; set; } = "";
        public bool Rent { get; set; } = false;
        public int RentPrice { get; set; } = 0;
        public bool Borrow { get; set; } = false;
        public int BorrowPrice { get; set; } = 0;
        public bool Purchase { get; set; } = false;
        public int PurchasePrice { get; set; } = 0;
    }
}
