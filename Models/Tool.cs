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
        public bool rent { get; set; }
        public bool borrow { get; set; }
        public bool purchase { get; set; }
    }
}