using System.ComponentModel.DataAnnotations;

namespace ToolBox.Models
{
    public class Tool
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }

        public string PhotoURL { get; set; }

        public bool Rent { get; set; }

        public int? RentPrice { get; set; }

        public bool Borrow { get; set; }

        public bool Purchase { get; set; }

        public int? PurchasePrice { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

    }
}
