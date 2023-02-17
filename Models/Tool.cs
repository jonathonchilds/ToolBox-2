namespace ToolBox.Models
{
    public class Tool
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Owner { get; set; }
        public string ImageUrl { get; set; }
        public bool IsAvailable { get; set; }
        public bool CanBeRented { get; set; }
        public bool CanBePurchased { get; set; }
        public bool CanBeBorrowed { get; set; }
    }
}